const express = require('express')  
const studentRouter = require('./students')
const userRouter = require('./user')
const parentRouter = require('./parent')
const facultyRouter = require('./faculty')
const bodyParser = require('body-parser')
const adminRouter = require('./admin')
const noticeRouter = require('./notice')
const app = express()

// for CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json())
app.use('/student', studentRouter)
app.use('/user', userRouter)
app.use('/parent', parentRouter)
app.use('/faculty', facultyRouter)
app.use('/notice', noticeRouter)




app.listen(5000, '0.0.0.0', ()=>{
    console.log("SERVER STARTED ON 5000")
})