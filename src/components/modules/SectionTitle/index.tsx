import Link from "next/link"
import ISectionTitle from "./interface"

const SectionTitle = ({ title, description, href }: ISectionTitle) => {
  return (
    <div className="mb-8">
      {href ? (
        <Link href={href} className="text-3xl font-bold pl-2 leading-none border-l-4 border-teal-500 hover:underline block w-fit" >
          {title}
        </Link>
      ) : (
        <h2 className="text-3xl font-bold pl-2 leading-none border-l-4 border-teal-500">{title}</h2>
      )}
      {description && <p className="text-sm text-gray-500">{description}</p>}
    </div>
  )
}

export default SectionTitle