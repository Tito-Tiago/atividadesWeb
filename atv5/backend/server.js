
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const alunos = [
  {
    nome: "Maria Ana",
    curso: "SI",
    IRA: 7
  },
  {
    nome: "José Marcelo",
    curso: "ES",
    IRA: 4.5
  },
  {
    nome: "Francisca Ana",
    curso: "DD",
    IRA: 9.7
  }
];

app.get('/alunos', (req, res) => {
  res.json(alunos);
});

app.listen(3000, () => {
  console.log("Servidor rodando");
});