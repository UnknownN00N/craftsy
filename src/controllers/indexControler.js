const {getData} = require('../data')
const data =  getData("products.json")  

module.exports = {
    index : (req,res) => {

        return res.render('home',{
            products : data
        })
    },
    admin : (req,res) => {

        return res.render('admin',{
            title : "admin"
        })
    }
}