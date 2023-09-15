import apiPath from "@/config/apiPath"
import { getRequest } from "@/services"

export const getUserList = async (page: number = 1) => {
  const users = await getRequest({ url: `${apiPath.users}?page=${page}` })
  return users
}

export const getUserById = async (id: number) => {
  const user = await getRequest({ url: `${apiPath.users}/${id}` })
  return user
} 