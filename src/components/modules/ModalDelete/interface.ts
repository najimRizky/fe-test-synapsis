interface IModalDelete {
  onConfirm: () => void;
  onClose: () => void;
  message: string;
  isOpen: boolean;
  isSuccess?: boolean;
}

export default IModalDelete