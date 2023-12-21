import React, {useState} from 'react'
import styles from './Chatbot.module.css'

const Chatbot = () => {
    const [message,setMessage] = useState("")
    const messageHandler = (e) => {
        console.log(e.target.value);
        setMessage(e.target.value)
    }
    const sendMessageHandler = () => {
       //send api

    }
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h2>Welcome to Ekodus</h2>
        </div>
        <div className={styles.body}>
            <p className={styles.chatbot_msg}>Hello! Welcome to Goldenwoods. Please Enter your name</p>
            <p className={styles.user_msg}>ABC</p>
        </div>
        <div className={styles.input}>
            <input type="text" onChange={messageHandler} />
            <button onClick={sendMessageHandler}>send</button>
        </div>
    </div>
  )
}

export default Chatbot