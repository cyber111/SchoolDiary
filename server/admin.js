const db = require('./db')
const express = require('express')
const router = express.Router()
const utils = require('./utils')


router.post('Admin/login', (request, response) => {
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

module.exports = router