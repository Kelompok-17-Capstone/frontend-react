import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RouteManagement from './router/RouteManagement'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouteManagement/>
    </>
  )
}

export default App
