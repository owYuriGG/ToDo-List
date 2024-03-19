import { useState } from 'react'
import { SearchInput, PersonButton, H2 } from './styles';
import './index.css'
import {Trash, Square, SquarePlus} from 'lucide-react'


const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("")


  const handleSubimt = (e) => {
    e.preventDefault();
    // Verifica se hà algum valor no input
    if (!value) return;
    //Adiciona a tarefa e limpa a barra de input
    addTodo(value);
    setValue("")
  }

  return <div className="criarTarefa">
  <H2>Criar tarefa: </H2>

    <div>

      <form onSubmit={handleSubimt}>

        <SearchInput
          type="text"
          placeholder="Digite aqui sua tarefa"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <PersonButton type="submit" size={10}>
          <SquarePlus size={20}/>
          </PersonButton>
      </form>

    </div>
  </div>
};

export default TodoForm
