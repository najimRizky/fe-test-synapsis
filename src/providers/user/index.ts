import apiPath from "@/config/apiPath"
import { deleteRequest, getRequest, patchRequest, postRequest } from "@/services"

export const getUserList = async (page: number = 1, query = "") => {
  const queryString = query ? `&name=${query}` : '';

  const users = await getRequest({ url: `${apiPath.users}?page=${page}${queryString}` })
  return users
}

export const getUserById = async (id: number) => {
  const user = await getRequest({ url: `${apiPath.users}/${id}` })
  return user
}

export const createUser = async (data: any) => {
  const user = await postRequest({ url: `${apiPath.users}`, body: data })
  return user
}

export const updateUser = async (id: number, data: any) => {
  const user = await patchRequest({ url: `${apiPath.users}/${id}`, body: data })
  return user
}

export const deleteUser = async (id: number) => {
  const user = await deleteRequest({ url: `${apiPath.users}/${id}` })
  return user
}