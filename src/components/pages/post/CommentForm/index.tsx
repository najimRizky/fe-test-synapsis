"use client"

import React, { ChangeEvent, FormEvent, useState } from 'react'
import ICommentForm from './interface'
import { createComment, updateComment } from '@/providers/post'
import FormControl from '@/components/modules/FormControl'
import Alert from '@/components/base/Alert'
import Button from '@/components/base/Button'

const CommentForm = ({ data, postId, onSuccess, onClose }: ICommentForm) => {
  const [formData, setFormData] = useState({ ...data })
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const res = data?.id ? await updateComment(data?.id, formData) : await createComment(postId, formData)
    if (!res.data) {
      setError(true)
      setLoading(false)
      return
    }

    setSuccess(true)
    setTimeout(() => {
      onClose()
      onSuccess()
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <Alert className='mb-4' type='error' message='Something went wrong, please check your data and try again' />}
      {success && <Alert className='mb-4' type='success' message={`Comment has been ${data?.id ? 'updated' : 'created'} successfully`} />}
      <FormControl
        label="Name"
        name="name"
        required={true}
        value={formData.name || ""}
        placeholder="Enter your name"
        onChange={handleChange}
        disabled={loading}
      />
      <FormControl
        label="Email"
        name="email"
        type='email'
        required={true}
        value={formData.email || ""}
        placeholder="Enter your Email"
        onChange={handleChange}
        disabled={loading}
      />
      <FormControl
        label="Body"
        name="body"
        required={true}
        value={formData.body || ""}
        placeholder="Enter your body"
        onChange={handleChange}
        disabled={loading}
        component='textarea'
        rows={5}
      />
      <div className="flex justify-end gap-x-2">
        <Button bgColor='bg-gray-200' color='text-body-text' disabled={loading} type='button' onClick={onClose}>
          Cancel
        </Button>
        <Button disabled={loading} type="submit">
          Submit
        </Button>
      </div>
    </form>
  )
}

export default CommentForm