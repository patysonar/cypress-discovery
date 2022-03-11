// Aula -> Factory e Faker com dados e CPF dinâmicos 
// npm install faker@5.5.3 --save-dev -> Biblioteca para dados dinamicos npm test subir a interface do cypress
// npm install gerador-validador-cpf --save-dev -> biblioteca gerador de CPF


var faker = require('faker')
var cpf = require ('gerador-validador-cpf')

export default {

    deliver: function () {  // Caminho feliz da massa de teste

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName() 

        var data = {   //Objeto java script com mesma representação do json
            name: `${firstName} ${lastName}`, //Concatenação das info -  Nome com o ultimo nome se atentar a aspa que é invertida, não é a simples
           // name:`${faker.name.firstName()} ${faker.name.lastName()}`, // usei desta forma e funcionou  a de cima não funcionou.
            cpf: cpf.generate(),
            email: faker.internet.email(firstName), // Email faker vinculado ao nome do usuario
            whatsapp: '11999999999',
            address: {
                postalcode: '40450330',
                street: 'Travessa Polivalente',
                number: '1B',
                details: 'Casa Térreo',
                district: 'Uruguai',
                city_state: 'Salvador/BA'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}