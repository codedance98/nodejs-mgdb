const express = require("express");
const db = require('mongoose');
let api = express.Router();
const UserModel = require("../db/model/user.js");
const db_add = 'mongodb+srv://codedance98:liliangqi1@cluster0-cjz8o.mongodb.net/test?retryWrites=true&w=majority';
db.connect(db_add);

api.post("/create", function(req, res) {
    let t = {
        name:req.body.name,
        age:req.body.age,
        sex:req.body.sex,
        email:req.body.email,
        instructions:req.body.instructions
    };
    var user = new UserModel({
        name:req.body.name,
        age:req.body.age,
        sex:req.body.sex,
        email:req.body.email,
        instructions:req.body.instructions
    });
    user.save(function (err) {
        if (err) {
            console.log("Error:" + err.message);
        }
        else {
            res.json({
                ...t,
                msg:'保存成功'
            });
        }
    });
});

api.get("/findAll", function(req, res) {
    UserModel.find(function(err, ret){
        console.log(err)
        console.log(ret)
        if(err){
           console.log('查询失败')
        } else {
            console.log(ret)
            res.json(ret);
        }
    })
});
module.exports = api;