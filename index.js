const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
const { Configuration, OpenAIApi } = require("openai");

/* Configuring OpenAI */
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

/* requiring the information */
const information = JSON.stringify(require('./information.json'));

/* GET to the index page */
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

/* Configuring Socket.io */
io.on('connection', (socket) => {
  const arrayMessages = [];
  let counter = 0;

  socket.on('chat message', async (msg) => {
    if (arrayMessages.length == 0) {
      arrayMessages.push({
        role: 'user',
        content: `${information} Based on this information, please answer my question: ${msg}`
      });
    }
    
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: arrayMessages,
    });
    
    if (arrayMessages.lenght % 2 == 0) {
      arrayMessages.push({
        role: 'user',
        content: msg
      }); 
    }
    else {
      arrayMessages.push({
        role: 'assistant',
        content: completion.data.choices[0].message.content
      });
    }

    io.emit('chat message', msg);
    io.emit('chat message', completion.data.choices[0].message.content);
    counter++;
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});