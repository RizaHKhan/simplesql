const db = require('../db')

exports.home = (req, res) => {
    res.send('Welcome to the homepagee')
}

exports.createPostTable = (req, res) => {
    let newTable = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))'
    db.query(newTable, (err, result) => {
        if(err) throw err
        console.log(result)
        res.send('Posts Table Created')
    })
}

exports.insertPostData = (req, res) => {
    let post = {title: 'Another title', body: 'Another Body'}
    let postData = 'INSERT INTO posts SET ?'
    let query = db.query(postData, post, (err, result) => {
        if(err) throw err
        console.log(result)
        res.send('Data Entered into Table')
    })
}

exports.getData = (req, res) => {
    let sql = 'SELECT * FROM posts'
    let query = db.query(sql, (err, result) => {
        if(err) throw err
        res.send(result)
    })
}

exports.getSingle = (req, res) => {
    let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`
    let query = db.query(sql, (err, result) => { 
        if(err) throw err
        res.send(result)
    })
}

exports.updatepost = (req, res) => {
    
    let sql = `UPDATE posts SET title = "New Title 1234" WHERE id = ${req.params.id}`
    let query = db.query(sql, (err, result) => { 
        if(err) throw err
        console.log(result)
        res.send('Post Updated')
    })
}

exports.deletepost = (req, res) => {
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`
    let query = db.query(sql, (err, result) => { 
        if(err) throw err
        console.log(result)
        res.send('Post Deleted')
    })
}