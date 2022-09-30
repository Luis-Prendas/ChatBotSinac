import { useState } from 'react'
import './App.css'
import ChatBot from './components/ChatBot'

function App() {
	const [idBot, setIdBot] = useState('11ef44f1-9a36-4413-a55f-45388563b684')

	const handleChange = (event) => {
		setIdBot(event.target.value)
	}

	return (
		<div className="App">
			<div>
				<label>Idioma del bot: </label>
				<select onChange={handleChange}>
					<option defaultValue value="11ef44f1-9a36-4413-a55f-45388563b684">Español</option>
					<option value="dc4d08da-e591-4085-a3cc-bc51edc0a6d2">Ingles</option>
				</select>
			</div>
			<ChatBot BOT_ID={idBot} />
		</div>
	)
}

export default App
