const path = require("path")


module.exports = {
    register : (req, res) => {
        return res.render('register')
return res.sendFile(path.join(__dirname, '..', "views", "register.html"));
    },
    login : (req, res) =>{
    return res.render ('login')
return res.sendFile(path.join(__dirname, '..', "views", "login.html"))
    },
    profile : (req, res) =>{
    return res.sendFile(path.join(__dirname, '..', "views", "profile.html"))
    }
}