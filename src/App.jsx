import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import sonic from './assets/sonic.gif'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [spin, setSpin] = useState(false)

  const handleClick = () => {
    setCount((c) => c + 1)

    // Trigger animation
    setSpin(false)
    setTimeout(() => setSpin(true), 0)
  }

  return (
    <>


<h1 className="rainbow-text">Ashelia's Chao</h1>


      {/* ✅ Animate GIF container */}
      <div className={`sonic-wrapper ${spin ? 'sonic-spin' : ''}`}>
        <img src={sonic} alt="Sonic the Hedgehog" className="logo sonic" />
      </div>

      <div className="card">
        <button onClick={handleClick}>
          CLICK ME FOR GOOD FORTUNES {count}
        </button>
        <p>
       
        </p>
      </div>

      <p className="read-the-docs">
    
      </p>
    </>
  )
}

export default App
