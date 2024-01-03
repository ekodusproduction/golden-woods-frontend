import axiosConfig from '../../api/axiosConfig';



const chatbotQuestion= [
    {
        id:100,
        question:'Hello! Please enter your name.',
        questionNumber:100,
        questionType:'subjective'

    },
    {
        id:101,
        question:'Thank you! Please enter your phone number.',
        questionNumber:101,
        questionType:'subjective'

    },
    {
        id:102,
        question:'Thank you for providing your phone number. Please enter your email.',
        questionNumber:102,
        questionType:'subjective'

    },
    {
        id:103,
        question:'Thank you for providing your email. Please provide your preferred mode of contact',
        questionNumber:103,
        questionType:'subjective'

    }
]


export const fetchChatQuestions = async (setQuestions) => {
  try {
    const response = await axiosConfig.get('chatquestion/list');
    chatbotQuestion.push(...response.data.chatQuestions)
    setQuestions(chatbotQuestion);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

