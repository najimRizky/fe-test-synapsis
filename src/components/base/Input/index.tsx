import React from 'react'
import IInput from './interface'

const Input = (props: IInput) => {
  const {
    className = "",
    icon,
    iconPosition = "left",
    placeholder,
    value,
    name,
    type = "text",
    onChange,
    required,
    id,
    disabled,
  } = props
  return (
    <div className={`relative ${className}`}>
      {icon && iconPosition === "left" && (
        <div className="absolute left-0 pl-3 flex items-center inset-y-0 pointer-events-none top-0">
          {icon}
        </div>
      )}
      <input
        {...name && { name }}
        {...required && { required }}
        {...id && { id }}
        {...disabled && { disabled }}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          m-0
          w-full h-10 rounded border-2 border-gray-300 focus:outline-none focus:border-blue-500  duration-300 outline-none
          px-3
          ${icon ? iconPosition === "left" ? "pl-10" : "pr-10" : ""}
        `}
      />
      {icon && iconPosition === "right" && (
        <div className="absolute right-0 pr-3 flex items-center inset-y-0 pointer-events-none top-0">
          {icon}
        </div>
      )}
    </div>
  )
}

export default Input