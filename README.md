# cloudwalk-self-driven-bank-gpt-chatbot
This is a ChatBot project to explain about the CloudWalk's Self Driven Bank project, based on OpenAI's GPT technology.

## Project Description
This is the description of my project of OpenAI API's usage showcase.

### How I built this project?
Just after I read the email asking me to do this project for a showcasing of the hiring process of 
"Prompt Engineer" at CloudWalk, I started by studying the company. First of all, I read the 
content on the [official CloudWalk's website](https://cloudwalk.io/). Then, I decided to create a 
chatbot to provide information about the company and the Self-Driven Bank project. I asked ChatGPT 
to generate a JSON file with this information.

With this information in hand, all that I had to do was study the OpenAI API's documentation
to know how to use this information to create the chatbot. In addition to this, I needed to
learn the basics of creating chatbots with Node.js, through the 'Get Started' tutorial of Socket.io, 
a library for creating chatbots with Node.js and the Websockets protocol.

I chose the 'gpt-3.5-turbo' AI model, the same as the ChatGPT tool. It's perfect for building a chatbot 
powered by AI and its price is one of the lowest, even though it's one of the most powerful AI models in 
OpenAI's API. The price is $0.002/token. A token is a unit of measurement used by OpenAI to calculate the 
price of its requests, based on the number of words and other factors.

To develop this project, I needed to study about OpenAI's API usage, the differences between
the AI models and about the Socket.io library, that I just made the "Get Started" tutorial, 
because it serves for our purpose here (create a simple chatbot).

**In brief, this project is built with:**
- Node.js
- Express.js
- HTML, CSS and JS
- OpenAI API
- Socket.io

**In summary, the goal is:**

To build a chat bot where the clients can ask questions about 
CloudWalk and its products, based on the ChatGPT technology 
and a previous information about the company and its services.

---
## How the project works?
Based on the previous information collected and inserted in a JSON file, along with the following text
**" Based on this information, please answer the following question: "** +
the client's question.

Thanks to this method of asking and allied with the power of the OpenAI's "gpt-3.5-turbo" AI model,
the clients can ask in whatever language they wants, because the AI will understand that it needs to 
translate the answer according to the language used in the question.

For example:

```
const information = JSON.stringify(require('../information.json'));
const clientQuestion = 'Como os pagamentos podem ser mais eficientes?';

const completion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [
    {
      role: "user", 
      content: `${information} \n\n Based on this information, please answer my question: ${clientQuestion}`
    }
  ],
});
```

Still about how the project works, the Socket.io library to creates a websocket between the client and server. 
For every new question, the server responds based on the previous messages in the chat.

## Installation
To install this project, you need to follow these steps:

1. Install Node.js:
If you don't know how to do this, go to the following page and ```click``` on the **LTS** version: https://nodejs.org/en/

2. Install the project's dependencies:
In your terminal or command line prompt, navigate to the project directory and enter the following command, then press ```ENTER```:
  
```
  npm install
```

3. Configure your project
In the directory of the project, create a file named ".env", then put the following content there:

```
  PORT=
  OPENAI_API_KEY= <insert here your secret OpenAi API key>
```

> If you don't have an API key, you need to log in to the OpenAI API and go to this page 
> https://platform.openai.com/account/api-keys . There you can create your secret API Key.
> 
> When creating a new account in OpenAI, you will start with $18.00 as a free trial credit
> but it expires in 3 months.

## Testing
To test this project, you need to follow these steps:

1. Start the project
In your terminal or command line prompt, in directory of the project, enter with this command, then press ```ENTER```:
  
```
  npm start
```

2. Test the project:
Open your browser and go to http://localhost:3000
. There you will find the chat, so you can ask things about CloudWalk and its products.
