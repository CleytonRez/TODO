import express from "express"
import todoList from "./models/todoList";
// console.log(express)
// console.log("Hello Word!")


const app = express();
app.use(express.json());

// read all
app.get('/todo', function (req, res) {
    res.json({
        response: todoList
    })
})
// readbyid
app.get('/todo/:id', function (request, response) {
    // Pega o ID do path.params.
    const id = request.params.id
    // Varre a lista de TODO e RETORNA O OBJETO CASO ENCONTRE.
    const todo = todoList.find((obj) => {
        return obj._id === id
    })
    // Responde para o cliente o OBJ do ID procurado.
    response.json({
        response: todo
    })

})
app.post('/todo', (request, response) => {
    const body = request.body
    console.log(body)
    const id = Math.random()
    const todo = {
        _id: id,
        text: body.text,
        isChecked: body.isChecked
    }
    todoList.push(todo);
    console.log(todoList)

    response.status(201).end()
})

app.put('/todo/:id', (response, request) => {
    const id = request.params.id
    const body = request.body
    const newList = todoList.map((obj) => {
        if (todoList.id === id) {
            return Object.assign({}, obj, body)
        }
        return obj;
    })
    todoList = newList
    response.json({
        response: id
    })
})

console.log('Serve On')
app.listen(3000)