const perguntas = [
    {
      pergunta: "Qual é a função principal do JavaScript?",
      resposta: [
        "Manipular dados em bancos de dados",
        "Criar layouts de página web",
        "Adicionar interatividade e dinamismo às páginas web",
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma variável em JavaScript?",
      resposta: [
        "Um elemento de design de página web",
        "Um tipo de dado primitivo",
        "Um contêiner para armazenar valores de dados",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
      resposta: [
        "let myVariable = 10;",
        "variable myVariable = 10;",
        "myVariable := 10;",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para imprimir uma mensagem no console do navegador em JavaScript?",
      resposta: [
        "console.out('Hello World');",
        "log.console('Hello World');",
        "console.log('Hello World');",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador de atribuição em JavaScript?",
      resposta: [
        "+",
        "==",
        "=",
      ],
      correta: 2
    },
    {
      pergunta: "Qual função é usada para converter uma string em um número inteiro em JavaScript?",
      resposta: [
        "parseInt()",
        "stringToInteger()",
        "toInteger()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a sintaxe correta para um loop 'for' em JavaScript?",
      resposta: [
        "for (i = 0; i < 5; i++)",
        "loop (i = 0; i < 5; i++)",
        "for (i = 0; i < 5)",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento a um array em JavaScript?",
      resposta: [
        "addElement()",
        "push()",
        "append()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador lógico 'E' em JavaScript?",
      resposta: [
        "&&",
        "||",
        "!",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão '5' + 2 em JavaScript?",
      resposta: [
        "52",
        "7",
        "Error",
      ],
      correta: 0
    },
  ];
   
   
const quiz = document.querySelector("#quiz");
const template = document.querySelector("template");
const corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector("#acertos span");

mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;

for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true);

    quizItem.querySelector("h3").textContent = item.pergunta;

    for (const resposta of item.resposta) {
        const dt = quizItem.querySelector("dl dt").cloneNode(true);

        dt.querySelector("span").textContent = resposta;

        dt.querySelector("input").setAttribute("name", "pergunta - " + perguntas.indexOf(item));
        dt.querySelector("input").value = item.resposta.indexOf(resposta);

        dt.querySelector("input").onchange = (event) => {
            const estaCorreta = event.target.value == item.correta;

            corretas.delete(item);

            if (estaCorreta) {
                corretas.add(item);
            }

            mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;
        };

        quizItem.querySelector("dl").appendChild(dt);
    }

    quizItem.querySelector("dl dt").remove();

    quiz.appendChild(quizItem);
}
