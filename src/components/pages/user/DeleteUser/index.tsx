"use client"

import Button from "@/components/base/Button"
import ModalDelete from "@/components/modules/ModalDelete"
import useModal from "@/hooks/useModal"
import { deleteUser } from "@/providers/user"
import { useRouter } from "next/navigation"
import { useState } from "react"

const DeleteUser = ({ id }: { id: number }) => {
  const { isOpen, closeModal, openModal } = useModal()
  const router = useRouter()
  const [isSuccess, setIsSuccess] = useState<boolean>()

  const handleDelete = async () => {
    const res = await deleteUser(id)
    if (res.error) {
      console.log(res.error)
      setIsSuccess(false)
    } else {
      setIsSuccess(true)
      setTimeout(() => {
        closeModal()
        router.push("/user")
      }, 2000)
    }
  }

  return (
    <>
      <Button
        onClick={openModal}
        bgColor="bg-red-500"
      >
        Delete User
      </Button>
      <ModalDelete
        isOpen={isOpen}
        message="Are you sure you want to delete this data?"
        onConfirm={handleDelete}
        onClose={closeModal}
        isSuccess={isSuccess}
      />
    </>
  )
}

export default DeleteUser