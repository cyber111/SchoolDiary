const mysql = require('mysql')
function connect() {

    const conn = mysql.createConnection({
        host: 'localhost',
        user: 'dmc',
        password: 'dmc',
        database: 'school_diary_db',
        port: 3306
    })
    conn.connect()

    return conn
}

module.exports = {
    connect : connect
} 