import React, { useState, useEffect, useRef } from 'react';
import styles from './Chatbot.module.css';
import axiosConfig, { publicURL } from '../../api/axiosConfig'
import { fetchChatQuestions } from './ChatbotQuestions';
import TypingAnimation from '../TypingAnimation/TypingAnimation';
import { IoIosSend } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { MdMinimize } from "react-icons/md";

const Chatbot = ({setIsChatbotOpen}) => {
    const [userMessage, setUserMessage] = useState('');
    const [conversation, setConversation] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);
    const [userId, setUserId] = useState(null);
    const [questions,setQuestions] = useState([]);
    const [isTyping, setIsTyping] = useState(false);

    const chatbotRef = useRef()

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
      
      const minimizeChatbotHandler = () => { 
            const chatbotElement = chatbotRef.current;
            const currentHeight = parseFloat(getComputedStyle(chatbotElement).height);
            chatbotElement.style.height = currentHeight === 435 ? '0' : '435px';

 
 
      }
      useEffect(() => {
        // Scroll to the bottom of the chat body when the conversation changes
        const chatBody = chatbotRef.current.querySelector(`.${styles.body}`);
        chatBody.scrollTop = chatBody.scrollHeight;
      }, [conversation]);
      
   console.log(questions)
   console.log(currentStep)
 
   

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
                <h2>Chat with us</h2>
                <div className={styles.header_controls}>
                    <button onClick={minimizeChatbotHandler}><MdMinimize  color='white' size={22}/></button>
                    <button onClick={()=>{setIsChatbotOpen(false)}}><MdClose color='white' size={22}/></button>
                </div>
            </div>
            <div className={styles.body_container} ref = {chatbotRef}>
            <div className={styles.body}>
             {isTyping && <TypingAnimation />}
                {conversation.map((message, index) => (
                    <p key={index} className={message.type === 'chatbot' ? styles.chatbot_msg : styles.user_msg}>
                        {message.text}
                    </p>
                ))}

            </div>
            <form onSubmit={sendMessageHandler} className={styles.form}>
            {questions[currentStep]?.questionType=='choice' && 
               <div className={styles.choices}>
                     {questions[currentStep]?.answers.map((answer)=> (
                         <div key={answer.id}>
                         <input type="radio" id={answer.id} name="chatbot_choice" value={answer?.answer} onChange={messageHandler}/>
                         <label for={answer.id}>{answer?.answer}</label><br/>
                     </div>
                     ))}
                </div>}
                <div className={styles.form_input_section}>
                    <input type="text" placeholder='Type here' value={userMessage} required onChange={messageHandler} />
                    <button type="submit" ><IoIosSend color='white' size={22}/></button>
                </div>

            </form>
            </div>
        </div>
    );
};

export default Chatbot;
