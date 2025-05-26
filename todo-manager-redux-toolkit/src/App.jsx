import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import Todos from './components/Todos/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <h1>Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App