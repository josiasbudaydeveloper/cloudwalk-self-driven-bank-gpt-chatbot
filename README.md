# cloudwalk-self-driven-bank-gpt-chatbot
This is a ChatBot project to explain about the CloudWalk's Self Driven Bank project, based on OpenAI's GPT technology.

## Project Description
This the description of my project of AI's using showcase.

Just after I read the email asking me to do this project as a showcasing of the hiring process of 
"Prompt Engineer" at CloudWalk, I get started by studying about CloudWalk. First of all, I read 
the content in the official CloudWalk's website. Then, I decided to create a chatbot about both the 
information about the company and the Self-Driven Bank's project and so I asked to ChatGPT to
create a JSON file with this information.

With this information in hands, all that I had to do was study the OpenAI API's documentation
to know how to use this information to create the chatbot. In addition to this, I was need to
learn the basics of creating chats with Node.js, through the "Get Started" project of 
Socket.io, a library to create chats with Node.js and the Websockets protocol.

I choose the "gpt-3.5-turbo" AI model, the same of the ChatGPT tool, that's perfect for building
a chatbot powered by AI and because its price its one of the lowest, even if its one of the most 
powerful AI models of the OpenAI's API. The price is $: 0.002/token. A token is a unit of 
measurement used by OpenAI to calculate the price a its requests, based on the number of words and 
others things.

To develop this project, I was need to study both about OpenAI's API usage, the differences between
the AI models and about the Socket.io library, that I just made the "Get Started" tutorial, 
because it serves for our purpose here (create a simple chatbot).

**In a brief, this project was made with:**
- Node.js
- Express.js
- EJS Template Engine
- HTML, CSS and JS
- OpenAI API
- Socket.io

**In a brief, the goal is:**

To build a chat bot where the clients can ask questions about 
CloudWalk and its products, based on the ChatGPT technology 
and a previous information about the company and its services.

---
## How the project works?
Based on a previous information collected and inserted in a JSON file + 
the following text **" Based on this information, please answer the following question: "** +
the client's question.

Thanks to this asking method and alied to the power of the OpenAI's "gpt-3.5-turbo" AI model,
the client can ask in whatever language he wants, because the AI will understand that it
should translate the answer according to the language used in the question.

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

Still about how the project works, here comes the Websocket.io library, to create a websocket between the client 
and the server, so for every new question, the server will respond based on the previous messages of the chat. 
