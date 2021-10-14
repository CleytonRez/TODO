1 - Criar projeto com "npm init" na pasta do projeto.

2 - Configurar o script adicionando "start: 'node src/index.js'" ao package.json para ler o index.js.

3 - Instalar as dependencias do Babel e o Express : " npm instal @babel/core etc. " 

    "@babel/core": "^7.15.8",
    "@babel/node": "^7.15.8",
    "@babel/plugin-proposal-class-properties": "^7.14.5",
    "@babel/preset-env": "^7.15.8",
    "express":

4 - Criar o arquivo ".babelrc".

5- Importe a dependencia Express no index.js. " import express from "express" "

6 - Criar pasta "models" no "src", arquivo "todolist.js"

7 - Exporta o objeto todoList  

    export const todoList = [{
        id: "exemplo",
        text: "ola mundo.",
        isChecked: true
    }]

8- Importe o arquivo no index.js. "import todoList from "./models/todoList""

9- Cria um get que responde a lista do todoList.

10- Cria um get que pega um ID como parametro, varre a lista procurando as informacoes atravez do ID dado. 
Se for encontrado o ID ele retorna as informacoes se nao ele retorna em branco. 
