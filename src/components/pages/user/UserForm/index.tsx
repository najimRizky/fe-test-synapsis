import React, { ChangeEvent, FormEvent, useState } from 'react'
import IUserForm from './interface'
import FormControl from '@/components/modules/FormControl'
import Button from '@/components/base/Button'
import { createUser, updateUser } from '@/providers/user'
import Alert from '@/components/base/Alert'
import { useRouter } from 'next/navigation'

const UserForm = ({ data, onClose }: IUserForm) => {
  const router = useRouter()

  const [formData, setFormData] = useState({ ...data })
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const res = data?.id ? await updateUser(data?.id, formData) : await createUser(formData)
    if (!res.data) {
      setError(true)
      setLoading(false)
      return
    }

    setSuccess(true)
    router.refresh()
    setTimeout(() => {
      onClose()
    }, 2000)
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <Alert className='mb-4' type='error' message='Something went wrong, please check your data and try again' />}
      {success && <Alert className='mb-4' type='success' message={`User has been ${data?.id ? 'updated' : 'created'} successfully`} />}
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
        label='Gender'
        name='gender'
        component='select'
        onChange={handleChange}
        value={formData.gender || ""}
        required={true}
        options={[
          { label: "Male", value: "male" },
          { label: "Female", value: "female" }
        ]}
        placeholder="Select your gender"
        disabled={loading}
      />
      <FormControl
        label='Status'
        name='status'
        component='select'
        onChange={handleChange}
        value={formData.status || ""}
        required={true}
        options={[
          { label: "Active", value: "active" },
          { label: "Inactive", value: "inactive" }
        ]}
        placeholder="Select your status"
        disabled={loading}
      />

      <div className="flex justify-end gap-x-2">
        <Button disabled={loading} type='button' onClick={onClose}>
          Cancel
        </Button>
        <Button disabled={loading} type="submit">
          Submit
        </Button>
      </div>
    </form>
  )
}

export default UserForm