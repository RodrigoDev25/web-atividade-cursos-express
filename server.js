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





app.put('/cursos/:id', (req, res) => {
    res.send('Hello World!')
})


//_____________________________________________________
app.delete('/cursos/:id', (req, res) => {
    res.send('Hello World!')
})





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})