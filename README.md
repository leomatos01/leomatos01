# 🧠 LogicaMente

Plataforma web gamificada para ensino de **lógica de programação e pensamento computacional**,
desenvolvida como projeto acadêmico (tema: *Pensamento Computacional — Elaboração de Cursos de
Informática, Lógica de Programação ou Qualquer Tema Relacionado à Computação*).

## 🎯 Problema e solução

Disciplinas introdutórias de programação apresentam altas taxas de reprovação e desistência,
causadas pela falta de base em raciocínio lógico, ausência de feedback imediato e ritmos de
aprendizado heterogêneos. O LogicaMente ataca esse problema com:

- **Trilha progressiva** de 4 módulos (Pensamento Computacional → Algoritmos e Variáveis → Condicionais → Laços de Repetição);
- **Exercícios interativos** com correção automática (múltipla escolha, V/F e ordenação de blocos — *Parsons problems*);
- **Feedback imediato** com dicas ao errar e explicações ao acertar;
- **Gamificação**: XP, medalhas, sequência de dias (streak) e ranking por turma;
- **Painel do professor** com relatórios de desempenho da turma.

## 🌐 Acesso

- **Aplicação online:** <https://leomatos01.github.io/leomatos01/app/>
- **Página de informações:** <https://leomatos01.github.io/leomatos01/>
- **Documentação técnica (requisitos e diagramas):** <https://leomatos01.github.io/leomatos01/documentacao.html>
- **Protótipos de telas:** <https://leomatos01.github.io/leomatos01/prototipos.html>
- **Testes automatizados:** <https://leomatos01.github.io/leomatos01/testes.html>
- **Repositório:** <https://github.com/leomatos01/leomatos01>

## 📂 Estrutura do projeto

```
/
├── index.html          # Página de informações do projeto
├── documentacao.html   # Requisitos (RF/RNF), diagrama de classes e de casos de uso
├── prototipos.html     # Protótipos de telas (wireframes)
├── testes.html         # Testes automatizados do conteúdo pedagógico e das regras de negócio
├── metricas.html       # Métricas de sucesso, testes e lições aprendidas
├── apresentacao.html   # Apresentação final (vídeo, slides, roteiro)
├── assets/site.css     # Estilos das páginas institucionais
└── app/                # Aplicação LogicaMente
    ├── index.html      # Estrutura das telas (login, trilha, lição, exercício, ranking, perfil, professor)
    ├── style.css       # Estilos da aplicação
    ├── data.js         # Conteúdo pedagógico: módulos, lições, exercícios, medalhas
    └── app.js          # Lógica: progresso, correção automática, XP, medalhas, regras de negócio
```

## 🛠️ Tecnologias

- **HTML5, CSS3, JavaScript (vanilla)** — sem frameworks nem build; abre direto no navegador;
- **localStorage** — persistência do progresso no navegador (aplicação 100% estática);
- **GitHub Pages** — hospedagem gratuita.

**Decisão de arquitetura:** para atender ao requisito de publicação no GitHub Pages (hospedagem
estática), toda a lógica roda no cliente e o progresso é persistido em `localStorage`, sob a chave
`logicamente-v1`. Isso elimina servidor e banco de dados, mantendo custo zero e disponibilidade 24/7.

## 📋 Regras de negócio implementadas

| Regra | Descrição |
|---|---|
| RN01 | Um módulo só é desbloqueado com nota ≥ 70% no módulo anterior (1ª tentativa vale 100%, retentativa vale 50%). Há opção de refazer o módulo. |
| RN02 | Acerto na 1ª tentativa vale 20 XP; após errar, vale 10 XP. |
| RN03 | O ranking exibe apenas alunos da mesma turma. |

## ▶️ Como executar localmente

Não há dependências. Basta abrir `index.html` (site) ou `app/index.html` (aplicação) no navegador,
ou servir a pasta com qualquer servidor estático:

```bash
npx serve .          # ou
python -m http.server
```

## 🚀 Publicação no GitHub Pages

1. No repositório [leomatos01/leomatos01](https://github.com/leomatos01/leomatos01):
   **Settings → Pages → Source: Deploy from a branch → Branch: main / (root) → Save**;
2. Em ~1 minuto o site estará em <https://leomatos01.github.io/leomatos01/>.

## 📈 Métricas de sucesso

Detalhadas em [metricas.html](metricas.html): usuários ativos, taxa de conclusão de módulos,
taxa de acerto na 1ª tentativa, retenção em 7 dias e NPS.

## 👥 Equipe

**Leonardo Presotto de Matos** — Centro Universitário Filadélfia (UniFil)
