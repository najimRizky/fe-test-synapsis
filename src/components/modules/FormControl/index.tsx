import React from 'react'
import IFormControl from './interface'
import Input from '@/components/base/Input'
import Select from '@/components/base/Select'
import Textarea from '@/components/base/Textarea'

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
        <Textarea
          name={name}
          id={name}
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          rows={rows}
          onChange={onChange}
          required={required}
          {...additionalOptions}
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
      )}
      {error && (
        <p className="mt-2 text-sm text-red-500">{error}</p>
      )}
    </div>
  )
}

export default FormControl