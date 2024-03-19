import { useState } from 'react'
import './App.css'

//Importação dos components
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import Search from './components/Search'
import Filter from './components/Filter'

function App() {

  // Tarefas inicializadas por padrão
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Ir pra academia",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Fazer site to-do",
      isCompleted: false,
    }
  ])

  // Função de filtrar por status
  const [filter, setFilter] = useState("All")

  // Função para pesquisar entre as tarefas
  const [search, setSearch] = useState("")

  // Função para adicionar uma tarefa (ToDo)
  const addTodo = (text) => {
    //Aqui, a variável newTodos pega toda a array com as todo's existentes e adiciona uma nova, criando um ID único com
    //a função Math.random, junto com o texto dado, como 
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      isCompleted: false,
    }]

    setTodos(newTodos);

  }

  // Função para remover uma tarefa
  const removeTodo = (id) => {
    // aqui uma nova array é criada, contendo todas as tarefas
    const newTodos = [...todos]
    // após, é criado uma outra array, filtrando as tarefas para remover a tarefa selecionada (usando seu ID)
    const filteredTodos = newTodos.filter(todo =>
      todo.id !== id ? todo : null
    );
    // depois, chama a função que seta as tarefas, dando como parametro a array filtrada, sem a task selecionada.
    setTodos(filteredTodos);
  }

  // Função para marcar uma tarefa como concluída
  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos);
  }

  return (
    <>
      <div className="app">

        <h1 className="titulo">Lista de Tarefas</h1>

        <TodoForm addTodo={addTodo} />

        <div className="filerAndSearch">
        <Search search={search} setSearch={setSearch} />
        <Filter filter={filter} setFilter={setFilter} />
        </div>

        <div className="todo-list">


          {todos
            .filter((todo) =>
              filter === "All"
                ? true
                : filter === "Completed"
                  ? todo.isCompleted
                  : !todo.isCompleted
            )
            .filter((todo) =>
              todo.text.toLowerCase().includes(search.toLowerCase())
            )
            .map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                removeTodo={removeTodo}
                completeTodo={completeTodo} />
            ))}

        </div>
        <div className="criador">
          <p className="criador2">Feito por: Yuri Garcia</p>
        </div>
      </div>
      <div className="absolute-background" />
    </>
  )
}

export default App
