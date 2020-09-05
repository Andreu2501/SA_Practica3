const express = require('express');
const app = express();
const l_axios = require("axios");
var body = require('body-parser').json();
const puerto=8001;
const host='localhost';
app.listen(puerto, host);
console.log(`Servidor del Restaurante: http://${host}:${puerto}`);

app.get('/', (req, res)=> {

    res.send("Servidor Restaurante");
});
/**Recibir pedido del cliente */
app.post('/PostOrden',body,(req,res)=>{
    var noOrden = req.body.id;
    console.log("Tú orden ha sido recibida exitosamente");
    res.send("Tú orden ha sido recibida exitosamente");
});

/**Estado del pedido */
app.get('/GetEstado/:orden',(req,res)=>{
    var detalle_estado = "Hemos recibido la solicitud del estado de la orden";
    var estado = Math.floor(Math.random() * (2-1)+1);
    if(estado==1){
        detalle_estado = "Orden: enviada";
    }else{
        detalle_estado = "Orden: se esta cocinando";
    }
    res.send(detalle_estado);
});
/**Avisar al repartidor que ya esta llisto el pedido */
app.post('/PostAvisoRepartidor',(req,res)=>{
    var detalle_estado = "La orden: Esta lista para enviar";
    console.log(detalle_estado);
    detalle_estado = "Restaurante: La orden ya fue asignada a un repartidor ";
    l_axios.post('http://localhost:8003/Repartidor/Orden');
    res.json(detalle_estado);
    
});