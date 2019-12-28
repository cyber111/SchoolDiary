const db = require('./db')
const express = require('express')
const router = express.Router()
const utils = require('./utils')


router.post('/register', (request, response) => {

    const username = request.body.username;
    const password = request.body.password;
    const email = request.body.email
    const role = request.body.role
    console.log(password)

    const conn = db.connect()

    const statement = `
    INSERT INTO user 
        (
            EMAIL,USERNAME,
            PASSWORD, is_block, role
                ) 
        VALUES 
        ('${email}','${username}','${password}', '${0}', '${role}')`

    conn.query(statement, (error, data) => {
        console.log(error)
        conn.end()
        response.send(utils.createResult(error, data))
    })
})


router.get('/', (request, response) => {

    const conn = db.connect()
    const statement = 'SELECT * FROM user'
    conn.query(statement, (error, data) => {
        conn.end()
        response.send(utils.createResult(error, data))
    })
})

router.get('/ID/:username', (request, response) => {

    const conn = db.connect()
    const username = request.params.username
    const statement = `SELECT UID FROM user where USERNAME = '${username}'`
    conn.query(statement, (error, data) => {
        conn.end()
        response.send(utils.createResult(error, data))
    })
})

//getting roll
router.get('/:ID', (request, response) => {

    const conn = db.connect()
    const id = request.params.id
    const statement = `SELECT role FROM user where USERNAME = '${id}'`
    conn.query(statement, (error, data) => {
        conn.end()
        response.send(utils.createResult(error, data))
    })
})

router.post('/login', (request, response) => {
    const conn = db.connect()
    const { password, username } = request.body

    const statement = `SELECT * FROM user WHERE PASSWORD = '${password}' AND USERNAME = '${username}'`
    conn.query(statement, (error, data) => {
        conn.end()
        if (data.length == 0) {
            response.send(utils.createResult('user does not exist'))
        }
        else {
            const user = data[0]
            const info =
            {
                id:user['UID'],
                role: user['role'],
                username: user['USERNAME'],
                email: user['EMAIL'],
                is_block : user['is_block']
            }
            response.send(utils.createResult(null, info))
        }
    })

})


router.post('/Admin/login', (request, response) => {
    const conn = db.connect()
    const { password, username } = request.body

    const statement = `SELECT * FROM admin WHERE PASSWORD = '${password}' AND USERNAME = '${username}'`
    conn.query(statement, (error, data) => {
        conn.end()
        if (data.length == 0) {
            response.send(utils.createResult('user does not exist'))
        }
        else {
            const user = data[0]
            const info =
            {
                username: user['USERNAME'],
                email: user['EMAIL']
            }
            response.send(utils.createResult(null, 'cant show'))
        }
    })
})





router.post('/Admin/block/:id', (request, response) => {
    const conn = db.connect()
    const id = request.params.id
    const statement = `UPDATE user SET is_block = 1 where UID=${id};`
    conn.query(statement, (error, data) => {
        conn.end()
        response.send(utils.createResult(error, data))
    })
})

router.post('/Admin/unblock/:id', (request, response) => {
    const conn = db.connect()
    const id = request.params.id
    const statement = `UPDATE user SET is_block = 0 where UID=${id};`
    conn.query(statement, (error, data) => {
        conn.end()
        response.send(utils.createResult(error, data))
    })
})


//Delete user
router.post('/Admin/delete/:id', (request, response) => {
    console.log("exp delete called");
    
    const conn = db.connect()
    const id = request.params.id
    const statement = `DELETE FROM user WHERE  UID=${id};`
    conn.query(statement, (error, data) => {
        conn.end()
        console.log(error);
        
        response.send(utils.createResult(error, data))
    })
})

module.exports = router
