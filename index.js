const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({extended: false}));
app.use('/contato', express.static(__dirname + '/public/contato'));

app.post('/contato', (req, res, next) => {
  console.log("Nome: " + req.body.nome);
  console.log("E-mail: " + req.body.email);
  console.log("Estado: " + req.body.estado);
  console.log("Comentario: " + req.body.comentario);

  res.redirect('/');
  //next();
});

app.get('/', (req, res) => {
  res.send('Dados enviados com sucesso!');
});

app.get('*', (req, res) => {
  res.send("404 - Página não encontrada");
});

app.listen(3000, () => console.log("Servidor  escutando na porta 3000"))
