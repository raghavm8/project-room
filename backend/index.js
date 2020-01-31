const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const auth = require('./routes/auth');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use("*",(req, res, next)=>{
    console.log('MIDDLEWARE IS CALLED ');
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', "Content-Type,Access-Control-Allow-Headers,Access-Control-Allow-Headers,Authorization,X-Request-With");
    res.setHeader('Access-Control-Allow-Methods', "*");
    next();
})

const db = require('./setup/dburl').mongoURL;

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log('MongoDB connected successfully'))
.catch(err =>console.log(err));

app.use(passport.initialize());

require('./stratergies/jsonwtStratergy')(passport);
const port = process.env.PORT || 5000;

//routes
app.use('/auth',auth);

app.listen(port, ()=>console.log(`App is running on port ${port}`));