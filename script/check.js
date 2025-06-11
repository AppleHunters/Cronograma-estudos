document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('ck');
    const checklistContainer = document.querySelector('.item-check');

    let atividades = JSON.parse(localStorage.getItem('checklist')) || [];

    function salvar() {
        localStorage.setItem('checklist', JSON.stringify(atividades));
    }

    function criarItem(texto, feito, index) {
        const item = document.createElement('div');
        item.className = 'item-check';
        item.innerHTML = `
            <input type="checkbox" id="ck-${index}" ${feito ? 'checked' : ''}>
            <label for="ck-${index}">${texto}</label>
            <button class="remover">✖</button>
        `;

        const checkbox = item.querySelector('input');
        const removerBtn = item.querySelector('.remover');

        checkbox.addEventListener('change', () => {
            atividades[index].feito = checkbox.checked;
            salvar();
        });

        removerBtn.addEventListener('click', () => {
            atividades.splice(index, 1);
            salvar();
            renderizar();
        });

        return item;
    }

    function renderizar() {
        checklistContainer.innerHTML = '';
        atividades.forEach((atv, index) => {
            checklistContainer.appendChild(criarItem(atv.texto, atv.feito, index));
        });
    }

    addBtn.addEventListener('click', () => {
        const texto = prompt('Digite a nova atividade:');
        if (texto && texto.trim() !== '') {
            atividades.push({ texto, feito: false });
            salvar();
            renderizar();
        }
    });

    renderizar();
});
