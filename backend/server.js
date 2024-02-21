import { config } from 'dotenv';
config();
import cors from 'cors';
import express from "express";
import friendRoute from './Routes/friendRoute.js';
import bcrypt from 'bcrypt';
import { addUser, checkUser } from './Model/db.js';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import auth from './Middleware/auth.js';

const app = express();
const PORT_NO = process.env.PORT;



// 
app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

 
const authenticate = async (req, res, next) => {
    const {username, password} = req.body;
    const hashedpwd = await checkUser(username)
    // compare(userinput, initialPassword from db)
    bcrypt.compare(password, hashedpwd, (err, result) => { 
        if(err) throw err
        if(result === true){
            const {username} = req.body
            const token = jwt.sign({username:username}, process.env.SECRET_KEY, {expiresIn: '1h'})
            // true only backend user can access no frontend
            // if httpOnly false then frontend can access cookie
             res.cookie('jwt', token, {httpOnly:true})
            next();
        } else {
            res.send('the password does not match')
        }
    })   
} 

app.post('/logs', authenticate, (req, res) => {
    const {username} = req.body
    const token = jwt.sign(
        {username:username}, 
        process.env.SECRET_KEY, {expiresIn: '1h'}
    ); 

    res.cookie('jwt', token);

    res.send({
        // token:token
        msg: 'you logged in'
    });
}); 


// require('crypto').randomBytes(64).toString('hex')
// calling Jwt middleware for all routes in friend route    //but we targeting the /get method

// app.use('/login', auth, friendRoute)
app.use('/login', auth, friendRoute)

app.post('/users', (req, res) => {
    const { username, password } = req.body;
    bcrypt.hash(password, 10, async (err, hash) => {
        if(err) throw err
        await addUser(username, hash)
        res.send({
            msg : "acc has been created"
        }); 
    });
});

// logout
app.delete('/logout', (req, res) => {
    res.clearCookie('jwt')
    res.send({
        msg: 'you logged out' 
    })
})

// app.post('/logs', authenticate, (req, res) => {
//     res.send({
//         msg: "You have logged in!"
//     })
// })

app.listen(PORT_NO, () => {
    console.log(`Server initialized on http://localhost:${PORT_NO}`);
});