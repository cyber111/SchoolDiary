const db = require('./db')
const express = require('express')
const router = express.Router()
const utils = require('./utils')

router.post('/byid', (request, responce) => {

    const conn = db.connect()
    const {test_id} = request.body
    const statement = `SELECT * FROM questions where test_id = '${test_id}'`

    conn.query(statement, (error, data) => {
        conn.end()
        responce.send(utils.createResult(error, data))
    })
    
})


router.post('/', (request, responce) => {

    const conn = db.connect()
    const { test_id ,question ,answer } = request.body
    const statement = `INSERT INTO questions (test_id ,question ,answer) values ('${test_id}', '${question}', '${answer}')`

    conn.query(statement, (error, data) => {
        conn.end()
        responce.send(utils.createResult(error, data))
    })
    
})




module.exports = router 