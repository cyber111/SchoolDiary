const db = require('./db')
const express = require('express')
const router = express.Router()
const utils = require('./utils')

router.get('/', (request, responce) => {

    const conn = db.connect()

    const statement = `SELECT details, day, DATE_FORMAT(date, "%Y-%m-%d") as date FROM schedules`

    conn.query(statement, (error, data) => {
        conn.end()
        responce.send(utils.createResult(error, data))
    })
    
})


router.post('/', (request, responce) => {

    const conn = db.connect()
    const { date, details, day } = request.body
    const statement = `INSERT INTO schedules (date, details, day) values ('${date}', '${details}', '${day}')`

    conn.query(statement, (error, data) => {
        conn.end()
        responce.send(utils.createResult(error, data))
    })
    
})




module.exports = router