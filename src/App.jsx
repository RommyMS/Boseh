import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logoO from './assets/Logo_O.png';
import Login from '../components/login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Route path="/" element={<Login />} />
</>

  )
}

export default App
