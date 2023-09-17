"use client"

import { deleteComment, getCommentsByPostId } from "@/providers/post"
import IComments from "./interface"
import { useEffect, useState } from "react"
import IComment from "@/interfaces/comment"
import CommentCard from "@/components/modules/CommentCard"
import SectionTitle from "@/components/modules/SectionTitle"
import useModal from "@/hooks/useModal"
import Modal from "@/components/base/Modal"
import CommentForm from "../CommentForm"
import Button from "@/components/base/Button"
import Spinner from "@/components/modules/Spinner"
import Pagination from "@/components/modules/Pagination"
import ModalDelete from "@/components/modules/ModalDelete"

const PostComments = ({ id }: IComments) => {
  const { isOpen, closeModal, openModal } = useModal()
  const { isOpen: isOpenDelete, closeModal: closeModalDelete, openModal: openModalDelete } = useModal()

  const [page, setPage] = useState(1)
  const [comments, setComments] = useState<{ data: any, metadata: any }>()
  const [loading, setLoading] = useState(true)

  const [selectedData, setSelectedData] = useState<IComment>()

  const [loadingDelete, setLoadingDelete] = useState(false)
  const [selectedDataDelete, setSelectedDataDelete] = useState<number>(0)
  const [successDelete, setSuccessDelete] = useState<boolean>()

  const getComments = async (page = 1) => {
    setLoading(true)

    const res = await getCommentsByPostId(id, page)

    if (res.data) {
      setComments(res)
    }

    setLoading(false)
  }

  useEffect(() => {
    getComments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleDelete = (id: number) => {
    openModalDelete()
    setSelectedDataDelete(id)
  }

  const handleConfirmDelete = async () => {
    setLoadingDelete(true)

    const res = await deleteComment(selectedDataDelete)
    if (res.error) {
      setSuccessDelete(false)
    } else {
      setSuccessDelete(true)
      setTimeout(() => {
        closeModalDelete()
      }, 1500)
      setTimeout(() => {
        onSubmitSuccess()
      }, 1800)
    }

    setLoadingDelete(false)
  }

  const handleEdit = (data: IComment) => {
    setSelectedData(data)
    openModal()
  }

  const handleAdd = () => {
    openModal()
  }

  const onSubmitSuccess = () => {
    getComments(1)
    setPage(1)
    setSelectedData(undefined)
    setSuccessDelete(undefined)
    setSelectedDataDelete(0)
  }

  const handlePageChange = (page: number) => {
    setPage(page)
    getComments(page)
  }

  return (
    <>
      <div className="flex justify-between">
        <SectionTitle
          title="Comments"
          size="small"
        />
        <Button
          type="button"
          onClick={handleAdd}
        >
          Add Comment
        </Button>
      </div>

      {loading ? <Spinner /> :
        comments?.data?.length === 0 ? <p>No comments</p> : (
          <div className="mt-4 grid gap-y-6">
            {comments?.data?.map((comment: IComment, index: number) => (

              <CommentCard
                key={index} comment={comment}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))}
            <Pagination
              page={page}
              maxPage={comments?.metadata?.maxPage}
              totalElement={comments?.metadata?.totalElement}
              customHandler={{
                next: () => handlePageChange(page + 1),
                previous: () => handlePageChange(page - 1),
              }}
            />
          </div>
        )
      }

      <Modal isOpen={isOpen} onClose={closeModal} title={`${selectedData ? "Edit" : "Add"} Comment`}>
        <CommentForm
          onSuccess={onSubmitSuccess}
          onClose={closeModal}
          postId={id}
          data={selectedData}
        />
      </Modal>

      <ModalDelete
        isOpen={isOpenDelete}
        message="Are you sure you want to delete this comment?"
        onConfirm={handleConfirmDelete}
        onClose={closeModalDelete}
        isSuccess={successDelete}
        isLoading={loadingDelete}
      />
    </>
  )
}

export default PostComments