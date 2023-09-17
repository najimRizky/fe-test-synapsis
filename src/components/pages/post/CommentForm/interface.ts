import IComment from "@/interfaces/comment";

interface ICommentForm {
  data?: IComment
  postId: number
  onSuccess: () => void
  onClose: () => void
}

export default ICommentForm;