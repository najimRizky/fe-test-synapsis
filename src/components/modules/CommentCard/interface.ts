import IComment from "@/interfaces/comment";

interface ICommentCard {
  comment: IComment
  onEdit: (comment: IComment) => void
  onDelete: (id: number) => void
}

export default ICommentCard