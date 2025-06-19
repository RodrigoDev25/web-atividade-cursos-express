const express = require('express')
const app = express()
app.use(express.json())
const port = 3003

let listaCursos = ["TI"]


app.get('/cursos', (req, res) => {
    res.json({ listaCursos })
})

app.get('/cursos/:posicao', (req, res) => {
    const posicaoCurso = req.params.posicao
    const nomeCurso = listaCursos[posicaoCurso]

    res.json({
        mensagem: "Curso encontrado",
        nome: nomeCurso
    })
})

app.post('/cursos/', (req, res) => {
    const nomeCurso = req.body.nome
    listaCursos.push(nomeCurso)
    res.json({
        mensagem: "Curso adicionado com sucesso",
        curso: nomeCurso
    })
})


app.put('/cursos/posicao', (req, res) => {
    const novoCurso = req.body.novo_curso
    const posicaoCursoDelete = req.params.posicao
    listaCursos[posicaoCursoDelete] = novoCurso

    Response.json({

        "Sucesso": true,
        "mensagem": "Atualizado",
        "curso": "novoCurso"
    })



})


app.delete('/cursos/:posicao', (req, res) => {
    const posicaoCurso = req.params.posicao
    const nomeCurso = listaCursos[posicaoCurso]
    listaCursos.splice(posicaoCurso, 1)

    res.json({
        mensagem: "Curso removido com sucesso",
        nome: nomeCurso
    })
})





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})