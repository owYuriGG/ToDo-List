import { H2, } from "./styled"
import './index.css'

const Filter = ({filter, setFilter}) => {
  return (
    <>

      <div className="filter-options">
        <H2>Filtrar:</H2>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>

                <option value="All">Todas</option>
                <option value="Completed">Completas</option>
                <option value="Incompleted">Incompletas</option>

            </select>
      </div>
    </>
  )
}

export default Filter
