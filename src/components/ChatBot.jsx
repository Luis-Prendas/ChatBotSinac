import { useEffect, useRef, useState } from "react"

const URL = "https://powerva.microsoft.com/api/botmanagement/v1/directline/directlinetoken?botId="

export default function ChatBot() {
  const [idBot, setIdBot] = useState('11ef44f1-9a36-4413-a55f-45388563b684')

	const handleChange = (event) => {
		setIdBot(event.target.value)
	}

  const webchat = useRef()
  
  const styleOptions = {
    hideUploadButton: true,
  };

  const store = window.WebChat.createStore(
    {},
    ({ dispatch }) => next => action => {
      if (action.type === "DIRECT_LINE/CONNECT_FULFILLED") {
        dispatch({
          meta: {
            method: "keyboard",
          },
          payload: {
            activity: {
              channelData: {
                postBack: true,
              },
              //Web Chat will show the 'Greeting' System Topic message which has a trigger-phrase 'hello'
              name: 'startConversation',
              type: "event"
            },
          },
          type: "DIRECT_LINE/POST_ACTIVITY",
        });
      }
      return next(action);
    }
  );

  useEffect(() => {
    fetch(URL + idBot)
      .then(response => response.json())
      .then(conversationInfo => {
        window.WebChat.renderWebChat(
          {
            directLine: window.WebChat.createDirectLine({
              token: conversationInfo.token,
            }),
            store,
            styleOptions
          },
          webchat.current
        );
      })
      .catch(err => console.error("An error occurred: " + err));
  }, [idBot])



  return (
    <>
      <div>
        <label>Idioma del bot: </label>
        <select onChange={handleChange}>
          <option defaultValue value="11ef44f1-9a36-4413-a55f-45388563b684">Español</option>
          <option value="dc4d08da-e591-4085-a3cc-bc51edc0a6d2">Ingles</option>
        </select>
      </div>
      <div className="container">
        <div id="heading">
          <h1>SINAC Chat Bot ({idBot == "11ef44f1-9a36-4413-a55f-45388563b684" ? "Español" : "Ingles"})</h1>
        </div>
        <div ref={webchat} role="main" />
      </div>
    </>
  )
}