interface IAlert {
  message: string
  type: "success" | "error" | "warning" | "info"
  className?: string
}