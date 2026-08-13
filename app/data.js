// LogicaMente — Conteúdo pedagógico (módulos, lições e exercícios)
// Tipos de exercício: "quiz" (múltipla escolha), "vf" (verdadeiro/falso), "ordem" (ordenar blocos)

const MODULOS = [
  {
    id: "pc",
    titulo: "Pensamento Computacional",
    icone: "🧠",
    descricao: "Os 4 pilares: decomposição, padrões, abstração e algoritmos.",
    licao: `
      <h2>🧠 Pensamento Computacional</h2>
      <p><strong>Pensamento computacional</strong> é a habilidade de resolver problemas de forma
      estruturada, como um computador processaria — mas quem pensa é você! Ele se apoia em
      <strong>4 pilares</strong>:</p>
      <ul>
        <li><strong>Decomposição</strong> — quebrar um problema grande em partes menores e mais simples.</li>
        <li><strong>Reconhecimento de padrões</strong> — perceber semelhanças e repetições entre problemas.</li>
        <li><strong>Abstração</strong> — focar no que é essencial e ignorar detalhes irrelevantes.</li>
        <li><strong>Algoritmos</strong> — criar uma sequência de passos clara para resolver o problema.</li>
      </ul>
      <div class="exemplo">
        <h3>Exemplo do dia a dia 🍰</h3>
        <p>Fazer um bolo: você <em>decompõe</em> a tarefa (separar ingredientes, misturar, assar),
        <em>reconhece padrões</em> (toda receita tem preparo e cozimento), <em>abstrai</em>
        (não importa a marca da farinha) e segue um <em>algoritmo</em> (a receita, passo a passo).</p>
      </div>`,
    exercicios: [
      {
        tipo: "quiz",
        enunciado: "Quebrar o problema \"organizar uma festa\" em tarefas menores (convites, comida, música, decoração) é um exemplo de:",
        opcoes: ["Abstração", "Decomposição", "Algoritmo", "Reconhecimento de padrões"],
        resposta: 1,
        dica: "Pense no pilar que trata de dividir algo grande em partes menores.",
        explicacao: "Decomposição é exatamente isso: dividir um problema complexo em subproblemas mais fáceis de resolver."
      },
      {
        tipo: "vf",
        enunciado: "Abstração significa incluir TODOS os detalhes possíveis de um problema para não esquecer nada.",
        resposta: false,
        dica: "Abstrair é 'filtrar' informações. O que sobra depois do filtro?",
        explicacao: "Falso! Abstração é o oposto: focar apenas no essencial e ignorar os detalhes irrelevantes para o problema."
      },
      {
        tipo: "quiz",
        enunciado: "Você percebe que calcular a média de notas de CADA aluno segue sempre os mesmos passos. Que pilar você usou?",
        opcoes: ["Reconhecimento de padrões", "Decomposição", "Depuração", "Compilação"],
        resposta: 0,
        dica: "Você notou uma repetição, uma semelhança entre os casos...",
        explicacao: "Reconhecer que problemas diferentes seguem a mesma estrutura é o pilar do reconhecimento de padrões."
      },
      {
        tipo: "ordem",
        enunciado: "Ordene os passos do algoritmo \"atravessar a rua com segurança\":",
        itens: [
          "Parar na calçada",
          "Olhar para os dois lados",
          "Verificar se não vem carro",
          "Atravessar em linha reta",
          "Chegar ao outro lado"
        ],
        dica: "Pense na ordem natural: antes de atravessar, o que você precisa garantir?",
        explicacao: "Um algoritmo é uma sequência ordenada de passos: parar → olhar → verificar → atravessar → chegar."
      }
    ]
  },
  {
    id: "alg",
    titulo: "Algoritmos e Variáveis",
    icone: "📦",
    descricao: "Sequências de passos, variáveis e tipos de dados.",
    licao: `
      <h2>📦 Algoritmos e Variáveis</h2>
      <p>Um <strong>algoritmo</strong> é uma sequência finita e ordenada de passos para resolver um
      problema. Para guardar informações durante a execução, usamos <strong>variáveis</strong>:
      "caixinhas" com um nome que armazenam um valor.</p>
      <pre><code>algoritmo "media"
var
   nota1, nota2, media: real
inicio
   leia(nota1)
   leia(nota2)
   media <- (nota1 + nota2) / 2
   escreva("Média: ", media)
fimalgoritmo</code></pre>
      <p>Principais <strong>tipos de dados</strong>:</p>
      <ul>
        <li><strong>inteiro</strong> — números sem casas decimais: 10, -3, 2026</li>
        <li><strong>real</strong> — números com casas decimais: 7.5, -0.2</li>
        <li><strong>caractere</strong> (texto/string) — "Olá, mundo!"</li>
        <li><strong>lógico</strong> — verdadeiro ou falso</li>
      </ul>
      <div class="exemplo">
        <h3>Atribuição ⬅️</h3>
        <p>O símbolo <code>&lt;-</code> guarda um valor na variável: <code>idade &lt;- 20</code>
        significa "a variável idade recebe o valor 20".</p>
      </div>`,
    exercicios: [
      {
        tipo: "quiz",
        enunciado: "Qual tipo de dado é mais adequado para armazenar a ALTURA de uma pessoa (ex.: 1.75)?",
        opcoes: ["inteiro", "caractere", "real", "lógico"],
        resposta: 2,
        dica: "1.75 tem casas decimais...",
        explicacao: "Alturas têm casas decimais, então o tipo correto é o real."
      },
      {
        tipo: "quiz",
        enunciado: "Após executar: x <- 5, depois x <- x + 3, qual é o valor final de x?",
        opcoes: ["5", "3", "8", "53"],
        resposta: 2,
        dica: "Primeiro x vale 5. Depois ele recebe o próprio valor somado a 3.",
        explicacao: "x começa valendo 5; na segunda linha, x recebe 5 + 3 = 8."
      },
      {
        tipo: "vf",
        enunciado: "A variável \"nome\" recebendo o valor \"Maria\" deveria ser do tipo lógico.",
        resposta: false,
        dica: "\"Maria\" é um texto. Que tipo guarda textos?",
        explicacao: "Falso! Textos são armazenados no tipo caractere (string). O tipo lógico guarda apenas verdadeiro/falso."
      },
      {
        tipo: "ordem",
        enunciado: "Ordene as linhas para formar um algoritmo que lê dois números e mostra a soma:",
        itens: [
          "inicio",
          "leia(a)",
          "leia(b)",
          "soma <- a + b",
          "escreva(soma)"
        ],
        dica: "Primeiro o algoritmo começa, depois lê os valores, calcula e só então mostra o resultado.",
        explicacao: "A ordem lógica: iniciar → ler as entradas → processar (somar) → exibir a saída. Entrada → Processamento → Saída!"
      }
    ]
  },
  {
    id: "cond",
    titulo: "Condicionais (Se/Senão)",
    icone: "🔀",
    descricao: "Tomando decisões no algoritmo com se, senão e operadores lógicos.",
    licao: `
      <h2>🔀 Condicionais</h2>
      <p>Programas precisam <strong>tomar decisões</strong>. A estrutura <code>se / senao</code>
      executa um bloco apenas quando uma condição é verdadeira:</p>
      <pre><code>se (media >= 7) entao
   escreva("Aprovado! 🎉")
senao
   escreva("Recuperação 📚")
fimse</code></pre>
      <p><strong>Operadores de comparação:</strong> <code>&gt;</code> maior, <code>&lt;</code> menor,
      <code>&gt;=</code> maior ou igual, <code>&lt;=</code> menor ou igual, <code>=</code> igual,
      <code>&lt;&gt;</code> diferente.</p>
      <p><strong>Operadores lógicos:</strong></p>
      <ul>
        <li><code>E</code> — as duas condições precisam ser verdadeiras</li>
        <li><code>OU</code> — basta uma condição ser verdadeira</li>
        <li><code>NAO</code> — inverte o valor lógico</li>
      </ul>
      <div class="exemplo">
        <h3>Exemplo 🎢</h3>
        <p>Para entrar no brinquedo: <code>se (altura >= 1.40) E (idade >= 12)</code> — as DUAS
        condições precisam ser atendidas.</p>
      </div>`,
    exercicios: [
      {
        tipo: "quiz",
        enunciado: "Com idade = 16, o que o algoritmo escreve?\n\nse (idade >= 18) entao\n   escreva(\"Pode dirigir\")\nsenao\n   escreva(\"Não pode dirigir\")\nfimse",
        opcoes: ["Pode dirigir", "Não pode dirigir", "Nada", "Erro"],
        resposta: 1,
        dica: "16 é maior ou igual a 18?",
        explicacao: "Como 16 >= 18 é falso, o programa executa o bloco do senao."
      },
      {
        tipo: "quiz",
        enunciado: "Qual condição é VERDADEIRA quando x = 10 e y = 5?",
        opcoes: ["(x < y) E (y > 0)", "(x > y) E (y > 0)", "(x = y) OU (y > 10)", "NAO (x > y)"],
        resposta: 1,
        dica: "Avalie cada parte: x > y? y > 0?",
        explicacao: "x > y (10 > 5 ✔) e y > 0 (5 > 0 ✔). Com o operador E, ambas verdadeiras ⇒ resultado verdadeiro."
      },
      {
        tipo: "vf",
        enunciado: "No operador OU, basta UMA das condições ser verdadeira para o resultado ser verdadeiro.",
        resposta: true,
        dica: "OU é inclusivo: pense em \"aceito pagamento em dinheiro OU cartão\".",
        explicacao: "Verdadeiro! O OU só resulta falso quando TODAS as condições são falsas."
      },
      {
        tipo: "ordem",
        enunciado: "Ordene as linhas do algoritmo que verifica se um número é positivo:",
        itens: [
          "leia(numero)",
          "se (numero > 0) entao",
          "escreva(\"Positivo\")",
          "senao",
          "escreva(\"Não é positivo\")"
        ],
        dica: "Primeiro lemos o número; a condição vem antes dos blocos de resposta.",
        explicacao: "Lemos a entrada, testamos a condição, e cada bloco (se/senao) mostra a resposta adequada."
      }
    ]
  },
  {
    id: "loop",
    titulo: "Laços de Repetição",
    icone: "🔁",
    descricao: "Repetindo tarefas com enquanto e para.",
    licao: `
      <h2>🔁 Laços de Repetição</h2>
      <p>Quando precisamos repetir uma tarefa várias vezes, usamos <strong>laços</strong> (loops),
      aplicando o pilar do <em>reconhecimento de padrões</em>.</p>
      <p><strong>PARA</strong> — quando sabemos quantas repetições queremos:</p>
      <pre><code>para i de 1 ate 5 faca
   escreva(i)
fimpara
// Saída: 1 2 3 4 5</code></pre>
      <p><strong>ENQUANTO</strong> — repete enquanto a condição for verdadeira:</p>
      <pre><code>contador <- 0
enquanto (contador < 3) faca
   escreva("Olá!")
   contador <- contador + 1
fimenquanto
// Escreve "Olá!" 3 vezes</code></pre>
      <div class="exemplo">
        <h3>Cuidado: loop infinito! ♾️</h3>
        <p>Se a condição do <code>enquanto</code> nunca ficar falsa (ex.: esquecer de incrementar o
        contador), o programa repete para sempre!</p>
      </div>`,
    exercicios: [
      {
        tipo: "quiz",
        enunciado: "Quantas vezes o laço executa?\n\npara i de 1 ate 4 faca\n   escreva(\"oi\")\nfimpara",
        opcoes: ["3 vezes", "4 vezes", "5 vezes", "Infinitas vezes"],
        resposta: 1,
        dica: "Conte: i = 1, 2, 3, ... até que valor incluído?",
        explicacao: "O laço executa com i = 1, 2, 3 e 4 — ou seja, 4 vezes."
      },
      {
        tipo: "quiz",
        enunciado: "O que acontece neste algoritmo?\n\nx <- 1\nenquanto (x > 0) faca\n   x <- x + 1\nfimenquanto",
        opcoes: ["Executa 1 vez e para", "Nunca executa", "Loop infinito", "Erro de sintaxe"],
        resposta: 2,
        dica: "x começa positivo e só aumenta. A condição x > 0 fica falsa em algum momento?",
        explicacao: "Como x só cresce, a condição x > 0 nunca fica falsa: é um loop infinito."
      },
      {
        tipo: "vf",
        enunciado: "O laço PARA é ideal quando NÃO sabemos previamente o número de repetições.",
        resposta: false,
        dica: "Qual laço usa 'de 1 ate 10'? Isso indica quantidade conhecida ou desconhecida?",
        explicacao: "Falso! O PARA é usado quando o número de repetições é conhecido; para quantidade indefinida, usamos o ENQUANTO."
      },
      {
        tipo: "ordem",
        enunciado: "Ordene as linhas para somar os números de 1 a 10:",
        itens: [
          "soma <- 0",
          "para i de 1 ate 10 faca",
          "soma <- soma + i",
          "fimpara",
          "escreva(soma)"
        ],
        dica: "Antes de repetir, a soma precisa começar em zero. O resultado é exibido depois do laço.",
        explicacao: "Inicializamos soma com 0, acumulamos dentro do laço e mostramos o total (55) apenas no final."
      }
    ]
  }
];

// Medalhas disponíveis
const MEDALHAS = [
  { id: "primeiro-passo", nome: "Primeiro Passo", icone: "👣", descricao: "Resolveu seu primeiro exercício" },
  { id: "modulo-concluido", nome: "Módulo Concluído", icone: "✅", descricao: "Concluiu um módulo completo" },
  { id: "perfeccionista", nome: "Perfeccionista", icone: "💯", descricao: "Acertou todos os exercícios de um módulo na 1ª tentativa" },
  { id: "maratonista", nome: "Maratonista", icone: "🔥", descricao: "Estudou 3 dias seguidos" },
  { id: "mestre-logica", nome: "Mestre da Lógica", icone: "🏆", descricao: "Concluiu todos os módulos do curso" }
];

// Colegas simulados para o ranking da turma (demonstração)
const TURMA_DEMO = [
  { nome: "Ana Souza", xp: 310 },
  { nome: "Bruno Lima", xp: 260 },
  { nome: "Carla Dias", xp: 205 },
  { nome: "Diego Ramos", xp: 150 },
  { nome: "Elisa Costa", xp: 90 }
];

// Dados simulados do painel do professor (demonstração dos relatórios RF11)
const RELATORIO_DEMO = {
  turma: "Turma A — Lógica de Programação 2026",
  codigo: "LOGICA-2026A",
  alunos: [
    { nome: "Ana Souza", progresso: 100, acerto1a: 88 },
    { nome: "Bruno Lima", progresso: 75, acerto1a: 81 },
    { nome: "Carla Dias", progresso: 75, acerto1a: 63 },
    { nome: "Diego Ramos", progresso: 50, acerto1a: 44 },
    { nome: "Elisa Costa", progresso: 25, acerto1a: 70 }
  ],
  errosPorModulo: [
    { modulo: "Pensamento Computacional", taxaErro: 18 },
    { modulo: "Algoritmos e Variáveis", taxaErro: 27 },
    { modulo: "Condicionais (Se/Senão)", taxaErro: 41 },
    { modulo: "Laços de Repetição", taxaErro: 55 }
  ]
};
