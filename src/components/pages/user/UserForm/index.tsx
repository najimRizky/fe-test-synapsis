import React, { ChangeEvent, FormEvent, useState } from 'react'
import IUserForm from './interface'
import FormControl from '@/components/modules/FormControl'
import Button from '@/components/base/Button'
import { createUser } from '@/providers/user'
import Alert from '@/components/base/Alert'

const UserForm = ({ data, onClose }: IUserForm) => {
  const [formData, setFormData] = useState({ ...data })
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value} = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const res = await createUser(formData)
    if (!res.data) {
      setError(true)
      return
    }

    setSuccess(true)
    setTimeout(() => {
      onClose()
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <Alert className='mb-4' type='error' message='Something went wrong, please check your data and try again' />}
      {success && <Alert className='mb-4' type='success' message='User has been created successfully' />}
      <FormControl
        label="Name"
        name="name"
        required={true}
        value={formData.name || ""}
        placeholder="Enter your name"
        onChange={handleChange}
      />
      <FormControl
        label="Email"
        name="email"
        required={true}
        value={formData.email || ""}
        placeholder="Enter your Email"
        onChange={handleChange}
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
      />

      <div className="flex justify-end gap-x-2">
        <Button type='button' onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit">
          Submit
        </Button>
      </div>
    </form>
  )
}

export default UserForm