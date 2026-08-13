// LogicaMente — Lógica da aplicação
// Estado persistido em localStorage (aplicação 100% estática, compatível com GitHub Pages)

const STORAGE_KEY = "logicamente-v1";

const XP_PRIMEIRA = 20; // acerto na 1ª tentativa (RN02)
const XP_RETENTATIVA = 10; // acerto após errar
const NOTA_MINIMA = 70; // % para desbloquear o próximo módulo (RN01)

let estado = null;
let exercicioAtual = { modulo: 0, indice: 0, tentativas: 0 };

// ---------- Persistência ----------

function carregarEstado() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch (e) {
    return null;
  }
}

function salvarEstado() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(estado));
}

function novoEstado(nome, perfil) {
  return {
    nome,
    perfil, // "aluno" | "professor"
    xp: 0,
    medalhas: [],
    streak: 1,
    ultimoDia: hoje(),
    // progresso[m][e] = { resolvido: bool, primeira: bool, tentativas: n }
    progresso: MODULOS.map(m => m.exercicios.map(() => ({ resolvido: false, primeira: false, tentativas: 0 })))
  };
}

function hoje() {
  return new Date().toISOString().slice(0, 10);
}

function atualizarStreak() {
  const h = hoje();
  if (estado.ultimoDia === h) return;
  const ontem = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  estado.streak = estado.ultimoDia === ontem ? estado.streak + 1 : 1;
  estado.ultimoDia = h;
  if (estado.streak >= 3) darMedalha("maratonista");
  salvarEstado();
}

// ---------- Regras de progresso ----------

function progressoModulo(m) {
  const exs = estado.progresso[m];
  const resolvidos = exs.filter(e => e.resolvido).length;
  return Math.round((resolvidos / exs.length) * 100);
}

// Nota do módulo: 1ª tentativa vale 100%, acerto com retentativa vale 50%
function notaModulo(m) {
  const exs = estado.progresso[m];
  let pontos = 0;
  exs.forEach(e => {
    if (e.resolvido) pontos += e.primeira ? 1 : 0.5;
  });
  return Math.round((pontos / exs.length) * 100);
}

function moduloConcluido(m) {
  return estado.progresso[m].every(e => e.resolvido);
}

// RN01: módulo desbloqueado se for o primeiro ou se o anterior foi concluído com nota >= 70%
function moduloDesbloqueado(m) {
  if (m === 0) return true;
  return moduloConcluido(m - 1) && notaModulo(m - 1) >= NOTA_MINIMA;
}

function darMedalha(id) {
  if (estado.medalhas.includes(id)) return;
  estado.medalhas.push(id);
  const medalha = MEDALHAS.find(x => x.id === id);
  mostrarToast(`${medalha.icone} Medalha conquistada: ${medalha.nome}!`);
  salvarEstado();
}

// ---------- Navegação entre telas ----------

function mostrarTela(id) {
  document.querySelectorAll(".tela").forEach(t => t.classList.remove("ativa"));
  document.getElementById(id).classList.add("ativa");
  document.querySelectorAll(".nav-btn").forEach(b => {
    b.classList.toggle("ativo", b.dataset.tela === id);
  });
  window.scrollTo(0, 0);
}

function atualizarHeader() {
  document.getElementById("hud-nome").textContent = estado.nome;
  document.getElementById("hud-xp").textContent = `⭐ ${estado.xp} XP`;
  document.getElementById("hud-streak").textContent = `🔥 ${estado.streak} dia${estado.streak > 1 ? "s" : ""}`;
}

// ---------- Login ----------

function iniciarSessao(nome, perfil) {
  estado = novoEstado(nome, perfil);
  salvarEstado();
  entrarNoApp();
}

function entrarNoApp() {
  atualizarStreak();
  atualizarHeader();
  document.getElementById("chrome").classList.remove("oculto");
  document.getElementById("nav-professor").classList.toggle("oculto", estado.perfil !== "professor");
  if (estado.perfil === "professor") {
    renderPainelProfessor();
    mostrarTela("tela-professor");
  } else {
    renderTrilha();
    mostrarTela("tela-trilha");
  }
}

function sair() {
  if (!confirm("Sair da conta? Seu progresso fica salvo neste navegador.")) return;
  localStorage.removeItem(STORAGE_KEY);
  location.reload();
}

// ---------- Trilha ----------

function renderTrilha() {
  const container = document.getElementById("lista-modulos");
  container.innerHTML = "";
  MODULOS.forEach((mod, i) => {
    const desbloqueado = moduloDesbloqueado(i);
    const pct = progressoModulo(i);
    const nota = notaModulo(i);
    const concluido = moduloConcluido(i);

    const card = document.createElement("div");
    card.className = "card-modulo" + (desbloqueado ? "" : " bloqueado");
    card.innerHTML = `
      <div class="modulo-icone">${desbloqueado ? mod.icone : "🔒"}</div>
      <div class="modulo-info">
        <h3>Módulo ${i + 1}: ${mod.titulo}</h3>
        <p>${mod.descricao}</p>
        <div class="barra"><div class="barra-preenchida" style="width:${pct}%"></div></div>
        <small>${pct}% concluído${concluido ? ` · nota ${nota}%` : ""}</small>
      </div>
      <div class="modulo-acoes"></div>`;

    const acoes = card.querySelector(".modulo-acoes");
    if (desbloqueado) {
      const btn = document.createElement("button");
      btn.className = "btn btn-primario";
      btn.textContent = concluido ? "Revisar" : (pct > 0 ? "Continuar" : "Começar");
      btn.onclick = () => abrirLicao(i);
      acoes.appendChild(btn);
      if (concluido && nota < NOTA_MINIMA) {
        const aviso = document.createElement("small");
        aviso.className = "aviso-nota";
        aviso.textContent = `Nota mínima para avançar: ${NOTA_MINIMA}%.`;
        const refazer = document.createElement("button");
        refazer.className = "btn btn-secundario";
        refazer.textContent = "Refazer módulo";
        refazer.onclick = () => refazerModulo(i);
        acoes.appendChild(refazer);
        acoes.appendChild(aviso);
      }
    } else {
      acoes.innerHTML = `<small>Conclua o módulo anterior com nota ≥ ${NOTA_MINIMA}%</small>`;
    }
    container.appendChild(card);
  });
}

function refazerModulo(m) {
  if (!confirm("Refazer o módulo zera o progresso dele (o XP já ganho é mantido). Continuar?")) return;
  estado.progresso[m] = MODULOS[m].exercicios.map(() => ({ resolvido: false, primeira: false, tentativas: 0 }));
  salvarEstado();
  renderTrilha();
}

// ---------- Lição ----------

function abrirLicao(m) {
  exercicioAtual.modulo = m;
  document.getElementById("licao-conteudo").innerHTML = MODULOS[m].licao;
  document.getElementById("btn-ir-exercicios").onclick = () => abrirExercicio(m, proximoExercicio(m));
  mostrarTela("tela-licao");
}

function proximoExercicio(m) {
  const idx = estado.progresso[m].findIndex(e => !e.resolvido);
  return idx === -1 ? 0 : idx;
}

// ---------- Exercícios ----------

function embaralhar(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function abrirExercicio(m, e) {
  exercicioAtual = { modulo: m, indice: e, tentativas: 0 };
  const mod = MODULOS[m];
  const ex = mod.exercicios[e];

  document.getElementById("ex-progresso").textContent = `Módulo ${m + 1} · Exercício ${e + 1} de ${mod.exercicios.length}`;
  document.getElementById("ex-enunciado").textContent = ex.enunciado;

  const area = document.getElementById("ex-area");
  const feedback = document.getElementById("ex-feedback");
  area.innerHTML = "";
  feedback.innerHTML = "";
  feedback.className = "feedback";
  document.getElementById("btn-verificar").classList.remove("oculto");
  document.getElementById("btn-proximo").classList.add("oculto");

  if (ex.tipo === "quiz") {
    ex.opcoes.forEach((op, i) => {
      area.insertAdjacentHTML("beforeend",
        `<label class="opcao"><input type="radio" name="resp" value="${i}"><span>${op}</span></label>`);
    });
  } else if (ex.tipo === "vf") {
    ["Verdadeiro", "Falso"].forEach((op, i) => {
      area.insertAdjacentHTML("beforeend",
        `<label class="opcao"><input type="radio" name="resp" value="${i === 0}"><span>${i === 0 ? "✔️" : "✖️"} ${op}</span></label>`);
    });
  } else if (ex.tipo === "ordem") {
    const lista = document.createElement("div");
    lista.id = "lista-ordem";
    lista.className = "lista-ordem";
    embaralhar(ex.itens).forEach(item => {
      const bloco = document.createElement("div");
      bloco.className = "bloco-ordem";
      const texto = document.createElement("span");
      texto.className = "bloco-texto";
      texto.textContent = item;
      const setas = document.createElement("span");
      setas.className = "bloco-setas";
      setas.innerHTML = `<button class="seta" title="Mover para cima">▲</button>
        <button class="seta" title="Mover para baixo">▼</button>`;
      bloco.append(texto, setas);
      const [cima, baixo] = setas.querySelectorAll(".seta");
      cima.onclick = () => { if (bloco.previousElementSibling) lista.insertBefore(bloco, bloco.previousElementSibling); };
      baixo.onclick = () => { if (bloco.nextElementSibling) lista.insertBefore(bloco.nextElementSibling, bloco); };
      lista.appendChild(bloco);
    });
    area.appendChild(lista);
    area.insertAdjacentHTML("beforeend", "<small class='dica-uso'>Use as setas ▲▼ para colocar os blocos na ordem correta.</small>");
  }

  mostrarTela("tela-exercicio");
}

function respostaDoUsuario(ex) {
  if (ex.tipo === "quiz") {
    const sel = document.querySelector("input[name='resp']:checked");
    return sel ? parseInt(sel.value, 10) : null;
  }
  if (ex.tipo === "vf") {
    const sel = document.querySelector("input[name='resp']:checked");
    return sel ? sel.value === "true" : null;
  }
  if (ex.tipo === "ordem") {
    return [...document.querySelectorAll("#lista-ordem .bloco-texto")].map(b => b.textContent);
  }
  return null;
}

function respostaCorreta(ex, resp) {
  if (ex.tipo === "ordem") return JSON.stringify(resp) === JSON.stringify(ex.itens);
  return resp === ex.resposta;
}

function verificar() {
  const { modulo: m, indice: e } = exercicioAtual;
  const ex = MODULOS[m].exercicios[e];
  const resp = respostaDoUsuario(ex);
  const feedback = document.getElementById("ex-feedback");

  if (resp === null) {
    feedback.className = "feedback neutro";
    feedback.innerHTML = "Selecione uma resposta antes de verificar. 😉";
    return;
  }

  exercicioAtual.tentativas++;
  const prog = estado.progresso[m][e];
  prog.tentativas++;

  if (respostaCorreta(ex, resp)) {
    const primeira = exercicioAtual.tentativas === 1 && !prog.resolvido;
    let xpGanho = 0;
    if (!prog.resolvido) {
      prog.resolvido = true;
      prog.primeira = primeira;
      xpGanho = primeira ? XP_PRIMEIRA : XP_RETENTATIVA;
      estado.xp += xpGanho;
    }
    feedback.className = "feedback acerto";
    feedback.innerHTML = `<strong>🎉 Correto!${xpGanho ? ` +${xpGanho} XP` : ""}</strong><p>${ex.explicacao}</p>`;

    darMedalha("primeiro-passo");
    if (moduloConcluido(m)) {
      darMedalha("modulo-concluido");
      if (estado.progresso[m].every(x => x.primeira)) darMedalha("perfeccionista");
      if (MODULOS.every((_, i) => moduloConcluido(i))) darMedalha("mestre-logica");
    }
    salvarEstado();
    atualizarHeader();

    document.getElementById("btn-verificar").classList.add("oculto");
    const btnProx = document.getElementById("btn-proximo");
    btnProx.classList.remove("oculto");
    const ultimo = e === MODULOS[m].exercicios.length - 1;
    btnProx.textContent = ultimo ? "Concluir módulo ✅" : "Próximo exercício →";
    btnProx.onclick = () => {
      if (ultimo) {
        renderTrilha();
        mostrarTela("tela-trilha");
        const nota = notaModulo(m);
        mostrarToast(nota >= NOTA_MINIMA
          ? `Módulo concluído com nota ${nota}%! Próximo módulo desbloqueado. 🚀`
          : `Módulo concluído com nota ${nota}%. Refaça para atingir ${NOTA_MINIMA}% e avançar.`);
      } else {
        abrirExercicio(m, e + 1);
      }
    };
  } else {
    salvarEstado();
    feedback.className = "feedback erro";
    feedback.innerHTML = `<strong>❌ Ainda não!</strong><p>💡 Dica: ${ex.dica}</p><p>Tente novamente — você consegue!</p>`;
  }
}

// ---------- Perfil ----------

function renderPerfil() {
  document.getElementById("perfil-nome").textContent = estado.nome;
  document.getElementById("perfil-xp").textContent = estado.xp;
  document.getElementById("perfil-streak").textContent = estado.streak;

  const total = MODULOS.reduce((s, m) => s + m.exercicios.length, 0);
  const feitos = estado.progresso.flat().filter(e => e.resolvido).length;
  document.getElementById("perfil-exercicios").textContent = `${feitos}/${total}`;

  const lista = document.getElementById("perfil-medalhas");
  lista.innerHTML = "";
  MEDALHAS.forEach(m => {
    const tem = estado.medalhas.includes(m.id);
    lista.insertAdjacentHTML("beforeend", `
      <div class="medalha ${tem ? "" : "medalha-bloqueada"}">
        <span class="medalha-icone">${tem ? m.icone : "🔒"}</span>
        <div><strong>${m.nome}</strong><br><small>${m.descricao}</small></div>
      </div>`);
  });
}

// ---------- Ranking ----------

function renderRanking() {
  const todos = [...TURMA_DEMO, { nome: `${estado.nome} (você)`, xp: estado.xp, eu: true }]
    .sort((a, b) => b.xp - a.xp);
  const corpo = document.getElementById("ranking-corpo");
  corpo.innerHTML = "";
  todos.forEach((a, i) => {
    const pos = ["🥇", "🥈", "🥉"][i] || `${i + 1}º`;
    corpo.insertAdjacentHTML("beforeend",
      `<tr class="${a.eu ? "linha-eu" : ""}"><td>${pos}</td><td>${a.nome}</td><td>⭐ ${a.xp} XP</td></tr>`);
  });
}

// ---------- Painel do Professor (dados simulados — RF10/RF11) ----------

function renderPainelProfessor() {
  document.getElementById("prof-turma").textContent = RELATORIO_DEMO.turma;
  document.getElementById("prof-codigo").textContent = RELATORIO_DEMO.codigo;

  const corpo = document.getElementById("prof-alunos");
  corpo.innerHTML = "";
  RELATORIO_DEMO.alunos.forEach(a => {
    const alerta = a.acerto1a < 60 ? " ⚠️" : "";
    corpo.insertAdjacentHTML("beforeend", `
      <tr>
        <td>${a.nome}${alerta}</td>
        <td><div class="barra barra-mini"><div class="barra-preenchida" style="width:${a.progresso}%"></div></div> ${a.progresso}%</td>
        <td>${a.acerto1a}%</td>
      </tr>`);
  });

  const erros = document.getElementById("prof-erros");
  erros.innerHTML = "";
  RELATORIO_DEMO.errosPorModulo.forEach(m => {
    erros.insertAdjacentHTML("beforeend", `
      <div class="linha-erro">
        <span>${m.modulo}</span>
        <div class="barra barra-erro"><div class="barra-preenchida" style="width:${m.taxaErro}%"></div></div>
        <span>${m.taxaErro}% de erro</span>
      </div>`);
  });
}

// ---------- Toast ----------

let toastTimer = null;
function mostrarToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("visivel");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("visivel"), 4000);
}

// ---------- Inicialização ----------

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("form-login").addEventListener("submit", ev => {
    ev.preventDefault();
    const nome = document.getElementById("input-nome").value.trim();
    const perfil = document.querySelector("input[name='perfil']:checked").value;
    if (nome) iniciarSessao(nome, perfil);
  });

  document.querySelectorAll(".nav-btn[data-tela]").forEach(btn => {
    btn.addEventListener("click", () => {
      const tela = btn.dataset.tela;
      if (tela === "tela-trilha") renderTrilha();
      if (tela === "tela-perfil") renderPerfil();
      if (tela === "tela-ranking") renderRanking();
      if (tela === "tela-professor") renderPainelProfessor();
      mostrarTela(tela);
    });
  });

  document.getElementById("btn-verificar").addEventListener("click", verificar);
  document.getElementById("btn-sair").addEventListener("click", sair);
  document.getElementById("btn-voltar-trilha").addEventListener("click", () => {
    renderTrilha();
    mostrarTela("tela-trilha");
  });

  estado = carregarEstado();
  if (estado) {
    entrarNoApp();
  } else {
    mostrarTela("tela-login");
  }
});
