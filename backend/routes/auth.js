const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jsonwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../setup/dburl');

// @type    GET
// @route   /auth
// @desc    just for testing
// @access  PUBLIC
router.get('/', (req, res) => res.json({test: 'Auth is being tested'}));

//Import Schema for user Registration
const Person = require('../models/Person');

// @type    POST
// @route   /auth/register
// @desc    route for registration of users
// @access  PUBLIC

router.post('/register', (req,res) =>{
    Person.findOne({ email: req.body.email})
        .then( person => {
            if(person){
                return res.status(400).json({emailerror: 'Email is already registered'})
            } else{
                const newPerson = new Person({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                });
                //Encrypting the password using bcrypt
                bcrypt.genSalt(10, (err, salt) => {
                 bcrypt.hash(newPerson.password, salt, (err, hash) => {
                    if(err) throw err;
                    newPerson.password = hash;
                    newPerson
                        .save()
                        .then(person => res.json(person))
                        .catch(err => console.log(err));
                });
            });
            }
        })
        .catch(err => console.log(err));
});

// @type    POST
// @route   /auth/login
// @desc    route for login of users
// @access  PUBLIC

router.post('/login', (req,res)=> {
    const email = req.body.email;
    const password = req.body.password;

    Person.findOne({email})
        .then(person => {
            if(!person){
                return res.status(404).json({emailerr : 'User not Found with this email'});
            }
            bcrypt.compare(password, person.password)
                .then(isCorrect => {
                    if(isCorrect){
                        // res.json({success : "User is logged in successfully"});
                        //use payload and create token for user
                        res.status(200).json({authenticate: true, user: person})
                    }
                    else{
                        res.status(400).json({passwderror : "Incorrect Password"});
                    }
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));

});

// @type    GET
// @route   /api/auth/profile
// @desc    route for user profile
// @access  PRIVATE

router.get('/profile', passport.authenticate("jwt", { session: false }), (req,res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
        gender: req.user.gender,
        profilepic: req.user.profilepic
    });
}
);

module.exports = router;