import fs from "fs";
import { parse } from "path";
import util from "util";

const path = "./src/models/todoList.json"

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

export const readList = async () => {
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

export const createList = async (listCreate) => {
    try {

        // Abre lista do Models.
        const file = await readFile(path, "utf8");
        console.log("FILE: ", file)

        // Faz o PARSE
        const parseJSON = JSON.parse(file)

        // dataJSON contendo parseJSON
        const dataJSON = parseJSON;

        // Adicionar cliente na lista -  Cria ID aleatorio .
        listCreate.id = Math.random()
        console.log(listCreate)

        // Adicionou as informaçoes no JSON
        dataJSON.data.push(listCreate);

        // Fazer o .Stringify do objeto.
        const jsonStringify = JSON.stringify(dataJSON)
        console.log(jsonStringify)

        // Subescrever o arquivo clients.json.
        writeFile(path, jsonStringify);


    } catch (e) {
        console.log(e.message)
    }
}

export const updateList = async (listUpdate) => {
    try {

        // Abre lista do Models.
        const file = await readFile(path, "utf8");
        console.log("FILE: ", file)
        console.log("LISTUPDATE: ", listUpdate)

        // Faz o PARSE
        const parseJSON = JSON.parse(file)

        // dataJSON contendo parseJSON
        const dataJSON = parseJSON;
        console.log("DATAJSON: ", dataJSON)

        const newList = dataJSON.data.map((text) => {
            console.log("TEXT: ", listUpdate)
            if (text.id === listUpdate.id) {
                return Object.assign({}, text, listUpdate)
            }
            return text;

        })

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

export const deleteList = async (listDelete) => {
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

        dataJSON.data.forEach((text) => {
            if (text.id !== listDelete)
                newList.push(text)
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
        return listDelete.id

    } catch (e) {
        console.log(e.message)
    }
}