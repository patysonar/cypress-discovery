// este codigo monta uma api

const express = require('express')  // Bibioteca express
const app = express()   // instancia

app.get('/', function (req, res) {
    res.json({ message: 'Hello cypress discovery' })
})

app.get('/avengers', function (req, res) {
    var avengers = ['Tony Stack', 'Clint Barton', 'Natasha Romanoff', 'Steve Roger', 'Bruce Banner', 'Scot Lang'] // Array
    return res.json({ data: avengers })
})

app.get('/cnh', function (req, res) {
    const idade = req.query.idade

    if (!idade) {  // validação  de campo obrigatório
        return res.json({ message: 'Idade é um campo obrigatório.' })

    }

    var idadeNum = parseInt(idade)


    if (idadeNum >= 18) {     //Controle de fluxo
        return res.json({ message: 'Ok, você pode tirar sua CNH.' })
    } else if (idadeNum > 4) {
        return res.json({ message: 'Você é menor de idade, por enquanto sugiro andar de bike.' })
    } else {
        return res.json({ message: 'Melhor você tomar leite....' })
    }

})

app.listen(3000)



//Instalar o Thunder Client - funciona como insominia ou postman no visual studio code.
// Para dá satar no servidor usar: npx nodemon server.js