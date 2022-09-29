import { useEffect, useRef } from "react"

const URL = "https://powerva.microsoft.com/api/botmanagement/v1/directline/directlinetoken?botId="

export default function ChatBot({ BOT_ID }) {
    const webchat = useRef()
    const styleOptions = {
        hideUploadButton: true,
    };

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