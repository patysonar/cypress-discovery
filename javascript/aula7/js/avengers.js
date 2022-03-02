////----**** Aula Javascript externo - usar o index7.html****----////

//// API - exemplo
var avengers = ['Tony Stack', 'Clint Barton', 'Natasha Romanoff', 'Steve Roger', 'Bruce Banner','Scot Lang' ] // Array

function listaVingadores() {

    var ul = document.getElementById('avengers')
    ul.innerHTML = ''

    avengers.forEach(function (a) {

        var li = document.createElement('li')
        var text = document.createTextNode(a)
        li.appendChild(text)
        ul.appendChild(li)

    })
}
