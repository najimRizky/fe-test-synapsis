"use client"

import { getCommentsByPostId } from "@/providers/post"
import IComments from "./interface"
import { useEffect, useState } from "react"
import IComment from "@/interfaces/comment"
import CommentCard from "@/components/modules/CommentCard"

const PostComments = ({ id }: IComments) => {
  const [comments, setComments] = useState([])
  const [get, setGet] = useState(true)

  const getComments = async () => {
    const comments = await getCommentsByPostId(id)
    setComments(comments.data)
    setGet(false)
  }

  useEffect(() => {
    if (get) getComments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [get])

  return (
    <div className="mt-4 grid gap-y-6">
      {comments?.length > 0 ? comments?.map((comment: IComment, index: number) => (
        <CommentCard key={index} comment={comment} />
      )) : (
        <p>No comments yet</p>
      )}
    </div>
  )
}

export default PostComments