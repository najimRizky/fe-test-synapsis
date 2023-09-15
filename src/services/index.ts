import { IApiRequest, IGetRequest } from "./interface";

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
    },
    body: ["POST", "PATCH"].includes(method) ? JSON.stringify(body) : undefined,
    next: nextOptions
  })

  if (!res.ok) {
    return {
      error: {
        message: res.statusText,
        status: res.status
      }
    }
  }

  return await res.json()
}

export default apiRequest

export const getRequest = async ({ url, serverSide }: IGetRequest) => {
  return await apiRequest({ url, serverSide })
}

export const postRequest = async (url: string, body: any) => {
  return await apiRequest({ url, body, method: "POST" })
}

export const patchRequest = async (url: string, body: any) => {
  return await apiRequest({ url, body, method: "PATCH" })
}

export const deleteRequest = async (url: string) => {
  return await apiRequest({ url, method: "DELETE" })
}