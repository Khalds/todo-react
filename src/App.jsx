import React, { useState } from "react"
import Header from "./components/Header/Header"
import Form from "./components/Form/Form"
import Todos from "./components/Todos/Todos"

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Купить бананы",
      favorite: false,
    },
    {
      text: "Пойти прогуляться",
      favorite: true,
    },
    {
      text: "Выучить JS",
      favorite: false,
    },
    {
      text: "Забить на программирование",
      favorite: false,
    },
    {
      text: "Повеситься :)",
      favorite: false,
    },
  ])

  //? Удаление элемента
  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo, index) => {
        if (id === index) {
          return false
        }
        return true
      })
    )
  }

  //? Перевел в состояние избранное
  const makeFavorite = (id) => {
    setTodos(
      todos.map((item, index) => {
        if (id === index) {
          return {
            ...item,
            favorite: !item.favorite,
          }
        }
        return item
      })
    )
  }

  //? Добавляем текст в тодо в началао массива
  const [text, setText] = useState("")

  const addTodo = () => {
    setTodos([
      {
        text: text,
        favorite: false,
      },
      ...todos,
    ])
    setText("")
  }

  return (
    <div className="app">
      <Header />
      <Form text={text} setText={setText} addTodo={addTodo} />
      <Todos
        todos={todos}
        makeFavorite={makeFavorite}
        deleteTodo={deleteTodo}
      />
    </div>
  )
}

export default App
