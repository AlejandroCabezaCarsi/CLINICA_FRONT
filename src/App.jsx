import { useState } from 'react'
import './App.css'
import {Body} from './pages/Body/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Body/>
    </>
  )
}

export default App
