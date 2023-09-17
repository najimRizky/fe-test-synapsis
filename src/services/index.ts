import { IApiRequest, IDeleteRequest, IGetRequest, IPatchRequest, IPostRequest } from "./interface";

const API_URL = process.env.API_URL
const API_KEY = process.env.API_KEY

const apiRequest = async (params: IApiRequest) => {
  const {
    url,
    body = {},
    method = "GET",
    headers = {},
    cache = "default",
    nextOptions = {},
    serverSide = true
  } = params

  let fixedUrl = serverSide ? `${API_URL}${url.replace("/api", "")}` : url
  const res = await fetch(fixedUrl, {
    method: method,
    cache: cache,
    headers: {
      ...headers,
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: ["POST", "PATCH"].includes(method) ? JSON.stringify(body) : undefined,
    next: nextOptions
  })

  if (!res.ok) {
    return {
      data: null,
      metadata: null,
      error: {
        message: res.statusText,
        status: res.status
      }
    }
  }
  
  const data = await res.json()
  const metadata = {
    maxPage: Number(res.headers.get("x-pagination-pages")) || 1,
    totalElement: Number(res.headers.get("x-pagination-total")) || 0,
    page: Number(res.headers.get("x-pagination-page")) || 1
  }

  const response = {
    data,
    metadata,
    error: null
  }

  return response
}

export default apiRequest

export const getRequest = async ({ url, serverSide }: IGetRequest) => {
  return await apiRequest({ url, serverSide })
}

export const postRequest = async ({ url, body }: IPostRequest) => {
  return await apiRequest({ url, body, method: "POST", serverSide: false })
}

export const patchRequest = async ({ url, body }: IPatchRequest) => {
  return await apiRequest({ url, body, method: "PATCH", serverSide: false })
}

export const deleteRequest = async ({ url }: IDeleteRequest) => {
  return await apiRequest({ url, method: "DELETE", serverSide: false })
}