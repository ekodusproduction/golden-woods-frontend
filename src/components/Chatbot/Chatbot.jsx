import React, { useState, useEffect } from 'react';
import styles from './Chatbot.module.css';
import axiosConfig, { publicURL } from '../../api/axiosConfig'

const Chatbot = () => {
    const [message, setMessage] = useState('');
    const [conversation, setConversation] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);
    const [userId, setUserId] = useState(null);
    const [questions,setQuestions] = useState([]);

    const messageHandler = (e) => {
        setMessage(e.target.value);
    };
    useEffect(() => {
        if (userId) {
            axiosConfig.get(`chatquestion/list`)
                .then(response => {
                    setQuestions(response.data.chatQuestions)
                    console.log(response)
                })
                .catch(error => console.error(error));
        }
    }, [userId]);
    console.log(questions)
   

    const sendMessageHandler = () => {
        const updatedConversation = [...conversation, { type: 'user', text: message }];
        setConversation(updatedConversation);
        setMessage('');
        console.log(updatedConversation)
       

        // Update the conversation based on the current step
        switch (currentStep) {
            case 1:
                // Ask for phone number
                setConversation([...updatedConversation, { type: 'chatbot', text: `Thank you, ${message}. Please enter your phone number.` }]);
                setCurrentStep(2);
                break;
            case 2:
                // Ask for email
                setConversation([...updatedConversation, { type: 'chatbot', text: `Thank you for providing your phone number. Please enter your email.` }]);
                setCurrentStep(3);
                break;
            case 3:
                // Thank user for email and optionally reset the conversation
                setConversation([...updatedConversation, { type: 'chatbot', text: `Thank you for providing your email. Please provide your preferred mode of contact` }]);
                setCurrentStep(4);  // Reset the conversation (you can modify this as needed)
                break;
            case 4:
                setConversation([...updatedConversation, { type: 'chatbot', text: `Thank you dude` }]);
                setCurrentStep(5)

                const userMessages = updatedConversation.filter((msg) => msg.type === 'user');
                console.log(userMessages)
                const requestBody = {
                    "name": userMessages[0].text,
                    "email": userMessages[1].text,
                    "phone": userMessages[2].text,
                    "preferredMode": userMessages[3].text,
                }
                axiosConfig.post(`chatsession/webuser/create`,requestBody)
                .then(response => {
                    setUserId(response.data.data.user)
                })
               let questionIndex=0;
               while (questionIndex < questions.length) {
                const questionCase = 5 + questionIndex;
                        setConversation([...updatedConversation, { type: 'chatbot', text: questions[questionIndex].question}]);
                        questionIndex++;      
                }
                break;
            }

             
            
            
        }
   

    // Initial chatbot message when the component mounts
    useEffect(() => {
         // Ask for name
        setConversation([{ type: 'chatbot', text: `Hello! Please enter your name.` }]);
        setCurrentStep(1);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>Welcome to Ekodus</h2>
            </div>
            <div className={styles.body}>
                {conversation.map((message, index) => (
                    <p key={index} className={message.type === 'chatbot' ? styles.chatbot_msg : styles.user_msg}>
                        {message.text}
                    </p>
                ))}
            </div>
            <div className={styles.input}>
                <input type="text" value={message} onChange={messageHandler} />
                <button onClick={sendMessageHandler}>send</button>
            </div>
        </div>
    );
};

export default Chatbot;
