const {getData} = require('../data')
const products =  getData("products.json")  

module.exports = {
    list : (req,res) => {
        return res.render('products')

    },
    detail : (req,res) => {
        const {product_id} = req.params
        console.log(req.params);
        
const product = products.find(product => product.id === +product_id);
        console.log(product);
        
       
        return res.render('product-detail',{
            ...product
        })
    }
}