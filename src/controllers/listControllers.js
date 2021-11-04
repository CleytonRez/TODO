import { request, response } from "express";
import { createList, deleteList, readList, updateList } from "../services/services";

export default (app) => {
    if (app) {
        app.get("/todo", async (request, response) => {
            const data = {
                // Resposta que inicia funcao "readList".

                response: await readList()
            }
            // Retorna as informacoes para o usuario.
            response.json(data);
        })

        // Funcao que cria novas informacoes para o Objeto.
        app.post("/todo", async (request, response) => {

            // Obtem dados do body.
            const body = request.body
            try {
                // Variavel que inicia funcao de criacao de List.
                const idCreateList = await createList(body);

                // Retornar 201 como status e ...
                response.status(201).json(
                    {
                        // ... Seta as informacoes da funcao.
                        response: idCreateList
                    }
                )

            } catch (e) {
                console.log(e)
                response.status(500).send(e.message)
            };
        });

        // Funcao que Altera/Update das informacoes no Objeto.
        app.put("/todo/:id", async (request, response) => {
            // Obtem dados do body.
            const body = request.body

            // Obtem id do paramentro.
            const id = request.params.id;

            // Converte a String para Number.
            body.id = Number(id)

            try {
                // Chama funcao de Update "updateList"
                const idUpdateList = await updateList(body);
                // Retornar 201 como status e ...
                response.status(201).json(
                    {
                        // ... Seta as informacoes da funcao.
                        response: idUpdateList
                    }
                )
            } catch (e) {
                console.log(e)
                response.status(500).send(e.message)
            };

        });

        // Funcao que Deleta algum (client) conjunto de informacoes no Objeto.
        app.delete("/todo/:id", async (request, response) => {

            // Variavel que pega e converte o ID do parametro para NUMBER.
            const id = Number(request.params.id)

            // Variavel que inicia a funcao "deleteclient".
            const idDeleteList = await deleteList(id);
            // Retornar 201 como status e ...
            response.status(201).json(
                {
                    // ... Seta as informacoes da funcao.
                    response: idDeleteList
                }
            )
        })


    }

}
