const path  = require('path')

module.exports = {
    index : (req, res) =>{

return res.render('home')

return res.sendFile(path.join(__dirname, '..', "views", "home.ejs"))
    },
    admin : (req, res) =>{
        return res.render('admin')
        return res.sendFile(path.join(__dirname, '..', "views", "admin.html"))
    }
}