const perguntas = [
    {
        pergunta: "Qual é o operador usado para comparar se dois valores são iguais em valor e tipo em JavaScript?",
        respostas: [
            "==",
            "===",
            "=",
            "!=",
        ],
        correta: 1
    },
    {
        pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript que não pode ser reatribuída?",
        respostas: [
            "var",
            "let",
            "const",
            "variable",
        ],
        correta: 2
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "pop()",
            "remove()",
            "delete()",
            "splice()",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função usada para converter uma string em um número em JavaScript?",
        respostas: [
            "parseString()",
            "toInt()",
            "Number()",
            "convertToInt()",
        ],
        correta: 2
    },
    {
        pergunta: "O que o método 'forEach()' faz em JavaScript?",
        respostas: [
            "Executa uma função para cada elemento em um array.",
            "Adiciona um elemento ao final de um array.",
            "Remove um elemento específico de um array.",
            "Filtra os elementos de um array com base em uma condição fornecida.",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o resultado da expressão '2' + 2 em JavaScript?",
        respostas: [
            "22",
            "4",
            "Erro",
            "6",
        ],
        correta: 0
    },
    {
        pergunta: "O que é o IIFE (Immediately Invoked Function Expression) em JavaScript?",
        respostas: [
            "Um padrão de design para criar funções em JavaScript.",
            "Uma função que é invocada somente quando outra função é chamada.",
            "Uma função que é definida e executada imediatamente após ser declarada.",
            "Um tipo de função de seta em JavaScript.",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o método usado para concatenar dois ou mais arrays em JavaScript?",
        respostas: [
            "concat()",
            "join()",
            "merge()",
            "splice()",
        ],
        correta: 0
    },
    {
        pergunta: "O que é o hoisting em JavaScript?",
        respostas: [
            "Um método de classificação de variáveis em JavaScript.",
            "Um tipo de erro de sintaxe.",
            "Um mecanismo em JavaScript que eleva declarações de variáveis e funções para o topo do escopo.",
            "Uma função nativa em JavaScript.",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a finalidade do método 'filter()' em JavaScript?",
        respostas: [
            "Iterar sobre os elementos de um array e executar uma função em cada elemento, retornando um novo array com os resultados.",
            "Adicionar um novo elemento ao final de um array.",
            "Remover um elemento específico de um array.",
            "Filtrar os elementos de um array com base em uma condição fornecida.",
        ],
        correta: 3
    },
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

            let question = document.getElementsByName(`pergunta-${perguntas.indexOf(item)}`)
            for (let i = 0; i < question.length; i++) {
                question[i].setAttribute('disabled', true)

            } 
            const span = dt.querySelector("span")
            const estaCorreta = event.target.value == item.correta
            corretas.delete(item)
            span.style.borderRadius = '4px'
            if (estaCorreta) {
                span.style.backgroundColor = 'green'
                corretas.add(item)
            } else{                
                span.style.backgroundColor = 'red'
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
