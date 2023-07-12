import { ChatContainer, MainContainer, Message, MessageInput, MessageList, TypingIndicator } from "@chatscope/chat-ui-kit-react";
import styles from '@/styles/Chat.module.css';
import { useEffect, useRef, useState } from "react";
import { ChatCompletionRequestMessageRoleEnum, Configuration, OpenAIApi } from "openai";
import React from "react";
import {Helmet} from "react-helmet";




export default function Chat() {


    return (
        <div className={styles.welcomecon}>
            <div>
                <h1>Konzept Beschreibung</h1>
                <br />
                <br />


               <p> Stellen Sie sich vor, Sie befinden sich auf einer Tiernahrungsshop-Webseite (Katzen und Hunde). Sie möchten für Ihr Haustier etwas kaufen z.B. Futter oder ein Spielzeug. Aber was genau Sie brauchen, wissen Sie nicht.  Bitte simulieren Sie einen Dialog mit dem KI-Chatbot. Bitte versuchen Sie, vom KI-Chatbot möglichst viel Information zum Produkt zu bekommen. Falls der KI-Chatbot nicht zurechtkommt und Sie dennoch Hilfe einer echten Person benötigen, klicken Sie unten rechts auf das Support-Symbol. Durch Klicken auf das Symbol wird der Testvorgang abgeschlossen. 

Schließlich antworten Sie bitte auf ein Paar Fragen. Über den Button „Zum Fragebogen“ gelangen Sie zum Fragebogen. </p>

                <br />
                <br />

                <p>Beispielfragen: </p>
                <br />

                   <ul>
                        <li>Ich habe einen Schäferhund, womit soll ich ihn futtern? </li>

                        <li>Mein Hund ist allergisch auf ***. Was kannst du vorschlagen? </li>

                        <li>Welche Spielzeuge passen zu einer aktiven Katze? </li>

                        <li>Usw. </li>
                    </ul> 

                <br />
                <br />
                
                <a href="/chat" target="_blank" className={styles.start}>Start!</a>
  
            </div>
        </div>
    )
}