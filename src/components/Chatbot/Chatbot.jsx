import React, { useState, useEffect } from 'react';
import styles from './Chatbot.module.css';
import axiosConfig, { publicURL } from '../../api/axiosConfig'
import { fetchChatQuestions } from './ChatbotQuestions';
import TypingAnimation from '../TypingAnimation/TypingAnimation';

const Chatbot = () => {
    const [userMessage, setUserMessage] = useState('');
    const [conversation, setConversation] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);
    const [userId, setUserId] = useState(null);
    const [questions,setQuestions] = useState([]);
    const [isTyping, setIsTyping] = useState(false);

    const messageHandler = (e) => {
        setUserMessage(e.target.value);
    };

    useEffect(() => {
        fetchChatQuestions(setQuestions);
      }, []); 
      
      useEffect(() => {
        // Check if questions exist and currentStep is within the valid range
        if (questions && currentStep < questions.length) {
          setConversation((prevConversation) => [
            ...prevConversation,
            { type: 'chatbot', text: questions[currentStep].question },
          ]);
      
        }
      }, [currentStep,questions]);
      
      
      
   console.log(questions)
 
   

    const sendMessageHandler = (e) => {
        e.preventDefault(); 
        const updatedConversation = [...conversation, { type: 'user', text: userMessage }];
        setConversation(updatedConversation);
        setUserMessage('');
        setCurrentStep((prevStep) => prevStep + 1);  
        }


    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>Welcome to Ekodus</h2>
            </div>
            <div className={styles.body}>
             {isTyping && <TypingAnimation />}
                {conversation.map((message, index) => (
                    <p key={index} className={message.type === 'chatbot' ? styles.chatbot_msg : styles.user_msg}>
                        {message.text}
                    </p>
                ))}

            </div>
            <form onSubmit={sendMessageHandler} className={styles.input}>
                <input type="text" value={userMessage} required onChange={messageHandler} />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Chatbot;
