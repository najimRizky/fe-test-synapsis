import apiPath from "@/config/apiPath"
import IPost from "@/interfaces/post";
import { getRequest } from "@/services"
import { getUserById } from "../user";
import IUser from "@/interfaces/user";

export const getPostList = async (page: number = 1) => {
  const posts: any = await getRequest({ url: `${apiPath.posts}?page=${page}` })
  const uniqueUserIds: number[] = Array.from(new Set(posts?.map((post: IPost) => post.user_id)));

  const userPromises = uniqueUserIds.map((id: number) => getUserById(id));
  const users = await Promise.all(userPromises);

  const postsWithUser = posts.map((post: IPost) => {
    const user: IUser = users.find((user: IUser) => user.id === post.user_id);
    return { ...post, user };
  });

  return postsWithUser;
}