const express = require('express');
//const bodyParser = require('body-parser');
const cors = require('cors');

//instanciar o servidor
const app = express();
const port = 3001;

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

function naoImplementado(req, res){

        res.status(501).json({ erro: 'Nao implementado.' });
}

//get, post, put, delete
//listar TODAS as tarefas - get
app.get('/gerenciador-tarefas', naoImplementado);

//listar UMA tarefa com ID - get
app.get('/gerenciador-tarefas/:id', naoImplementado);

//cadastrar uma tarefa - post
app.post('/gerenciador-tarefas', naoImplementado);

//atualizar uma tarefa - put
app.put('/gerenciador-tarefas/:id', naoImplementado);

//remover uma tarefa - delete
app.delete('/gerenciador-tarefas/:id', naoImplementado);

//concluir uma tarefa - patch
app.put('/gerenciador-tarefas/:id/concluir', naoImplementado);


app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`));
