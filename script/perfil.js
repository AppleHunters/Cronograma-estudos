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
