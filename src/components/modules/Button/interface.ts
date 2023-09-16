import { ReactNode } from "react"

interface IButton {
  children: ReactNode
  type?: string
  onClick?: () => void
  otherProps?: any
  bgColor?: string
  color?: string
  disabled?: boolean
  width?: string | number
}

export default IButton