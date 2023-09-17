import { SelectHTMLAttributes } from "react";

interface ISelect extends SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string | number; label: string; }[]
}

export default ISelect