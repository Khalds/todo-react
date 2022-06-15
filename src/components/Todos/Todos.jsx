import React from "react"
import Todo from "../Todo/Todo"

function Todos(props) {
  return (
    <>
      <div className="todos">
        {props.todos.map((todo, id) => {
          return (
            <Todo
              key={id}
              todo={todo}
              id={id}
              makeFavorite={props.makeFavorite}
              deleteTodo={props.deleteTodo}
            />
          )
        })}
      </div>
    </>
  )
}

export default Todos
