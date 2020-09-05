const express = require('express');
const app = express();
const l_axios = require("axios");
var bodyp = require('body-parser').json();
const puerto=8002;
const host='localhost';
app.listen(puerto, host);
console.log(`Servidor del Repartidor: http://${host}:${puerto}`);

app.get('/', (req, res)=> {

    res.send("Servidor Repartidor");
});
 /**Recibir pedido del restaurante ***/
app.post('/Orden', (req,res)=>{
    var randomNombre = Math.floor(Math.random() * (3-1)+1);
    var nombre;
    if(randomNombre==1)
    {
        nombre="Pedro Juarez";
        var descripcion = "Se recibio satisfactoriamente la orden por el repartidor:"+nombre;
    }else if(randomNombre==2)
    {
        nombre="Samuel Merengues";
        var descripcion = "Se recibio satisfactoriamente la orden por el repartidor:"+nombre;
    }else
    {
        nombre="Antonio Vasquez";
        var descripcion = "Se recibio satisfactoriamente la orden por el repartidor:"+nombre;
    }
    console.log(descripcion);
    res.send(descripcion);
});

/**Estado del pedido al repartidor*/
app.get('/GetEstado',(req,res)=>{
    var estado = Math.floor(Math.random() * (2-1)+1);
    if(estado==1){
        detalle_estado = "Orden: en camino";
    }else{
        detalle_estado = "Orden: Entregada";
    }
    res.send(detalle_estado);
});

/**Marcar como entregado** */
app.post('/PostEntregado',(req,res)=>{
    var detalle_estado = "La orden ha sido entregada exitosamente";
    res.send(detalle_estado);
});