import ICommentCard from "./interface"

const CommentCard = ({ comment, onEdit, onDelete }: ICommentCard) => {
  return (
    <div className="flex flex-col sm:flex-row p-4 border-2 rounded-md justify-between gap-4">
      <div>
        <h4 className="font-bold text-lg">{comment.name}</h4>
        <p className="text-gray-500 text-sm underline">{comment.email}</p>
        <p className="text-gray-500 mt-4">{comment.body}</p>
      </div>
      <div className="flex flex-shrink-0 gap-x-4">
        <p className="hover:underline cursor-pointer" onClick={() => onEdit(comment)}>Edit</p>
        <p className="hover:underline cursor-pointer" onClick={() => onDelete(comment.id)}>Delete</p>
      </div>
    </div>
  )
}

export default CommentCard