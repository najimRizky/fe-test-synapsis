import ICommentCard from "./interface"

const CommentCard = ({ comment }: ICommentCard) => {
  return (
    <div className="flex p-4 border-2 rounded-md justify-between">
      <div>
        <h4 className="font-bold text-lg">{comment.name}</h4>
        <p className="text-gray-500 text-sm underline">{comment.email}</p>
        <p className="text-gray-500 mt-4">{comment.body}</p>
      </div>
      <div className="flex flex-shrink-0 gap-x-4">
        <p>Edit</p>
        <p>Delete</p>
      </div>
    </div>
  )
}

export default CommentCard