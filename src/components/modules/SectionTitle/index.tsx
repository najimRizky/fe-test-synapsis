import Link from "next/link"
import ISectionTitle from "./interface"

const SectionTitle = ({ title, description, href, size = "medium" }: ISectionTitle) => {
  return (
    <div className="mb-8">
      {href ? (
        <Link
          href={href}
          className={`
            font-bold pl-2 leading-none border-l-4 border-teal-500 hover:underline block w-fit
            ${size === "small" ? "text-2xl" : size === "medium" ? "text-3xl" : "text-4xl"}
          `}
        >
          {title}
        </Link>
      ) : (
        <h2
          className={`
            font-bold pl-2 leading-none border-l-4 border-teal-500
            ${size === "small" ? "text-2xl" : size === "medium" ? "text-3xl" : "text-4xl"}
          `}
        >
          {title}
        </h2>
      )}
      {description && <p className="text-sm text-gray-500">{description}</p>}
    </div>
  )
}

export default SectionTitle