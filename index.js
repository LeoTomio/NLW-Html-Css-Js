const perguntas = [
    {
        pergunta: "Qual personagem da série tem um medo irracional de animais empalhados?",
        respostas: [
            "Ross",
            "Chandler",
            "Phoebe",
            "Monica",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o emprego de Chandler Bing?",
        respostas: [
            "Publicitário",
            "Advogado",
            "Analista financeiro",
            "Transponster",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o nome do café onde os amigos sempre se encontram?",
        respostas: [
            "Central Perk",
            "Perk Central",
            "Central Coffee",
            "Perk Place",
        ],
        correta: 0
    },
    {
        pergunta: "O que é o 'Unagi', de acordo com Ross?",
        respostas: [
            "Uma arte marcial",
            "Um estado de relaxamento",
            "Um tipo de sushi",
            "Um tipo de filosofia zen",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o sobrenome do personagem Ross?",
        respostas: [
            "Green",
            "Geller",
            "Buffay",
            "Bing",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o emprego de Joey Tribbiani?",
        respostas: [
            "Ator",
            "Médico",
            "Professor",
            "Chef",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o nome da irmã gêmea de Phoebe?",
        respostas: [
            "Ursula",
            "Rachel",
            "Emily",
            "Janice",
        ],
        correta: 0
    },
    {
        pergunta: "O que Monica Geller faz para viver?",
        respostas: [
            "Chef",
            "Advogada",
            "Jornalista",
            "Médica",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o animal de estimação exótico de Ross?",
        respostas: [
            "Gato",
            "Cachorro",
            "Macaco",
            "Pássaro",
        ],
        correta: 2
    },
    {
        pergunta: "Quem é o último a descobrir sobre o relacionamento de Chandler e Monica?",
        respostas: [
            "Phoebe",
            "Rachel",
            "Ross",
            "Joey",
        ],
        correta: 1
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
