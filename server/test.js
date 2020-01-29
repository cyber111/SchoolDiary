const db = require('./db')
const express = require('express')
const router = express.Router()
const utils = require('./utils')

router.get('/', (request, responce) => {

    const conn = db.connect()

    const statement = `SELECT * FROM tests`

    conn.query(statement, (error, data) => {
        conn.end()
        responce.send(utils.createResult(error, data))
    })
    
})


router.post('/', (request, responce) => {

    const conn = db.connect()
    const { test_name ,date ,subject, class_name, class_id } = request.body
    const statement = `INSERT INTO tests (test_name ,date ,subject, class_name, class_id) values ('${test_name}', '${date}', '${subject}', '${class_name}', '${class_id}' )`

    conn.query(statement, (error, data) => {
        conn.end()
        responce.send(utils.createResult(error, data))
    })
    
})




module.exports = router