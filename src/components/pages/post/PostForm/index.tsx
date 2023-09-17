import { ChangeEvent, FormEvent, useState } from "react"
import IPostForm from "./interface"
import { createPost, updatePost } from "@/providers/post"
import Alert from "@/components/base/Alert"
import FormControl from "@/components/modules/FormControl"
import Button from "@/components/base/Button"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { createQueryString } from "@/helper/url"

const PostForm = ({ data, onClose, userId, reloadMethod }: IPostForm) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathName = usePathname()

  const [formData, setFormData] = useState({ ...data })
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const triggerReget = () => {
    const queryString = createQueryString({
      name: "reget",
      value: Date.now(),
      searchParams
    })
    router.push(`${pathName}?${queryString}`)
  }

  const reload = () => {
    if (reloadMethod === "searchparam") {
      triggerReget()
    } else {
      router.refresh()
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const res = data?.id ? await updatePost(data?.id, formData) : await createPost(userId, formData)
    if (!res.data) {
      setError(true)
      setLoading(false)
      return
    }
    setSuccess(true)
    setTimeout(() => {
      reload()
      onClose()
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <Alert className='mb-4' type='error' message='Something went wrong, please check your data and try again' />}
      {success && <Alert className='mb-4' type='success' message={`Post has been ${data?.id ? 'updated' : 'created'} successfully`} />}
      <FormControl
        label="Title"
        name="title"
        required={true}
        value={formData.title || ""}
        placeholder="Enter your title"
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
        component="textarea"
        rows={5}
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

export default PostForm