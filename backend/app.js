const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Message = require('./models/message');

const app = express();

mongoose.connect("mongodb+srv://igor:jBrzOlSAZVwhbynz@cluster0.cxz4y.mongodb.net/<dbname>?retryWrites=true&w=majority")
.then(()=> {
  console.log('Connected to database')
})

app.use(bodyParser.json());


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS');
  next();
});

app.post('/api/messages',(req,res,next) => {
    const message = new Message({
      messages:req.body.messages
    })
    message.save();
    console.log(message);
    res.status(201).json({message})
});



app.get('/api/messages', (req, res, next) => {
  Message.find()
  .then(documents => {
    console.log(documents);
    res.status(200).json({
      title:'this is node mesage', 
      messages:documents})
  });
});

module.exports = app;
