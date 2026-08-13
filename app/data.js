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
      <strong>4 pilares</strong>, que você vai usar em praticamente todo exercício deste curso.
      Vamos ver cada um com calma, com um exemplo próprio.</p>

      <h3>1. Decomposição 🧩</h3>
      <p>Consiste em quebrar um problema grande e complicado em partes menores e mais fáceis de
      resolver. Problemas grandes assustam; problemas pequenos são gerenciáveis.</p>
      <div class="exemplo">
        <strong>Exemplo:</strong> organizar uma mudança de casa parece enorme, mas decomposta vira:
        embalar os pertences, contratar o transporte, levar as caixas, desembalar no novo lugar.
        Cada parte, sozinha, é simples.
      </div>

      <h3>2. Reconhecimento de padrões 🔎</h3>
      <p>É perceber semelhanças e repetições entre problemas diferentes — quando você nota um
      padrão, pode reaproveitar a mesma solução várias vezes, em vez de reinventar tudo do zero.</p>
      <div class="exemplo">
        <strong>Exemplo:</strong> calcular a média de qualquer lista de números — sejam notas de
        prova, preços de produtos ou temperaturas — segue sempre os mesmos passos: somar tudo e
        dividir pela quantidade de itens.
      </div>

      <h3>3. Abstração 🎯</h3>
      <p>É focar apenas no que é essencial para resolver o problema, ignorando os detalhes que não
      importam. Abstrair é filtrar informação, não acumular.</p>
      <div class="exemplo">
        <strong>Exemplo:</strong> um mapa de metrô não desenha prédios, ruas nem árvores — mostra só
        as linhas e as estações, porque é só disso que um passageiro precisa para se guiar.
      </div>

      <h3>4. Algoritmos 📋</h3>
      <p>É criar uma sequência de passos clara, ordenada e sem ambiguidade para resolver o
      problema. Um algoritmo bem escrito, qualquer pessoa (ou computador) consegue seguir.</p>
      <div class="exemplo">
        <strong>Exemplo:</strong> uma receita de bolo é um algoritmo: separar ingredientes, misturar
        na ordem certa, assar por um tempo determinado, esperar esfriar. Pular ou trocar a ordem de
        um passo muda o resultado.
      </div>

      <h3>Juntando tudo: um exemplo completo 🎓</h3>
      <p>Vamos aplicar os 4 pilares a um problema real: <em>"organizar a formatura da turma"</em>.</p>
      <ul>
        <li><strong>Decomposição:</strong> dividir em convites, local, buffet, música e fotos.</li>
        <li><strong>Reconhecimento de padrões:</strong> perceber que "escolher fornecedor" se repete
        para buffet, música e fotos — sempre envolve pedir orçamento, comparar preços e decidir.</li>
        <li><strong>Abstração:</strong> para decidir o buffet, o que importa é preço, cardápio e
        disponibilidade — não importa, por exemplo, a cor do uniforme dos garçons.</li>
        <li><strong>Algoritmo:</strong> a lista final de passos, na ordem certa, do primeiro contato
        com os fornecedores até o grande dia.</li>
      </ul>

      <div class="atencao">
        ⚠️ <strong>Erro comum:</strong> confundir decomposição com abstração. Decompor é
        <strong>dividir</strong> o problema em partes menores; abstrair é <strong>filtrar</strong>
        quais detalhes realmente importam. São pilares diferentes, mas costumam aparecer juntos na
        prática.
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
        tipo: "quiz",
        enunciado: "Escrever a sequência exata de passos, na ordem certa, para trocar um pneu furado é um exemplo de qual pilar?",
        opcoes: ["Abstração", "Reconhecimento de padrões", "Algoritmo", "Decomposição"],
        resposta: 2,
        dica: "É uma sequência ordenada de passos para resolver um problema...",
        explicacao: "Uma sequência clara e ordenada de passos é, por definição, um algoritmo."
      },
      {
        tipo: "vf",
        enunciado: "Um mapa de metrô, que mostra só linhas e estações e omite prédios e ruas, é um exemplo de abstração.",
        resposta: true,
        dica: "O mapa filtrou o que não importa para quem vai pegar o trem.",
        explicacao: "Verdadeiro! O mapa manteve só o essencial (linhas e estações) e descartou o resto — isso é abstração."
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
    descricao: "Sequências de passos, variáveis, tipos de dados e operadores.",
    licao: `
      <h2>📦 Algoritmos e Variáveis</h2>
      <p>Um <strong>algoritmo</strong> é uma sequência finita e ordenada de passos para resolver um
      problema. Para guardar informações durante a execução, usamos <strong>variáveis</strong>:
      "caixinhas" com um nome que armazenam um valor, e cujo conteúdo pode mudar ao longo do
      algoritmo.</p>
      <pre><code>algoritmo "media"
var
   nota1, nota2, media: real
inicio
   leia(nota1)
   leia(nota2)
   media <- (nota1 + nota2) / 2
   escreva("Média: ", media)
fimalgoritmo</code></pre>
      <p>Nomes de variáveis não podem ter espaços nem começar com número — prefira nomes que
      expliquem o que guardam, como <code>nota1</code> em vez de <code>x</code>.</p>

      <h3>Tipos de dados</h3>
      <ul>
        <li><strong>inteiro</strong> — números sem casas decimais: <code>10</code>, <code>-3</code>, <code>2026</code></li>
        <li><strong>real</strong> — números com casas decimais: <code>7.5</code>, <code>-0.2</code></li>
        <li><strong>caractere</strong> (texto/string) — <code>"Olá, mundo!"</code>, <code>"turma A"</code></li>
        <li><strong>lógico</strong> — apenas <code>verdadeiro</code> ou <code>falso</code></li>
      </ul>

      <h3>Atribuição ⬅️</h3>
      <p>O símbolo <code>&lt;-</code> guarda um valor na variável: <code>idade &lt;- 20</code>
      significa "a variável idade recebe o valor 20". Depois de atribuído, o valor pode ser trocado
      quantas vezes o algoritmo precisar: <code>idade &lt;- idade + 1</code> substitui o valor antigo
      pelo novo (idade mais 1).</p>

      <h3>Operadores aritméticos ➕➖✖️➗</h3>
      <p>Para calcular valores com variáveis, usamos operadores:</p>
      <ul>
        <li><code>+</code> soma, <code>-</code> subtração, <code>*</code> multiplicação, <code>/</code> divisão (com casas decimais)</li>
        <li><code>DIV</code> — divisão inteira, descarta o resto</li>
        <li><code>MOD</code> — resto da divisão</li>
      </ul>
      <pre><code>total <- 17 / 2      // 8.5
inteiro <- 17 DIV 2  // 8
resto <- 17 MOD 2    // 1</code></pre>
      <div class="exemplo">
        <strong>Exemplo:</strong> para saber quantas caixas de 6 ovos cabem em 20 ovos, e quantos
        ovos sobram: <code>caixas &lt;- 20 DIV 6</code> (resultado 3) e <code>sobra &lt;- 20 MOD 6</code>
        (resultado 2).
      </div>

      <h3>Constantes vs. variáveis</h3>
      <p>Uma <strong>variável</strong> pode mudar de valor durante a execução do algoritmo. Uma
      <strong>constante</strong> recebe um valor que nunca muda, do início ao fim: por exemplo,
      <code>PI &lt;- 3.14159</code>.</p>

      <h3>Exemplo completo: área de um retângulo 📐</h3>
      <pre><code>algoritmo "area_retangulo"
var
   base, altura, area: real
inicio
   leia(base)
   leia(altura)
   area <- base * altura
   escreva("Área: ", area)
fimalgoritmo</code></pre>
      <p>Se <code>base = 5</code> e <code>altura = 3</code>, o algoritmo calcula
      <code>area = 5 * 3 = 15</code> e escreve "Área: 15". Ele apenas lê, calcula e mostra —
      esse padrão de <em>entrada → processamento → saída</em> aparece na maioria dos algoritmos.</p>

      <div class="atencao">
        ⚠️ <strong>Erro comum:</strong> confundir <code>=</code> (igualdade, usada para comparar dois
        valores) com <code>&lt;-</code> (atribuição, usada para guardar um valor numa variável). São
        operações diferentes, mesmo em linguagens de programação reais.
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
        tipo: "quiz",
        enunciado: "Qual é o resultado de 17 DIV 5?",
        opcoes: ["3", "3.4", "2", "5"],
        resposta: 0,
        dica: "DIV descarta as casas decimais e fica só com a parte inteira da divisão.",
        explicacao: "17 dividido por 5 dá 3.4; a divisão inteira (DIV) descarta a parte decimal e resulta em 3."
      },
      {
        tipo: "vf",
        enunciado: "Uma constante pode ter seu valor alterado durante a execução do algoritmo.",
        resposta: false,
        dica: "O nome já dá a dica: constante é o que NÃO muda.",
        explicacao: "Falso! Diferente das variáveis, o valor de uma constante é fixo do início ao fim da execução."
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
      </div>

      <h3>Se, senão se, senão: múltiplas condições</h3>
      <p>Quando há mais de duas possibilidades, encadeamos com <code>senao se</code>:</p>
      <pre><code>se (media >= 9) entao
   escreva("Excelente")
senao se (media >= 7) entao
   escreva("Bom")
senao se (media >= 5) entao
   escreva("Regular")
senao
   escreva("Insuficiente")
fimse</code></pre>
      <p>O algoritmo testa as condições <strong>na ordem</strong>: assim que uma delas é verdadeira,
      executa aquele bloco e ignora todo o resto, mesmo que outra condição mais abaixo também fosse
      verdadeira.</p>
      <div class="exemplo">
        <strong>Exemplo:</strong> com <code>media = 6</code>: falha em <code>&gt;= 9</code>, falha em
        <code>&gt;= 7</code>, passa em <code>&gt;= 5</code> → o algoritmo escreve "Regular" e para
        por aí.
      </div>

      <h3>Condicionais aninhadas</h3>
      <p>Um <code>se</code> pode conter outro <code>se</code> dentro dele, para checar condições em
      etapas:</p>
      <pre><code>se (idade >= 12) entao
   se (altura >= 1.40) entao
      escreva("Pode entrar no brinquedo")
   senao
      escreva("Altura insuficiente")
   fimse
senao
   escreva("Idade insuficiente")
fimse</code></pre>

      <div class="atencao">
        ⚠️ <strong>Erro comum:</strong> esquecer que, numa cadeia de <code>senao se</code>, apenas o
        <strong>primeiro</strong> bloco cuja condição for verdadeira executa — as condições
        seguintes nem chegam a ser testadas.
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
        tipo: "quiz",
        enunciado: "Com media = 8, usando a cadeia se(>=9)/senao se(>=7)/senao se(>=5)/senao, o que o algoritmo escreve?",
        opcoes: ["Excelente", "Bom", "Regular", "Insuficiente"],
        resposta: 1,
        dica: "8 é maior ou igual a 9? E a 7?",
        explicacao: "8 não é >= 9, mas é >= 7, então cai no bloco \"Bom\" — a primeira condição que se torna verdadeira."
      },
      {
        tipo: "vf",
        enunciado: "Em uma cadeia de senao se, o algoritmo testa TODAS as condições, mesmo depois de encontrar uma verdadeira.",
        resposta: false,
        dica: "Pense no exemplo da nota: depois de cair em \"Bom\", ele ainda verifica \"Regular\"?",
        explicacao: "Falso! Assim que uma condição é verdadeira, aquele bloco executa e as condições seguintes são ignoradas."
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
    descricao: "Repetindo tarefas com enquanto e para, acumuladores e laços aninhados.",
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
      </div>

      <h3>O padrão acumulador 🧮</h3>
      <p>Muitos problemas pedem para acumular um valor ao longo das repetições — por exemplo, somar
      todos os números de uma lista. Para isso, criamos uma variável <strong>antes</strong> do laço,
      começando em zero, e vamos somando a ela a cada volta:</p>
      <pre><code>soma <- 0
para i de 1 ate 5 faca
   soma <- soma + i
fimpara
escreva(soma)
// Saída: 15 (1+2+3+4+5)</code></pre>
      <p>Note que <code>soma</code> começa em <code>0</code> <strong>antes</strong> do laço. Se ela
      fosse inicializada dentro do laço, seria zerada a cada volta e o resultado sairia errado.</p>

      <h3>Laços aninhados</h3>
      <p>Um laço pode conter outro laço dentro dele — útil para gerar tabelas e combinações:</p>
      <pre><code>para i de 1 ate 2 faca
   para j de 1 ate 3 faca
      escreva(i, "-", j)
   fimpara
fimpara
// Saída: 1-1 1-2 1-3 2-1 2-2 2-3</code></pre>
      <p>Para cada volta do laço externo (<code>i</code>), o laço interno (<code>j</code>) roda por
      completo. Aqui: 2 voltas externas × 3 voltas internas = 6 saídas ao todo.</p>

      <div class="atencao">
        ⚠️ <strong>Erro comum:</strong> inicializar o acumulador (como <code>soma &lt;- 0</code>)
        <strong>dentro</strong> do laço em vez de antes dele — isso zera o valor a cada repetição, e
        o resultado final fica sempre errado.
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
        tipo: "quiz",
        enunciado: "Qual o valor final de contador após o laço?\n\ncontador <- 0\npara i de 1 ate 3 faca\n   contador <- contador + 2\nfimpara",
        opcoes: ["2", "3", "6", "9"],
        resposta: 2,
        dica: "O laço roda 3 vezes, somando 2 a cada volta. Quanto é 3 vezes 2?",
        explicacao: "O laço executa 3 vezes (i=1,2,3), somando 2 em cada uma: 0+2+2+2 = 6."
      },
      {
        tipo: "vf",
        enunciado: "Em laços aninhados, para cada repetição do laço externo, o laço interno roda por completo.",
        resposta: true,
        dica: "Pense no exemplo da tabela: para cada valor de i, quantas vezes j roda?",
        explicacao: "Verdadeiro! É exatamente esse comportamento que permite gerar tabelas e combinações com laços aninhados."
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
