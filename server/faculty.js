const db = require('./db')
const express = require('express')
const router = express.Router()
const utils = require('./utils')


router.get('/', (request, responce) => {

    const conn = db.connect()
    const statement = 'SELECT * FROM faculty'

    conn.query(statement, (error, data) => {
        conn.end()
        responce.send(utils.createResult(error, data))
    })
})


router.get('/:uid', (request, responce) => {
    const {uid} = request.params
    const conn = db.connect()
    const statement = `SELECT * FROM faculty WHERE UID = ${uid}`

    conn.query(statement, (error, data) => {
        conn.end()
        responce.send(utils.createResult(error, data))  
    })
})

router.get('/notice', (request, responce) => {
    
    const conn = db.connect()
    const statement = `SELECT * FROM notice`

    conn.query(statement, (error, data) => {
        conn.end()
        responce.send(utils.createResult(error, data))  
    })
})

router.post('/notice', (request, responce) => {
    
    const conn = db.connect()
    const {notice_text} = responce.body
    const statement = `insert into notice (notice_text) values ('${text}')`

    conn.query(statement, (error, data) => {
        conn.end()
        responce.send(utils.createResult(error, data))  
    })
})

router.post('/', (request, responce) => {

    console.log("post faculty")
    const conn = db.connect()
    const
        {
            FFIRSTNAME, FLASTNAME, FMOBILE,
            FADDRESS, FGENDER,
            FSUBJECTSPECILITY
        } = request.body


    const statement = `INSERT INTO faculty (FFIRSTNAME, FLASTNAME, FMOBILE, FADDRESS, FGENDER, FSUBJECTSPECILITY) VALUES ('${FFIRSTNAME}', '${FLASTNAME}', '${FMOBILE}', '${FADDRESS}', '${FGENDER}', '${FSUBJECTSPECILITY}')`



    conn.query(statement, (error, data) => {
        conn.end()
        responce.send(utils.createResult(error, data))
    })
})

router.put('/student/:id', (request, responce) => {


    const id = request.params.id

    const product_name = request.body.product_name
    const conn = db.connect()
    const statement = `UPDATE student SET product_name = '${product_name}' WHERE id = ${id}`

    conn.query(statement, (error, data) => {
        conn.end()
        responce.send(data)
    })
})

router.delete('/:id', (request, responce) => {

    const id = request.params.id;
    const conn = db.connect()
    const statement = `DELETE FROM faculty WHERE FID = ${id}`
    conn.query(statement, (error, data) => {
        conn.end()
        responce.send(utils.createResult(error, data))
    })
})
module.exports = router