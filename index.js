const perguntas = [
    {
        pergunta: "Qual é a palavra-chave utilizada para declarar uma variável em JavaScript?",
        respostas: [
            "var",
            "let",
            "const",
        ],
        correta: 2
    },
    {
        pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: [
            "push()",
            "pop()",
            "shift()",
        ],
        correta: 0
    },
    {
        pergunta: "Qual símbolo é usado para comentários de uma linha em JavaScript?",
        respostas: [
            "//",
            "/*",
            "<!--",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o operador lógico 'E' em JavaScript?",
        respostas: [
            "&&",
            "||",
            "!",
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é usado para converter uma string em um número inteiro em JavaScript?",
        respostas: [
            "parseInt()",
            "parseFloat()",
            "toFixed()",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a estrutura de controle de fluxo usada para executar um bloco de código se uma condição for verdadeira?",
        respostas: [
            "if...else",
            "for",
            "switch",
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "pop()",
            "push()",
            "shift()",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o resultado da expressão '5' + 2 em JavaScript?",
        respostas: [
            "52",
            "7",
            "Error",
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é usado para juntar os elementos de um array em uma string em JavaScript?",
        respostas: [
            "join()",
            "concat()",
            "splice()",
        ],
        correta: 0
    },
    {
        pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
        respostas: [
            "console.print()",
            "print()",
            "console.log()",
        ],
        correta: 2
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')
const corretas = new Set()
const totalDePerguntas = perguntas.length

const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = `${corretas.size} de ${totalDePerguntas}`

//Loop pra cada pergunta
for (const item of perguntas) {

    //clona o template, seleciona o elemento h3 e depois insere o item.pergunta nele.
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    //loop pra cada resposta
    for (let resposta of item.respostas) {
        //selecionar e clona a tag dt que esta dentro de dl, 
        //depois seleciona o span e seta o valor dele para 
        //cada uma das respostas da pergunta.
        const dt = quizItem.querySelector("dl dt").cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }
            mostrarTotal.textContent = `${corretas.size} de ${totalDePerguntas}`
        }



        quizItem.querySelector('dl').appendChild(dt)
    }

    //remove a 1ª pergunta, a que ja esta no html.
    quizItem.querySelector('dl dt').remove()



    //Coloca a pergunta na tela.
    quiz.appendChild(quizItem)
}
