const path = require ('path')

module.exports ={
    list : (req, res) =>{
        return res.render('products')
return res.sendFile(path.join(__dirname, '..', "views", "products.html"))
    },
    detail : (req, res) => {
        console.log(req.params);
        return res.render('product-detail')
        return res.sendFile(path.join(__dirname, '..', "views", "products.html"))
    }
}