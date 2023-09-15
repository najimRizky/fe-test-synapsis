import IUser from "../user";

interface IPost {
  id: number;
  title: string;
  body: string;
  user_id: number;
  user?: IUser
}

export default IPost