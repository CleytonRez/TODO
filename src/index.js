import express from "express"
import todoList from "./models/todolist"
console.log(express)
console.log("Hello Word!")


const app = express();

app.get('/todo', function (req, res) {
    res.json({
        response: todoList
    })
})

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

app.listen(3000)