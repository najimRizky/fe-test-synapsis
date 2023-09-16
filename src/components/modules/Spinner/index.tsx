const Spinner = ({ size = 48 }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        style={{ width: size, height: size }}
        className="animate-spin rounded-full border-t-2 border-b-2 border-gray-900"
      />
    </div>
  )
}

export default Spinner