// Importing require modules
const express = require('express');
const app = express();
const cors = require('cors');



// For socket io server
const http = require('http');
const socketio = require('socket.io');
const manageChat = require('./manage-chat/socketio');

app.use(cors());

// Creating socket io server
const server = http.createServer(app);

// Creating socket io instance
const io = socketio(server);

// Managing socket io connection
manageChat(io);

// Defining routes
app.use('/api/rooms', require('./routes/api/rooms'));

// Defining port for listening
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server Started on PORT: ${PORT}`));
