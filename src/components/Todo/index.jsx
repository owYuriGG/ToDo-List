import React from 'react'
import {Trash, Square, SquareCheckBig} from 'lucide-react'
import './index.css'

const Todo = ({todo, removeTodo, completeTodo}) => {
  return (
    <div 
    className="todo"
    // Verifica se a tarefa está marcada e adiciona um traço para identifica-la
    style={{textDecoration: todo.isCompleted ? "line-through" : ""}}
    >
    {/* Mostra a tarefa em si */}
    <div className="content">
      <p>{todo.text}</p>
    </div>

    <div> 
      {/* Botões para marcar como completada ou remover a tarefa */}
      <button className="done" onClick={() => completeTodo(todo.id)}>
        {todo.isCompleted ? (
          <SquareCheckBig size={20}/>
        ) : (
          <Square size={20}/>
        )}

      </button>
      <button className="delete" onClick={() => removeTodo(todo.id)}>
        <Trash size={20}/>
      </button>
    </div>

  </div>
  )
}

export default Todo
