import { useState } from 'react'
import reactLogo from './assets/logo-shscholl.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Empowering Grade 11 ICT Students in Cabiao Senior High School with Digital Module Access</h1>
      <div className="card">
        <button>GRADE 11</button>

      </div>

    </>
  )
}

export default App
