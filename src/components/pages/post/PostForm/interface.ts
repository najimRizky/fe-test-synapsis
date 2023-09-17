import IPost from "@/interfaces/post";

interface IPostForm {
  data?: IPost;
  onClose: () => void;
  userId?: number;
  reloadMethod: "refresh" | "searchparam";
}

export default IPostForm;