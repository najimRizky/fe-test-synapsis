import apiPath from "@/config/apiPath"
import IPost from "@/interfaces/post";
import { getRequest } from "@/services"
import { getUserById } from "../user";
import IUser from "@/interfaces/user";

export const getPostList = async (page: number = 1) => {
  const posts: any = await getRequest({ url: `${apiPath.posts}?page=${page}` })
  const uniqueUserIds: number[] = Array.from(new Set(posts?.data?.map((post: IPost) => post.user_id)));

  const userPromises = uniqueUserIds.map((id: number) => getUserById(id));
  const users: any = await Promise.all(userPromises);

  const postsWithUser = posts?.data.map((post: IPost) => {
    const user: { data: IUser } = users?.find((user: { data: IUser | null }) => {
      return user?.data?.id === post.user_id;
    });

    return {
      ...post,
      user: user?.data
    }
  });

  return {
    data: postsWithUser,
    metadata: posts?.metadata
  }
}