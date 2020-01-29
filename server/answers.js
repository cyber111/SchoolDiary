const db = require('./db')
const express = require('express')
const router = express.Router()
const utils = require('./utils')

router.post('/byid', (request, responce) => {
    const conn = db.connect()
    const {test_id} = request.body
    const statement = `SELECT * FROM answers where sid = '${sid}'`

    conn.query(statement, (error, data) => {
        conn.end()
        responce.send(utils.createResult(error, data))
    })
    
})


router.post('/', (request, responce) => {

    const conn = db.connect()
    const { test_id ,q_id ,answer, sid } = request.body
    const statement = `INSERT INTO questions (test_id ,q_id ,answer, sid) values ('${test_id}', '${q_id}', '${answer}', '${sid}')`

    conn.query(statement, (error, data) => {
        conn.end()
        responce.send(utils.createResult(error, data))
    })
    
})




module.exports = router 