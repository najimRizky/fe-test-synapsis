"use client"

import Button from "@/components/base/Button"
import Modal from "@/components/base/Modal"
import useModal from "@/hooks/useModal"
import UserForm from "../UserForm"

const AddUser = () => {
  const {isOpen, closeModal, openModal} = useModal()
  return (
    <>
      <Button
        onClick={openModal}
      >
        Add User
      </Button>

      <Modal isOpen={isOpen} onClose={closeModal} title="Add User" >
        <UserForm onClose={closeModal} />
      </Modal>
    </>
  )
}

export default AddUser