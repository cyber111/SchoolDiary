const db = require('./db')
const express = require('express')
const router = express.Router()
const utils = require('./utils')

router.get('/', (request, responce) => {

    const conn = db.connect()

    const statement = `SELECT * FROM classes`

    conn.query(statement, (error, data) => {
        conn.end()
        responce.send(utils.createResult(error, data))
    })
    
})




module.exports = router