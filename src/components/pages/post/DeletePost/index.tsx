"use client"

import Button from "@/components/base/Button"
import ModalDelete from "@/components/modules/ModalDelete"
import useModal from "@/hooks/useModal"
import { useRouter } from "next/navigation"
import { useState } from "react"
import IDeletePost from "./interface"
import { deletePost } from "@/providers/post"

const DeletePost = ({ id }: IDeletePost) => {
  const { isOpen, closeModal, openModal } = useModal()
  const router = useRouter()
  const [isSuccess, setIsSuccess] = useState<boolean>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleDelete = async () => {
    setIsLoading(true)
    const res = await deletePost(id)
    if (res.error) {
      console.log(res.error)
      setIsSuccess(false)
    } else {
      setIsSuccess(true)
      setTimeout(() => {
        closeModal()
        router.push("/post")
      }, 1500)
    }
    setIsLoading(false)
  }

  const handleClose = () => {
    closeModal()
    setIsSuccess(undefined)
    setIsLoading(false)
  }

  return (
    <>
      <Button
        onClick={openModal}
        bgColor="bg-red-500"
      >
        Delete Post
      </Button>
      <ModalDelete
        isOpen={isOpen}
        message="Are you sure you want to delete this post?"
        onConfirm={handleDelete}
        onClose={handleClose}
        isSuccess={isSuccess}
        isLoading={isLoading}
      />
    </>
  )
}

export default DeletePost