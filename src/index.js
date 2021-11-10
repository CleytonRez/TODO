// Importa express do arquivo express.
import express from "express"
import { readTODO, createTODO, updateTODO, deleteTODO } from "./services/services"
import todoController from "./controllers/todoController";


//variavel que recebe express
const app = express();
app.use(express.json());

todoController(app)

// ---------------------------- CRUD ---------------------------//

// readTODO()

// createTODO(
//   {
//     "text": "Tomar Café da Manha ",
//     "isChecked": false
// }
//)

// updateTODO(
//     {
//         "id": "1",
//         "text": "Almoçar"
//     }
// );

// deleteTODO(
//     {
//         "id": "1"
//     }
// )

// ---------------------------- Antiga Programacao ---------------------------//

// // read all
// app.get('/todo', function (req, res) {
//     res.json({
//         response: todoList
//     })
// })
// // readbyid
// app.get('/todo/:id', function (request, response) {

//     // Pega o ID do path.params.
//     const id = request.params.id

//     // Varre a lista de TODO e RETORNA O OBJETO CASO ENCONTRE.
//     const todo = todoList.find((obj) => {
//         return obj._id === id
//     })
//     // Responde para o cliente o OBJ do ID procurado.
//     response.json({
//         response: todo
//     })

// })
// // Metodo de requisicao HTTP que inclue um elemento/s (POST)
// app.post('/todo', (request, response) => {

//     // variavel que recebe o body
//     const body = request.body

//     // variavel que recebe um numero aleatorio como id.
//     const id = Math.random()

//     //  Variavel Objeto que preenche as chaves com as informacoes adicionadas.
//     const todo = {
//         _id: id,
//         text: body.text,
//         isChecked: body.isChecked
//     }
//     // Adiciona informacoes a lista "todoList".
//     todoList.push(todo);
//     console.log(todoList)

//     // Status de retorno de resposta da funcao.
//     response.status(201).end()
// });

// // Metodo de requisicao HTTP que substitui/atualiza as informacoes ja adicionadas. ( UPDATE)
// app.put('/todo/:id', (request, response) => {
//     console.log(request.params)

//     // Variavel que recebe o ID por parametro.
//     const id = request.params.id

//     // Variavel que recebe body.
//     const body = request.body

//     // Funcao que mapeia a lista buscando o ID passado como parametro.
//     const newList = todoList.map((obj) => {
//         console.log(obj)

//         // Se o ID passado por parametro for igual a algum ID da lista, as informacoes sao atualizadas. 
//         if (obj._id === id) {
//             console.log(Object.assign({}, obj, body))

//             // Retorna um novo objeto concatenado as propriedades dos objetos fornecidos.
//             return Object.assign({}, obj, body)
//         }
//         // Retorna o objeto.
//         return obj;
//     });

//     console.log(newList)

//     // Substitui as informacoes da lista original pelas da nova (atualizacao).
//     todoList = newList

//     // Responde com o id.
//     response.json({
//         response: id
//     });
// })

// // Metodo de requisicao HTTP que deleta informacoes da lista.
// app.delete('/todo/:id', (request, response) => {

//     // Variavel que recebe o ID como Parametro.
//     const id = request.params.id

//     // Nova Lista criada vazia.
//     const newList = []

//     // Funcao que varre a lista.
//     todoList.forEach((obj) => {
//         console.log(obj)

//         // Se o ID da lista for diferente do ID passado por parametro. Adiciona na nova lista. 
//         if (obj._id !== id) {
//             // Adiciona as informacoes na nova lista.
//             newList.push(obj)

//         }
//     })
//     console.log(newList)

//     // Substitui a Lista antiga pela atual.
//     todoList = newList

//     // Status de retorno da resposta da funcao.
//     response.status(201).end()
// })
// console.log('Serve On')

// Adiciona a aplicacao na porta 3000 (neste caso). localhost:3000 
app.listen(3000)

