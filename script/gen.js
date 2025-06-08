document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.getElementById('add');
  const tabela = document.querySelector('.cronograma');
  
  // Criar cabeçalho (thead) fixo, se ainda não existir
  if (!tabela.querySelector('thead')) {
    const thead = document.createElement('thead');
    const trHead = document.createElement('tr');
    const colunas = ['Horário', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex'];
    colunas.forEach(texto => {
      const th = document.createElement('th');
      th.textContent = texto;
      trHead.appendChild(th);
    });
    thead.appendChild(trHead);
    tabela.appendChild(thead);
  }
  
  // Garantir que tbody exista
  let tbody = tabela.querySelector('tbody');
  if (!tbody) {
    tbody = document.createElement('tbody');
    tabela.appendChild(tbody);
  }

  addBtn.addEventListener('click', () => {
    // Criar uma nova linha com 6 colunas (1 horário + 5 dias)
    const tr = document.createElement('tr');
    
    for (let i = 0; i < 6; i++) {
      const td = document.createElement('td');
      td.contentEditable = "true";
      if (i === 0) {
        td.textContent = 'Horário';
        td.style.fontWeight = 'bold';  // destacar a coluna do horário
      } else {
        td.textContent = ''; // célula vazia para dias
      }
      tr.appendChild(td);
    }
    
    tbody.appendChild(tr);
    
    // Focar na primeira célula editável após horário
    tr.cells[1].focus();
  });
});
