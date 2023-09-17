const Alert = ({ type = "info", message, className="" }: IAlert) => {

  return (
    <div 
      className={`
        ${type === 'info' ? 'bg-blue-100 text-blue-700 border-blue-700' 
          : type === 'success' ? 'bg-green-100 text-green-700 border-green-700'
            : type === 'warning' ? 'bg-yellow-100 text-yellow-700 border-yellow-700'
              : type === 'error' ? 'bg-red-100 text-red-700 border-red-700'
                : ''
        }
        ${className}
        border-2 rounded p-2
      `}
    >
      <p>{message}</p>
    </div>
  )
}

export default Alert