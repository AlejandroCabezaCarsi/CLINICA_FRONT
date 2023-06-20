import { useState } from 'react'
import './App.css'
import {Body} from './pages/Body/Body'
import { Header } from './common/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Body/>
    </>
  )
}

export default App
