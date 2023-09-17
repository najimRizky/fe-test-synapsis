interface IModalDelete {
  onConfirm: () => void;
  onClose: () => void;
  message: string;
  isOpen: boolean;
  isSuccess?: boolean;
  isLoading?: boolean;
}

export default IModalDelete