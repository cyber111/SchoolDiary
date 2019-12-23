const db = require('./db')
const express = require('express')
const router = express.Router()
const utils = require('./utils')


router.get('/notice', (request, responce) => {
    
    const conn = db.connect()
    const statement = `SELECT * FROM notice`

    conn.query(statement, (error, data) => {
        conn.end()
        responce.send(utils.createResult(error, data))  
    })
})

router.post('/setnotice', (request, responce) => {
    
    const conn = db.connect()
    const {notice_text} = request.body
    const statement = `insert into notice (notice_text) values ('${notice_text}')`

    conn.query(statement, (error, data) => {
        conn.end()
        responce.send(utils.createResult(error, data))  
    })
})

router.put('/editnotice', (request, responce) => {
    
    const conn = db.connect()
    const {notice_text, id} = request.body
    const statement = `update notice set notice_text = '${notice_text} where id = ${id}'`

    conn.query(statement, (error, data) => {
        conn.end()
        responce.send(utils.createResult(error, data))  
    })
})

module.exports = router