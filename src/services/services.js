import fs from "fs";
import { parse } from "path";
import util from "util";

const path = "./src/models/todoList.json"

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

export const readTODO = async () => {
    console.log("LENDO READLIST")
    try {
        // Abre lista do Models.
        const file = await readFile(path, "utf8");
        console.log("FILE: ", file)

        // Faz o PARSE
        const parseJSON = JSON.parse(file)

        // dataJSON contendo parseJSON
        const dataJSON = parseJSON;
        console.log("DATAJSON: ", dataJSON.data)

        return dataJSON.data

    } catch (e) {
        console.log(e.message)
    }
}

export const createTODO = async (todoCreate) => {
    try {

        // Abre lista do Models.
        const file = await readFile(path, "utf8");
        console.log("FILE: ", file)

        // Faz o PARSE
        const parseJSON = JSON.parse(file)

        // dataJSON contendo parseJSON
        const dataJSON = parseJSON;

        // Adicionar cliente na lista -  Cria ID aleatorio .
        todoCreate.id = Math.random()
        console.log(todoCreate)

        // Adicionou as informaçoes no JSON
        dataJSON.data.push(todoCreate);

        // Fazer o .Stringify do objeto.
        const jsonStringify = JSON.stringify(dataJSON)
        console.log(jsonStringify)

        // Subescrever o arquivo clients.json.
        writeFile(path, jsonStringify);


    } catch (e) {
        console.log(e.message)
    }
}

export const updateTODO = async (todoUpdate) => {
    try {

        // Abre lista do Models.
        const file = await readFile(path, "utf8");

        // Faz o PARSE
        const parseJSON = JSON.parse(file)

        // dataJSON contendo parseJSON
        const dataJSON = parseJSON;

        const newList = dataJSON.data.map((todo) => {
            if (todo.id === todoUpdate.id) {
                return Object.assign({}, todo, todoUpdate)
            }
            return todo;

        })
        console.log("NEWLIST: ", newList)
        // Fazer o .Stringify do objeto.
        const jsonStringify = JSON.stringify(
            {
                data: newList
            }
        )
        console.log(jsonStringify)

        // Subescrever o arquivo clients.json.
        writeFile(path, jsonStringify);

    } catch (e) {
        console.log(e.message)
    }
}

export const deleteTODO = async (todoDelete) => {
    try {
        // Abre lista do Models.
        const file = await readFile(path, "utf8");
        console.log("FILE: ", file)

        // Faz o PARSE
        const parseJSON = JSON.parse(file)

        // dataJSON contendo parseJSON
        const dataJSON = parseJSON;
        console.log("DATAJSON: ", dataJSON)

        const newList = []

        dataJSON.data.forEach((todo) => {
            if (todo.id !== todoDelete)
                newList.push(todo)
        });

        console.log("NEWLIST: ", newList)

        // Fazer o .Stringfy do objeto.
        const jsonStringify = JSON.stringify(
            {
                data: newList
            }
        )
        console.log(jsonStringify);

        // Subescreve o OBJ principal pela nova lista.
        writeFile(path, jsonStringify)

        // Retorna o ID.
        return todoDelete.id

    } catch (e) {
        console.log(e.message)
    }
}