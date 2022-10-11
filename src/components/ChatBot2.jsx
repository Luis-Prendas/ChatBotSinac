import { useState } from "react"

export default function ChatBot2() {
	const [idBot, setIdBot] = useState('https://web.powerva.microsoft.com/environments/Default-74ef0526-c127-4646-81c1-551bcc5d6e66/bots/new_bot_11ef44f19a364413a55f45388563b684/webchat')

	const handleChange = (event) => {
		setIdBot(event.target.value)
	}

	return (
		<>
			<div>
				<label>Idioma del bot: </label>
				<select onChange={handleChange}>
					<option defaultValue value="https://web.powerva.microsoft.com/environments/Default-74ef0526-c127-4646-81c1-551bcc5d6e66/bots/new_bot_11ef44f19a364413a55f45388563b684/webchat">Español</option>
					<option value="https://web.powerva.microsoft.com/environments/Default-74ef0526-c127-4646-81c1-551bcc5d6e66/bots/new_bot_248f2384cc8c48dca9724f2817647926/webchat">Ingles</option>
				</select>
			</div>
			<iframe src={idBot} />
		</>
	)
}