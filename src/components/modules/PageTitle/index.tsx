import IPageTitle from "./interface"

const PageTitle = ({ title, description }: IPageTitle) => {
  return (
    <div className="py-8 text-center w-fit px-8 mx-auto border-b-8 border-slate-600 mb-8">
      <h1 className="text-3xl font-bold">{title}</h1>
      {description && <p className="text-gray-500 max-w-md mt-2 leading-tight">{description}</p>}
    </div>
  )
}

export default PageTitle