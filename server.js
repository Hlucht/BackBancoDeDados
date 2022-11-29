const express = require('express');

const app = express();

// const dados = require('./bd.json');

const fs = require('fs');

let dados = []
function getDados(){
    dados = JSON.parse(fs.readFileSync('./bd.json'));
}

app.get('/users', function(require, response){
   const dados = fs.readFileSync('./bd.json').toString();
   console.log(dados);
   response.send(JSON.parse(dados));
})

app.get('/users/:id', function(require,response){ /*encontrar dado unico / espera um elemento na url para o response*/
    getDados();
    const id = require.params.id;
    const usuario = dados.filter(item => item.id == id);
    response.send(usuario);
})


app.listen(3000, function(){
    console.log('Passou dessa pra melhor...')
})