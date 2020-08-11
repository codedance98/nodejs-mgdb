const db = require('mongoose');
// const db_add = 'mongodb+srv://codedance98:liliangqi1@cluster0-cjz8o.mongodb.net/test?retryWrites=true&w=majority';
// db.connect(db_add);
db.connection.on('connected', ()=>{
    console.log(`连接数据库成功`);
    insert();
})
db.connection.on('error', (err)=>{
    console.log(`连接数据库失败:${err}`);
})
db.connection.on('diconnected', ()=>{
    console.log('连接数据库断开');
})
const UserModel = require("./models/user.js");

module.exports = db; 