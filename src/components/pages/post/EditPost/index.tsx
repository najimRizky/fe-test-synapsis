"use client"

import Button from '@/components/base/Button'
import Modal from '@/components/base/Modal'
import useModal from '@/hooks/useModal'
import React from 'react'
import PostForm from '../PostForm'
import IEditPost from './interface'

const EditPost = ({ data }: IEditPost) => {
  const { isOpen, closeModal, openModal } = useModal()
  return (
    <>
      <Button
        onClick={openModal}
        bgColor='bg-yellow-500'
      >
        Edit Post
      </Button>

      <Modal isOpen={isOpen} onClose={closeModal} title="Edit Post" >
        <PostForm data={data} onClose={closeModal} reloadMethod='refresh' />
      </Modal>
    </>
  )
}

export default EditPost