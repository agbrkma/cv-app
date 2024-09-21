import { useState } from 'react'
import GenInfo from './components/gen-info'
import EduExp from './components/edu-exp'
import PracExp from './components/prac-exp'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return(
    <div>
      <h1>CV Builder</h1>
      <GenInfo />
      <EduExp />
      <PracExp />
    </div>
  )
}

export default App
