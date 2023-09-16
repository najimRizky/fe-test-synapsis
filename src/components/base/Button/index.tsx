"use client"

import IButton from "./interface"

const Button = (props: IButton) => {
  const {
    type,
    children,
    onClick,
    bgColor,
    color,
    disabled,
    width = "5rem",
  } = props
  return (
    <button
      style={{
        minWidth: width 
      }}
      onClick={onClick}
      className={`
        ${bgColor ? bgColor : "bg-blue-500"}
        ${color ? color : "text-white"}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        h-10 px-3 flex items-center justify-center rounded font-bold
        hover:brightness-[0.9] duration-300
      `}
      {...(type ? { type: type } : {})}
      {...(disabled !== undefined ? { disabled: disabled } : {})}
    >
      {children}
    </button>
  )
}

export default Button