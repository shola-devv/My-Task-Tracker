import { useState } from 'react'
import Todolist from './TaskTracker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Todolist/>
    </>
  )
}

export default App
