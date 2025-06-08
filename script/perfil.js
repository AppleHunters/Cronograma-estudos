const modal = document.getElementById('modalPerfil');
const abrirModalBtn = document.getElementById('fotoPerfil'); // Agora clicando na imagem
const fecharModalBtn = document.getElementById('fecharModal');
const fotos = document.querySelectorAll('.bolinha');
const fotoPerfil = document.getElementById('fotoPerfil');

// Abrir modal
abrirModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// Fechar modal
fecharModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Selecionar foto
fotos.forEach(foto => {
  foto.addEventListener('click', () => {
    const src = foto.getAttribute('src');
    fotoPerfil.style.backgroundImage = `url(${src})`;
    localStorage.setItem('fotoPerfil', src);
    modal.style.display = 'none';
  });
});

// Carregar imagem salva ao abrir a página
window.addEventListener('DOMContentLoaded', () => {
  const salva = localStorage.getItem('fotoPerfil');
  if (salva) {
    fotoPerfil.style.backgroundImage = `url(${salva})`;
  }
});

function salvarImagemPerfil() {
  const input = document.getElementById('inputImagemPerfil');
  const file = input.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      localStorage.setItem('imagemPerfil', reader.result);
      alert("Imagem salva com sucesso!");
    };
    reader.readAsDataURL(file);
  }
}

  document.addEventListener('DOMContentLoaded', function() {
        const temaSalvo = localStorage.getItem('tema') || 'escuro';
        document.body.className = `tema-${temaSalvo} tema-transicao`;
    });

    const nomeUsuario = sessionStorage.getItem('user')
const elemento = document.getElementById('bemVindo')

if (nomeUsuario) {
    elemento.innerText = `Bem-vind@, ${nomeUsuario}!`
} else {
    elemento.innerText = 'Bem-vind@!'
}

const materias = sessionStorage.getItem('materiasEstudadas')
const h2Materias = document.getElementById('materiasHoje')

if (materias) {
    const listaFormatada = materias.split(',').map(m => `• ${m}`).join('<br>')
    h2Materias.innerHTML = `Matérias Estudadas Hoje:<br>${listaFormatada}`

} else {
    h2Materias.innerText = 'Matérias Estudadas Hoje: Nenhuma ainda 😴'
}



const dados = JSON.parse(localStorage.getItem('materiasEstudadas'));

if (dados && dados.materias.length > 0) {
  const listaFormatada = dados.materias.map(m => `• ${m}`).join('<br>');
  h2Materias.innerHTML = `Matérias Estudadas Hoje:<br>${listaFormatada}`;
} else {
  h2Materias.innerText = "Matérias Estudadas Hoje:\nNenhuma ainda.";
}
