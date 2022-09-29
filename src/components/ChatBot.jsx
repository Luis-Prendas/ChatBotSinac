import { useEffect, useRef } from "react"

const URL = "https://powerva.microsoft.com/api/botmanagement/v1/directline/directlinetoken?botId="

export default function ChatBot({ BOT_ID }) {
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
        console.log(BOT_ID)
        fetch(URL + BOT_ID)
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
    }, [BOT_ID])

    return (
        <>
            <div className="container">
                <div id="heading">
                    <h1>SINAC Chat Bot ({BOT_ID == "11ef44f1-9a36-4413-a55f-45388563b684" ? "Español" : "Ingles"})</h1>
                </div>
                <div ref={webchat} role="main" />
            </div>
        </>
    )
}