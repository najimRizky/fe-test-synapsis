import apiPath from "@/config/apiPath"
import IPost from "@/interfaces/post";
import { getRequest, patchRequest, postRequest } from "@/services"
import { getUserById } from "../user";
import IUser from "@/interfaces/user";
import { IGetPostList } from "./interface";

export const getPostList = async ({ page = 1, query }: IGetPostList) => {
  const queryString = query ? `&title=${query}` : '';

  const posts: any = await getRequest({ url: `${apiPath.posts}?page=${page}${queryString}` });
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

export const getPostListByUserId = async (userId: number, page: number = 1) => {
  return await getRequest({ url: `${apiPath.users}/${userId}/posts?page=${page}`, serverSide: false })
}

export const getPostById = async (id: number) => {
  const post: any = await getRequest({ url: `${apiPath.posts}/${id}` })

  if (!post?.data) return post;

  const user: any = await getUserById(post?.data?.user_id);

  return {
    data: {
      ...post?.data,
      user: user?.data
    },
    metadata: post?.metadata
  }
}

export const getCommentsByPostId = async (id: number, page: number = 1) => {
  return await getRequest({ url: `${apiPath.posts}/${id}/comments?page=${page}`, serverSide: false })
}

export const createPost = async (userId: number = 0, data: any) => {
  return await postRequest({ url: `${apiPath.users}/${userId}/posts`, body: data })
}

export const updatePost = async (id: number, data: any) => {
  return await patchRequest({ url: `${apiPath.posts}/${id}`, body: data })
}