
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const alunos = [
  // {
  //   matricula: 556322,
  //   nome: "Maria Ana",
  //   IRA: 7
  // },
  // {
  // },
  // {
  // }
];

app.get('/alunos', 
  (req, res) => {
    res.json(alunos);
  }
);

app.post('/alunos',
  (req, res) => {
    const novoAluno = req.body
    alunos.push(novoAluno);
    res.status(201).json(novoAluno);
  }
);

app.patch('/alunos', 
  (req, res) => {
    const novoAluno = req.body
    indexAlunoExiste = alunos.findIndex(aluno => novoAluno.matricula === aluno.matricula)

    alunos[indexAlunoExiste] = novoAluno
  }
)

app.delete('/alunos', 
  (req, res) => {
    const aluno = req.body
    indexAlunoExiste = alunos.findIndex(aluno => novoAluno.matricula === aluno.matricula)

    alunos[indexAlunoExiste] = novoAluno
  }
)

app.listen(3000, 
  () => {
    console.log("Servidor rodando");
  }
); 