import { useState } from 'react'
import './App.css'
import ChatBot from './components/ChatBot'

function App() {

  const [state, setEstate] = useState(false)

  const handleClick = () => {
    setEstate(!state)
  }

  return (
    <div className="App">
      <span className='icon-bot' onClick={handleClick}>👤</span>
      <div className={`bot-container ${state ? 'hidden' : ''}`}>
        <ChatBot />
      </div>
    </div>
  )
}

export default App
