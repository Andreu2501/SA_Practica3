const express = require('express');
const app = express();
const l_axios = require("axios")
var body = require('body-parser').json();
const puerto = 8003;
const host = 'localhost';

app.listen(puerto, host);
console.log(`Running on http://${host}:${puerto}`);

app.get('/', (req, res)=> {
    res.send("Orquestador de Servicios")
});


app.post('/Restaurante/PostOrden',body,(req,res)=>{
    var orden = req.body.id
    l_axios.post('http://localhost:8001/postorder',{'id':orden})
    res.send("Orden de restaurante")   
});


app.get('/Restaurante/GetEstado/:order',body, (req,res)=>{
    var order = req.params.order
    axios.get('http://localhost:8001/GetEstado/'+order)
        .then((response)=>{
            res.send(response['data'])
        })
        .catch((error)=> {
            res.send(error)
        })
        .then(function() {
        });
});

app.get('/Repartidor/GetEstado/', (req,res)=>{
    var order = req.params.order
    l_axios.get('http://localhost:8002/GetEstado/')
    .then(function(response){
        res.send(response['data'])
    });
});

app.post('/Repartidor/Orden',body,(req,res)=>{
    var order = req.body.id
    l_axios.post('http://localhost:8002/Orden')
    res.send("Orden asignada a un repartidor")
});


