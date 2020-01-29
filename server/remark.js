const db = require('./db')
const express = require('express')
const router = express.Router()
const utils = require('./utils')

router.post('/bysid', (request, responce) => {

    const conn = db.connect()
    const { sid }  = request.body
    const statement = `SELECT remark ,sid, DATE_FORMAT(date, "%Y-%m-%d") as date  FROM remark where sid = ${sid}`

    conn.query(statement, (error, data) => {
        conn.end()
        responce.send(utils.createResult(error, data))
    })
    
})


router.post('/', (request, responce) => {

    const conn = db.connect()
    const { sid ,date ,remark } = request.body
    const statement = `INSERT INTO remark ( remark ,sid, date ) values ('${remark}', '${sid}', '${date}')`

    conn.query(statement, (error, data) => {
        conn.end()
        responce.send(utils.createResult(error, data))
    })
    
})




module.exports = router