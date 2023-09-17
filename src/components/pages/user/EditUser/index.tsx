"use client"

import Button from "@/components/base/Button"
import Modal from "@/components/base/Modal"
import useModal from "@/hooks/useModal"
import UserForm from "../UserForm"
import IEditUser from "./interface"

const EditUser = ({user}: IEditUser) => {
  const {isOpen, closeModal, openModal} = useModal()
  return (
    <>
      <Button
        onClick={openModal}
        bgColor="bg-yellow-500"
      >
        Edit User
      </Button>

      <Modal isOpen={isOpen} onClose={closeModal} title="Edit User" >
        <UserForm onClose={closeModal} data={user} />
      </Modal>
    </>
  )
}

export default EditUser