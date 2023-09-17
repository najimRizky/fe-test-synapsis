import ISelect from "./interface"

const Select = (props: ISelect) => {
  const {
    className = "",
    value,
    name,
    onChange,
    required,
    id,
    options,
    placeholder,
  } = props

  return (
    <div className={`${className}`}>
      <select
        {...name && { name }}
        {...required && { required }}
        {...id && { id }}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          m-0
          w-full h-10 rounded border-2 border-gray-300 focus:outline-none focus:border-blue-500  duration-300 outline-none
          px-3
        `}
      >
        {placeholder && (
          <option value="" disabled>{placeholder}</option>
        )}
        {options?.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select