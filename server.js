//Complementando o curso da Udemy:
//https://www.tabnews.com.br/anliben/publicar-angular-no-railway
//https://stackoverflow.com/questions/18864677/what-is-process-env-port-in-node-js


const bodyParser = require('body-parser');
const port = process.env.PORT || 3000; 
const express = require('express'); 
const app = express();                              

const allowCors = (req,res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // colocar os dominios permitidos | ex: 127.0.0.1:3000
    
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials, X-Access-Token, X-Key");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS, PATCH");
    
    res.header("Access-Control-Allow-Credentials", "true");

    next();
}


app.use(allowCors);
app.use(bodyParser.json( { limit: "10mb"}));
app.use(bodyParser.urlencoded({ extended : true }));
app.use(express.static(__dirname, + "/dist/desafio_unidac"));

app.get('*',(req,res) => {
    res.sendFile(__dirname + "/dist/desafio_unidac/index.html");
});

app.listen(port, async() => {
    console.log(`API Gateway rodando na porta ${port}`);
});