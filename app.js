const express = require('express');
const homeController = require('./controllers/homeController');

const app = express();

app.listen(3000,()=>console.log("El servidor esta funcionando en el puerto 3000"))

const homeRoute = require('./routes/home');
const sucursalesRoute = require('./routes/sucursales');
const autosRouter = require('./routes/autos');

app.use('/',homeRoute);
app.use('/sucursales',sucursalesRoute);
app.use('/autos',autosRouter);