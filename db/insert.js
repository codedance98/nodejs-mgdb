var User = require("./user.js");
/**
 * 插入
 */
function insert() {
    var user = new User({
        username : 'liangqi',                 //用户账号
        userpwd: '1234',                            //密码
        userage: 24,                               //年龄
        logindate : new Date()                      //最近登录时间
    });
    user.save(function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    });
}
insert();