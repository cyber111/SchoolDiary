const db = require('./db')
const express = require('express')
const router = express.Router()
const utils = require('./utils')


router.get('/', (request, responce) => {

    const conn = db.connect()
    const statement = 'SELECT * FROM student'

    conn.query(statement, (error, data) => {
        conn.end()
        responce.send(utils.createResult(error, data))
    })
})

//getting student according to the user id
router.get('/:id', (request, responce) => {

    const id = request.params.id
    const conn = db.connect()
    const statement = `SELECT * FROM student WHERE UID = ${id}`

    conn.query(statement, (error, data) => {
        conn.end()
        responce.send(utils.createResult(error, data))
    })
})
router.post('/', (request, responce) => {

    console.log("post student")
    const conn = db.connect()
    const
        {
            FirstName, LastName, RollNo,
            ParentID, Gender, Board, Address,
            BirthDate, Email, Class, Division,
            DiviosnID, ClassID, USerID, UserName, Password
        } = request.body

    console.log(BirthDate);

    const statement =
        `
                        INSERT INTO student
                        (
                        SFNAME ,SLNAME,SROLLNO
                        ,PID , SGENDER,SBOARD , SADDRESS,
                        SBIRTHDATE ,SEMAIL ,SCLASS ,
                        SDIVISION, DID, CID, UID, USERNAME, PASSWORD
                        )
                    VALUES
                        (
                        '${FirstName}', '${LastName}', '${RollNo}',
                        '${ParentID}', '${Gender}', '${Board}',
                        '${Address}','${BirthDate}' ,'${Email}', '${Class}',
                        '${Division}', '${DiviosnID}', '${ClassID}', '${USerID}',
                        '${UserName}', '${Password}'
                        )

                        `

    conn.query(statement, (error, data) => {
        conn.end()
        responce.send(utils.createResult(error, data))
    })
})


router.delete('/:id', (request, responce) => {

    const id = request.params.id;
    const conn = db.connect()
    const statement = `DELETE FROM student WHERE S_ID = ${id}`
    conn.query(statement, (error, data) => {
        conn.end()
        responce.send(utils.createResult(error, data))
    })
})


router.put('/:id', (request, response) => {
    const conn = db.connect()
    const
        {
            FirstName, LastName, RollNo,
            ParentID, Gender, Board, Address,
            BirthDate, Email, Class, Division,
            DiviosnID, ClassID
        } = request.body

    const id = request.params.id

    const statement = `UPDATE student SET SFNAME ='${FirstName}', 
    SLNAME='${LastName}', 
    SROLLNO='${RollNo}', 
    PID ='${ParentID}', 
    SGENDER='${Gender}',
    SBOARD ='${Board}',
    SADDRESS='${Address}', 
    SBIRTHDATE='${BirthDate}',
    SEMAIL ='${Email}', 
    SCLASS ='${Class}', 
    SDIVISION='${Division}', 
    DID='${DiviosnID}',
    CID='${ClassID}'
    WHERE S_ID= '${id}'`

    conn.query(statement, (error, data) => {
        conn.end()
        response.send(utils.createResult(error, data))
    })
})

//for getting lattest UID
router.post('/user', (request, response) => {
    console.log("hello");
    
    const conn = db.connect()
    const statement = `select * from user order by UID desc limit 1`

    conn.query(statement, (error, data) => {
        conn.end()
        response.send(utils.createResult(error, data))
    })
})




module.exports = router





















