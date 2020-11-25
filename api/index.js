const express = require("express");
const jwt = require("jsonwebtoken")
const cors = require("cors")

const {config} = require("./config/index")

const app = express()

// middlewares
app.use(cors())
app.use(express.json())

//routes 

app.post("/api/auth/token", (req,res)=>{
    const { email, username, name } = req.body
    //FIRMAMOS EN TOKEN .sign(payload, secret)
    const token = jwt.sign({sub:username, email, name}, config.authJwtSecret);
    
    res.json({
        acces_token: token   
    }) 
})

app.get("/api/auth/verify", (req,res, next)=>{
    const { acces_token } = req.query;
    
    try {
        const decoded = jwt.verify(acces_token, config.authJwtSecret)
        res.json({
            message: "Is valid",
            username: decoded.sub
        })    
    } catch (err) {
        next(err)
    }
})

app.listen(config.port, ()=>{
    console.log(`Listen on http://localhost:${config.port}`);
})