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
