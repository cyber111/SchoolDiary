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

router.get('/byid/:FID', (request, responce) => {
    console.log("asdasdasdasdasdx")
    const {FID} = request.params
    const conn = db.connect()
    const statement = `SELECT * FROM faculty WHERE FID = ${FID}`

    conn.query(statement, (error, data) => {
        conn.end()
        responce.send(utils.createResult(error, data))  
    })
})
router.post('/user', (request, response) => {
    console.log("hello");
    
    const conn = db.connect()
    const statement = `select * from user order by UID desc limit 1`

    conn.query(statement, (error, data) => {
        conn.end()

        response.send(utils.createResult(error, data))
    })
})

router.post('/byuid', (request, response) => {
    console.log("hello");
    const {id} = request.body
    const conn = db.connect()
    const statement = `select * from faculty where UID= '${id}'`

    conn.query(statement, (error, data) => {
        conn.end()

        response.send(utils.createResult(error, data[0]))
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