import { ButtonHTMLAttributes, ReactNode } from "react"

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string
  color?: string
  width?: string | number
}

export default IButton