import apiPath from "@/config/apiPath"
import { getRequest, postRequest } from "@/services"
import { IGetUserList } from "./interface"

export const getUserList = async ({ page = 1, query }: IGetUserList) => {
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