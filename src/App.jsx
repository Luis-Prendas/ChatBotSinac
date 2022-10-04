import { useState } from 'react'
import './App.css'
import ChatBot from './components/ChatBot'
import ChatBot2 from './components/ChatBot2'


function App() {

  const [state, setEstate] = useState(false)

  const handleClick = () => {
    setEstate(!state)
  }

  return (
    <div className="App">
      <span className='state'>{!state ? "Api" : "Iframe"}</span>
      <span className='icon-bot' onClick={handleClick}>👤</span>
      <div className={`bot-container ${state ? 'hidden' : ''}`}>
        <ChatBot />
      </div>
      <div className={`bot-container ${!state ? 'hidden' : ''}`}>
        <ChatBot2/>
      </div>
    </div>
  )
}

export default App
