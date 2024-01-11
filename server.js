const path = require('path');
const express = require('express');
const session = require('express-session');
// connect folders here 

const app = express();
const PORT = process.env.PORT || 3001;


// cookie sess 

const sess = {
   secret: 'my little secret',
   cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
   } ,
   resave: false,
   saveUnititialized: true,
   // not finished 
};

app.use(session(sess));