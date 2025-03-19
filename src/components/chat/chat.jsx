import {useState} from "react";
import './chat.css'

export  default function Chat(){

    const [messages, setMessages] = useState([]);
    const[userInput,setUserInput] = useState("");



    async function getResponse(){
        try{
            if (!userinput) return
            const response = await fetch('http://localhost:4000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({userInput})
            })
            if (!response.ok){
                throw new Error("Failed to fetch chat");
            }
            const {message} = await response.json();
            setMessages([...messages, userInput, message]);
        }


        catch(error){
            console.log(error)
            return 'Oops! Something went wrong.';
        }
    }

    return(

        <div id ="chat">
        <p>Chat bot with Google Gemini coming soon here</p>

        </div>
    )
}