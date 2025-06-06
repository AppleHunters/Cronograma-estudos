// Sistema de temas global
function aplicarTema(tema) {
    // Remove todas as classes de tema
    document.body.classList.remove('tema-claro', 'tema-escuro', 'tema-sereno');
    
    // Adiciona a classe do tema selecionado
    document.body.classList.add(`tema-${tema}`);
    
    // Salva no localStorage para persistência
    localStorage.setItem('tema', tema);
    
    // Atualiza os ícones ativos (se estiver na página principal)
    if (document.getElementById('tema-claro')) {
        document.querySelectorAll('#menu svg').forEach(icon => {
            icon.classList.remove('active');
        });
        document.getElementById(`tema-${tema}`).classList.add('active');
    }
}

// Configuração do menu (apenas na página principal)
document.addEventListener('DOMContentLoaded', function() {
    // Configuração do menu de configurações
    const settingsButton = document.getElementById('settings');
    if (settingsButton) {
        const menu = document.getElementById('menu');
        
        // Abre/fecha menu ao clicar no ícone
        settingsButton.addEventListener('click', function() {
            menu.classList.toggle('menu-hidden');
            menu.classList.toggle('menu-visible');
            settingsButton.classList.toggle('rotated');
        });

        // Fecha menu ao clicar fora dele
        document.addEventListener('click', function(e) {
            if (!menu.contains(e.target) && e.target !== settingsButton) {
                menu.classList.add('menu-hidden');
                menu.classList.remove('menu-visible');
                settingsButton.classList.remove('rotated');
            }
        });

        // Configura os botões de tema
        document.getElementById('tema-claro').addEventListener('click', () => {
            aplicarTema('claro');
            menu.classList.remove('menu-visible');
            menu.classList.add('menu-hidden');
            settingsButton.classList.remove('rotated');
        });
        
        document.getElementById('tema-escuro').addEventListener('click', () => {
            aplicarTema('escuro');
            menu.classList.remove('menu-visible');
            menu.classList.add('menu-hidden');
            settingsButton.classList.remove('rotated');
        });
        
        document.getElementById('tema-sereno').addEventListener('click', () => {
            aplicarTema('sereno');
            menu.classList.remove('menu-visible');
            menu.classList.add('menu-hidden');
            settingsButton.classList.remove('rotated');
        });
    }

    // Configuração dos cards de matérias (funciona em todas as páginas)
    document.querySelectorAll('aside').forEach(aside => {
        aside.addEventListener('click', function(e) {
            // Permite navegação se clicar no link
            if (e.target.closest('a')) return;
            
            // Alterna visibilidade do texto "Começar!"
            const p = aside.querySelector('p');
            if (p) {
                p.style.display = p.style.display === 'block' ? 'none' : 'block';
            }
        });
    });

    // Aplica o tema salvo ou o padrão (escuro)
    const temaSalvo = localStorage.getItem('tema') || 'escuro';
    aplicarTema(temaSalvo);
});