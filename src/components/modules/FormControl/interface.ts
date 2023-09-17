interface IFormControl {
  name: string;
  label: string;
  value: string;
  onChange: (e: any) => void;
  component?: "input" | "select" | "textarea";
  disabled?: boolean;
  required?: boolean;
  error?: string;
  additionalOptions?: any;

  // For input
  type?: string;
  placeholder?: string;

  // For select
  options?: { label: string; value: string | number }[];

  // For textarea
  rows?: number;

}

export default IFormControl;