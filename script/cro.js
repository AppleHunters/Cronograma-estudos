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
