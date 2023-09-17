import React from 'react'
import IFormControl from './interface'
import Input from '@/components/base/Input'
import Select from '@/components/base/Select'

const FormControl = (props: IFormControl) => {
  const {
    name,
    label,
    type,
    value,
    required,
    disabled,
    additionalOptions,
    error,
    placeholder,
    onChange,
    component = 'input',
    options,
    rows = 3,
  } = props
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-medium mb-1 text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {component === 'input' && (
        <Input
          name={name}
          id={name}
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          required={required}
          {...additionalOptions}
        />
      )}
      {component === 'textarea' && (
        <textarea
          name={name}
          id={name}
          value={value}
          disabled={disabled}
          className={`
            mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md
          `}
          placeholder={label}
          rows={rows}
        />
      )}
      {component === 'select' && (
        <Select
          options={options}
          name={name}
          id={name}
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          {...additionalOptions}
        />
          
        // <select
        //   onChange={onChange}
        //   name={name}
        //   id={name}
        //   value={value}
        //   disabled={disabled}
        //   className={`
        //     mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md
        //     ${error ? 'border-red-500' : ''}
        //   `}
        // >
        //   {placeholder && (
        //     <option value="" disabled>{placeholder}</option>
        //   )}
        //   {options?.map((option, index) => (
        //     <option key={index} value={option.value}>{option.label}</option>
        //   ))}
        // </select>
      )}
      {error && (
        <p className="mt-2 text-sm text-red-500">{error}</p>
      )}
    </div>
  )
}

export default FormControl