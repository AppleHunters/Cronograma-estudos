document.addEventListener('DOMContentLoaded', function () {
    const materias = ['pt', 'mt', 'ci', 'ht', 'ge', 'in'];

    materias.forEach(materia => {
        const aside = document.querySelector(`aside.${materia}`);
        if (!aside) return;

        aside.addEventListener('click', function (e) {
            // Evita que o clique no aside "pule" o redirecionamento (vamos deixar o link cuidar disso)
            if (e.target.tagName.toLowerCase() === 'a' || e.target.tagName.toLowerCase() === 'p') return;

            // Esconde todos os botões
            materias.forEach(outra => {
                const outroAside = document.querySelector(`aside.${outra}`);
                const outroP = outroAside.querySelector('a p');
                outroP.style.display = 'none';
            });

            // Mostra o botão da matéria clicada
            const p = aside.querySelector('a p');
            const cor = getComputedStyle(document.documentElement).getPropertyValue('--' + materia).trim();
            p.style.display = 'block';
            p.style.borderColor = cor;
        });
    });
});

    document.addEventListener("DOMContentLoaded", () => {
    const settingsButton = document.getElementById("settings");
    const menu = document.getElementById("menu");

    settingsButton.addEventListener("click", () => {
        menu.classList.toggle("menu-hidden");
        menu.classList.toggle("menu-visible");
        settingsButton.classList.toggle("rotated");
    });
});

// Elementos do DOM
const temaClaroBtn = document.getElementById("tema-claro");
const temaEscuroBtn = document.getElementById("tema-escuro");
const temaSerenoBtn = document.getElementById("tema-sereno");

// Função para alternar tema
function toggleTema() {
  const temaAtual = document.documentElement.getAttribute("data-theme");
  const novoTema = temaAtual === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", novoTema);
  localStorage.setItem("theme", novoTema);

  // Alterna exibição dos ícones
  if (novoTema === "dark") {
    temaClaroBtn.style.display = "none";
    temaEscuroBtn.style.display = "inline";
  } else {
    temaClaroBtn.style.display = "inline";
    temaEscuroBtn.style.display = "none";
  }
}

// Detecta tema salvo ou do sistema
window.addEventListener("DOMContentLoaded", () => {
  const temaSalvo = localStorage.getItem("theme");
  const temaPreferido = temaSalvo || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", temaPreferido);

  // Ajusta exibição dos ícones
  if (temaPreferido === "dark") {
    temaClaroBtn.style.display = "none";
    temaEscuroBtn.style.display = "inline";
  } else {
    temaClaroBtn.style.display = "inline";
    temaEscuroBtn.style.display = "none";
  }
});

// Adiciona eventos de clique
temaClaroBtn.addEventListener("click", toggleTema);
temaEscuroBtn.addEventListener("click", toggleTema);

function tc() {
  const root = document.documentElement;

  root.style.setProperty('--bg-bk', getComputedStyle(root).getPropertyValue('--bg-'));
  root.style.setProperty('--text-bk', getComputedStyle(root).getPropertyValue('--text'));
  root.style.setProperty('--accent-bk', getComputedStyle(root).getPropertyValue('--accent'));
  root.style.setProperty('--card-bk', getComputedStyle(root).getPropertyValue('--card'));
  root.style.setProperty('--border-bk', getComputedStyle(root).getPropertyValue('--border'));

  // aplica cor correta no body
  document.body.style.backgroundColor = getComputedStyle(root).getPropertyValue('--bg');
  document.body.style.color = getComputedStyle(root).getPropertyValue('--text');

  // corrige todos os textos que estavam brancos diretamente
  document.querySelectorAll('aside, header, main, nav, #menu').forEach(el => {
    el.style.color = getComputedStyle(root).getPropertyValue('--text');
  });

  // corrige links
  document.querySelectorAll('a').forEach(el => {
    el.style.color = getComputedStyle(root).getPropertyValue('--text');
  });
}


function te() {
  const root = document.documentElement;

  root.style.setProperty('--bg-bk', '#1E1E2F');
  root.style.setProperty('--text-bk', '#F1F1F1');
  root.style.setProperty('--accent-bk', '#5B6DFF');
  root.style.setProperty('--card-bk', '#2A2A40');
  root.style.setProperty('--border-bk', '#3A3A5A');

  document.body.style.backgroundColor = getComputedStyle(root).getPropertyValue('--bg-bk');
  document.body.style.color = getComputedStyle(root).getPropertyValue('--text-bk');

  document.querySelectorAll('aside, header, main, nav, #menu').forEach(el => {
    el.style.color = getComputedStyle(root).getPropertyValue('--text-bk');
  });

  document.querySelectorAll('a').forEach(el => {
    el.style.color = getComputedStyle(root).getPropertyValue('--text-bk');
  });
}

function ts() {
  const root = document.documentElement;

  // Aplica as variáveis do tema sereno
  root.style.setProperty('--bg-bk', getComputedStyle(root).getPropertyValue('--bg-serene'));
  root.style.setProperty('--text-bk', getComputedStyle(root).getPropertyValue('--text-serene'));
  root.style.setProperty('--accent-bk', getComputedStyle(root).getPropertyValue('--accent-serene'));
  root.style.setProperty('--card-bk', getComputedStyle(root).getPropertyValue('--card-serene'));
  root.style.setProperty('--border-bk', getComputedStyle(root).getPropertyValue('--border-serene'));

  // Aplica cores específicas das matérias
  root.style.setProperty('--port', getComputedStyle(root).getPropertyValue('--port-serene'));
  root.style.setProperty('--mat', getComputedStyle(root).getPropertyValue('--mat-serene'));
  root.style.setProperty('--cien', getComputedStyle(root).getPropertyValue('--cien-serene'));
  root.style.setProperty('--hist', getComputedStyle(root).getPropertyValue('--hist-serene'));
  root.style.setProperty('--geo', getComputedStyle(root).getPropertyValue('--geo-serene'));
  root.style.setProperty('--ing', getComputedStyle(root).getPropertyValue('--ing-serene'));
  root.style.setProperty('--reda', getComputedStyle(root).getPropertyValue('--reda-serene'));

  // Aplica cor no body e elementos
  document.body.style.backgroundColor = getComputedStyle(root).getPropertyValue('--bg-serene');
  document.body.style.color = getComputedStyle(root).getPropertyValue('--text-serene');

  document.querySelectorAll('aside, header, main, nav, #menu').forEach(el => {
    el.style.color = getComputedStyle(root).getPropertyValue('--text-serene');
  });

  document.querySelectorAll('a').forEach(el => {
    el.style.color = getComputedStyle(root).getPropertyValue('--text-serene');
  });
}

let temaAtivo = 'escuro'; // Começa com o tema escuro

function at(novoTema) {
  const root = document.documentElement;
  
  // Se clicar no tema que já está ativo, volta para o escuro
  if (temaAtivo === novoTema) {
    novoTema = 'escuro';
  }
  
  temaAtivo = novoTema; // Atualiza o tema ativo

  // Aplica o tema selecionado
  if (novoTema === 'escuro') {
    // Tema Escuro
    root.style.setProperty('--bg-bk', '#1E1E2F');
    root.style.setProperty('--text-bk', '#F1F1F1');
    root.style.setProperty('--accent-bk', '#5B6DFF');
    root.style.setProperty('--card-bk', '#2A2A40');
    root.style.setProperty('--border-bk', '#3A3A5A');
    
    // Cores padrão das matérias (do seu tema escuro original)
    root.style.setProperty('--port', '#EA460A');
    root.style.setProperty('--mat', '#0077FF');
    root.style.setProperty('--cien', '#199700');
    root.style.setProperty('--hist', '#7700FF');
    root.style.setProperty('--geo', '#A3230C');
    root.style.setProperty('--ing', '#FFBB00');
    
  } else if (novoTema === 'sereno') {
    // Tema Sereno
    root.style.setProperty('--bg-bk', '#E8F4F8');
    root.style.setProperty('--text-bk', '#2C3E50');
    root.style.setProperty('--accent-bk', '#3498DB');
    root.style.setProperty('--card-bk', '#FFFFFF');
    root.style.setProperty('--border-bk', '#BDC3C7');
    
    // Cores serenas das matérias
    root.style.setProperty('--port', '#E74C3C');
    root.style.setProperty('--mat', '#2980B9');
    root.style.setProperty('--cien', '#27AE60');
    root.style.setProperty('--hist', '#9B59B6');
    root.style.setProperty('--geo', '#E67E22');
    root.style.setProperty('--ing', '#F1C40F');
  }
  
  // Atualiza o localStorage para lembrar a escolha
  localStorage.setItem('temaAtivo', temaAtivo);
  
  // Atualiza o visual do body e elementos
  document.body.style.backgroundColor = getComputedStyle(root).getPropertyValue('--bg-bk');
  document.body.style.color = getComputedStyle(root).getPropertyValue('--text-bk');
}

// Carrega o tema salvo ao iniciar
window.addEventListener('DOMContentLoaded', () => {
  const temaSalvo = localStorage.getItem('temaAtivo') || 'escuro';
  alternarTema(temaSalvo);
});

function at(novoTema) {
  // Remove todas as classes de tema
  document.body.classList.remove('tema-escuro', 'tema-claro', 'tema-sereno');
  
  // Adiciona a classe do tema ativo
  document.body.classList.add(`tema-${novoTema}`);
  
  // Resto da função...
}