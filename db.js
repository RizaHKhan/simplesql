const mysql = require('mysql')

let db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'sqlpractice'
  });

  db.connect((err) => {
    if (err) {
        throw err
    } else {
        //start server only when db connection is established
        const app = require('./app')
        const port = process.env.PORT || 3000
        app.listen(port, console.log(`Listening on port ${port}`))
        console.log('db connection established')
    }
})

module.exports = db