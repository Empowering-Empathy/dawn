const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const server = require('http').Server(app);
const io = require('socket.io')(server);
const {v4: uuidV4} = require('uuid');


const PORT = process.env.PORT || 3001;
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res)=>{
  res.redirect(`/${uuidV4()}`);
});

app.get('/:room', (req, res)=>
  res.render('room', {roomId: req.params.room}) );

io.on('connection', socket =>{
  socket.on('join-room', (roomId, userId) =>{
    socket.join(roomId);
    socket.to(roomId).broadcast.emit('user-connected', userId);
    socket.on('disconnect', ()=>{
      socket.to(roomId).broadcast.emit('user-disconnected', userId);
    });
  });
}); 

app.use(bodyParser.json());

const {
  addFearlessReviewHandler,
} = require("./handlers/AddFearlessReview/handler");

// Request Handler
app.post("/AddFearlessReview", addFearlessReviewHandler);

app.listen(PORT);
