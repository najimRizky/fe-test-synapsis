import SearchInput from "../components/pages/search/SearchInput";

interface SearchPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const SearchPage = ({ searchParams }: SearchPageProps) => {
  const data = searchParams
  console.log(data)
  return (
    <div>
      <h1>SearchPage</h1>
      <SearchInput />
    </div>
  )
}

export default SearchPage