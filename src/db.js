const mysql = require('mysql')
const db = {
    host: 'localhost',
    user: 'root',
    password: 'password',
}

const query = database => (dbNm, keyValMap) => (
    new Promise((resolve, reject) => {
        const connection = mysql.createConnection(Object.assign({ database }, db))
        connection.connect()
        let sql = 'SELECT * FROM `' + dbNm + '` WHERE 1 = 1'
        Object.keys(keyValMap).forEach(key => sql += ' AND ' + key + ' = "' + keyValMap[key] + '"')
        connection.query(sql, (err, rows, fields) => {
            connection.end()
            if (err) reject(err)
            resolve(rows)
        })
    })
)

const dbAuthQuery = query('auth')


module.exports = {
    dbAuthQuery
}