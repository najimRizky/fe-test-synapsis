"use client"

import Button from '@/components/base/Button'
import Modal from '@/components/base/Modal'
import useModal from '@/hooks/useModal'
import React from 'react'
import PostForm from '../../post/PostForm'
import IAddPost from './interface'

const AddPost = ({ userId }: IAddPost) => {
  const { isOpen, closeModal, openModal } = useModal()
  return (
    <>
      <Button
        onClick={openModal}
      >
        Add Post
      </Button>

      <Modal isOpen={isOpen} onClose={closeModal} title="Add Post" >
        <PostForm onClose={closeModal} userId={userId} reloadMethod='searchparam' />
      </Modal>
    </>
  )
}

export default AddPost