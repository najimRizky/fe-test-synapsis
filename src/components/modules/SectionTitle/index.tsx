import ISectionTitle from "./interface"

const SectionTitle = ({title, description}: ISectionTitle) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold pl-2 leading-none border-l-4 border-teal-500">{title}</h1>
      {description && <p className="text-sm text-gray-500">{description}</p>}
    </div>
  )
}

export default SectionTitle