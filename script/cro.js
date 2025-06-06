document.addEventListener('DOMContentLoaded', function() {
    // Configuração do menu
    const settingsButton = document.getElementById('settings');
    const menu = document.getElementById('menu');

    settingsButton.addEventListener('click', function() {
        menu.classList.toggle('menu-hidden');
        menu.classList.toggle('menu-visible');
        settingsButton.classList.toggle('rotated');
    });

    // Configuração dos temas
    const temaClaroBtn = document.getElementById('tema-claro');
    const temaEscuroBtn = document.getElementById('tema-escuro');
    const temaSerenoBtn = document.getElementById('tema-sereno');

    // Carrega tema salvo ou padrão
    const temaSalvo = localStorage.getItem('tema') || 'escuro';
    aplicarTema(temaSalvo);

    // Eventos dos botões de tema
    temaClaroBtn.addEventListener('click', () => aplicarTema('claro'));
    temaEscuroBtn.addEventListener('click', () => aplicarTema('escuro'));
    temaSerenoBtn.addEventListener('click', () => aplicarTema('sereno'));

    // Configuração dos asides (matérias)
    const materias = ['pt', 'mt', 'ci', 'ht', 'ge', 'in'];

    materias.forEach(materia => {
        const aside = document.querySelector(`aside.${materia}`);
        if (!aside) return;

        aside.addEventListener('click', function(e) {
            if (e.target.tagName.toLowerCase() === 'a' || e.target.tagName.toLowerCase() === 'p') return;

            materias.forEach(outra => {
                const outroAside = document.querySelector(`aside.${outra}`);
                const outroP = outroAside.querySelector('a p');
                outroP.style.display = 'none';
            });

            const p = aside.querySelector('a p');
            p.style.display = 'block';
        });
    });
});

function aplicarTema(tema) {
    // Remove todas as classes de tema
    document.body.classList.remove('tema-claro', 'tema-escuro', 'tema-sereno');
    
    // Adiciona a classe do tema selecionado
    document.body.classList.add(`tema-${tema}`);
    
    // Salva no localStorage
    localStorage.setItem('tema', tema);
    
    // Atualiza a aparência dos botões de tema
    atualizarBotoesTema(tema);
}

function atualizarBotoesTema(temaAtivo) {
    const temas = ['claro', 'escuro', 'sereno'];
    
    temas.forEach(tema => {
        const botao = document.getElementById(`tema-${tema}`);
        if (botao) {
            botao.classList.toggle('active', tema === temaAtivo);
        }
    });
}