const express = require("express");
const path = require("path")
const app = express();
const PORT= 3000;

const indexRoutes = require('./routes/index.routes')
const productsRoutes = require ('./routes/products.routes')
const usersRoutes = require('./routes/users.routes')
//seteo los recursos estáticos
app.use(express.static(path.join(__dirname,'..', "public")))


//seteo el motor de plantillas
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use('/', indexRoutes)
app.use('/products', productsRoutes)
app.use('/users', usersRoutes)
app.use('/login', usersRoutes)


app.get("/products-detail", (req,res) => res.sendFile(path.join(__dirname, "views", "products-detail.html")))

app.get("/admin", (req,res) => res.sendFile(path.join(__dirname, "views", "admin.html")))

app.get("/products", (req,res) => res.sendFile(path.join(__dirname, "views", "products.html")))



app.listen(PORT, () => console.log("Servidor corriendo en http://localhost:" + PORT));