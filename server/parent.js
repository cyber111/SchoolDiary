const db = require('./db')
const express = require('express')
const router = express.Router()
const utils = require('./utils')


router.get('/', (request, responce) => {

    const conn = db.connect()
    const statement = 'SELECT * FROM parent'

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

router.post('/', (request, responce) => {

    console.log("post parent")
    const conn = db.connect()
    const
        {
            s_id, pfirstname, plastname, pmobile,pemail , paddress,prelation
        } = request.body
        

    const statement =
    
    `
        INSERT INTO parent
        ( S_ID, PFIRSTNAME,PLASTNAME, PMOBILE, PEMAIL, PADDRESS, PRELATION)
        VALUES
        ('${s_id}', '${pfirstname}', '${plastname}', '${pmobile}', '${pemail}', '${paddress}','${prelation}');
    
    `
   

    conn.query(statement, (error, data) => 
    {
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
    const statement = `DELETE FROM parent WHERE PID = ${id}`
    conn.query(statement, (error, data) => {
        conn.end()
        responce.send(utils.createResult(error, data))
    })
})

router.post('/byemail', (request, responce) => {
    const {email} = request.body;
    const conn = db.connect()
    const statement = `select * FROM parent WHERE PEMAIL = '${email}'`
    conn.query(statement, (error, data) => {
        conn.end()
        responce.send(utils.createResult(error, data[0]))
    })
})

router.get('/:id', (request, responce) => {

    const id = request.params.id;
    const conn = db.connect()
    const statement = `select * FROM parent WHERE PID = ${id}`
    conn.query(statement, (error, data) => {
        conn.end()
        responce.send(utils.createResult(error, data))
    })
})


router.post('/bypid', (request, responce) => {

    const id = request.body.id;
    const conn = db.connect()
    const statement = `select * FROM parent WHERE PID = ${id}`
    conn.query(statement, (error, data) => {
        conn.end()
        responce.send(utils.createResult(error, data[0]))
    })
})


module.exports = router