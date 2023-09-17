import ITextarea from "./interface"

const Textarea = (props: ITextarea) => {
  const {
    className = "",
    placeholder,
    value,
    name,
    onChange,
    required,
    id,
    disabled,
    rows
  } = props
  return (
    <textarea
      {...name && { name }}
      {...required && { required }}
      {...id && { id }}
      {...disabled && { disabled }}
      {...rows && { rows }}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`
        m-0
        w-full rounded border-2 border-gray-300 focus:outline-none focus:border-blue-500  duration-300 outline-none
        p-3
        ${className}
      `}
    />
  )
}

export default Textarea