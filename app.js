const express = require('express');
const bodyParser = require('body-parser');
const categoryRoutes = require('./routes/categoryRoute')
const productRoutes = require('./routes/productRoute')

const app=express();

app.use(bodyParser.json());

app.use('api/category',categoryRoutes);
app.use('api/product',productRoutes);

app.listen(3000, ()=>{
    console.log('Servidor corriendo por puerto 300')
})