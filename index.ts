
import moment from 'moment';
import 'moment/locale/pt-br.js';

let value = 180000

let newBValue = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
console.log(newBValue)

let test = {
    id: "0722990f-c38c-4e4c-a65f-714eba8d8012",
    comment: "teste",
    createdAt: "2023-03-04T18:19:22.631Z",
    updatedAt: "0001-03-07T22:42:54.987Z",
    users: {
        id: "08ba9abe-a171-4171-87e1-20a602ef4283",
        name: "Fernando Henrique",
        profileImage: null,
        email: "fernando@kenzie.com",
        cpf: "02898932167",
        phone: "62981540735",
        birthdate: "1993-11-11",
        description: "Vendedor há mais de 10 anos de experiencia no mercado pronto para te atender",
        typeUser: "seller",
        createdAt: "2023-03-04T18:04:06.216Z",
        updatedAt: "2023-03-04T18:04:06.216Z"
    }
}


// moment.locale('pt-br');

const updatedTime = moment(test.updatedAt).fromNow();
console.log(updatedTime)