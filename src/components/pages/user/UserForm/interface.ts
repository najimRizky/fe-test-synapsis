import IUser from "@/interfaces/user";

interface IUserForm {
  data?: IUser;
  onClose: () => void;
}

export default IUserForm;