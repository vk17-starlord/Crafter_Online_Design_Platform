const express = require('express');
const mongoose = require('mongoose');
const {mongoURL} = require('./keys');
const bodyParser=require('body-parser');
const app = express();



mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', ()=>{
    console.log("Database running @27017");
})

mongoose.connection.on('error', (err)=>{
    console.log("Database Error" + err);
})

require('./models/user');
require('./models/post');

app.use(express.json());
app.use(require('./routes/auth'));
app.use(require('./routes/post'));
app.use(require('./routes/profile'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server responding @${PORT}`);
})