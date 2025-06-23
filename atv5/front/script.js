const url = 'http://localhost:3000/alunos';

async function buscarAlunos() {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Erro na rede: ${res.status}`);
    }
    
    const alunos = await res.json();

    const table = document.createElement("table")
        let sum = 0
        alunos.forEach(
        (aluno) => {
            const linha = table.insertRow()
            const celNome = linha.insertCell()
            const celCurso = linha.insertCell()
            const celIra = linha.insertCell()

            celNome.textContent = aluno.nome
            celCurso.textContent = aluno.celCurso
            celIra.textContent = aluno.IRA

            sum += aluno.IRA
        }
        )

        const linhaIra = table.insertRow()
        const cellMedia = linhaIra.insertCell();
        const celIra = linhaIra.insertCell(); 

        cellMedia.textContent = 'Média'
        celIra.textContent = (sum / alunos.length).toFixed(2)

        const divTable = document.getElementById("table-container")
        divTable.appendChild(table)


  } catch (error) {
    console.error("Erro:", error);
    document.getElementById('msgErro').innerHTML = 'Falha ao carregar os dados';
  }
}

buscarAlunos();