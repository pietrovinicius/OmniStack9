const express = require('express');
const mongoose = require('mongoose');
const cors =  require('cors');
const path =  require('path');



const routes = require ('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack9-tpghs.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

//rotas
// req.query = Acessa querys (para filtros)
// req.params = Acessa params (para edição e delete)
// req.body = Acessar todo corpo da requisição (para criação e edição de registros)

//CORS sem configuração permite que qualquer app acesse esta api
app.use(cors());
app.use(express.json());
app.use('/files' , express.static(path.resolve(__dirname, '..' , 'uploads')));
app.use(routes);


//porta para acessar a aplicação
app.listen(3333);