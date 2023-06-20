import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Body} from './pages/Body/Body'
import { Header } from './common/Header/Header'
import './App.css'

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
