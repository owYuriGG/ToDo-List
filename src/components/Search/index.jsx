import { SearchInput, H2 } from "./styles"
import './index.css'

const Search = ({search, setSearch}) => {
  return (
    <div className="searchClass">

      <H2> Pesquisar: </H2>

      <SearchInput 

      type="text" 
      value={search} 
      onChange={(e) => setSearch(e.target.value)} 
      placeholder="Digite para pesquisar"
      />
    </div>
  )
}

export default Search
