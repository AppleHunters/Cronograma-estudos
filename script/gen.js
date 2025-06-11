document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.querySelector('.add');
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

  // Função para salvar o cronograma no localStorage
  function salvarCronograma() {
    const linhas = [];
    for (const tr of tbody.querySelectorAll('tr')) {
      const celulas = [];
      for (const td of tr.querySelectorAll('td')) {
        celulas.push(td.textContent);
      }
      linhas.push(celulas);
    }
    localStorage.setItem('cronograma', JSON.stringify(linhas));
  }

  // Função para carregar o cronograma do localStorage
  function carregarCronograma() {
    const cronogramaSalvo = localStorage.getItem('cronograma');
    if (cronogramaSalvo) {
      const linhas = JSON.parse(cronogramaSalvo);
      tbody.innerHTML = ''; // limpa tbody antes de inserir

      linhas.forEach(celulas => {
        const tr = document.createElement('tr');
        celulas.forEach((texto, i) => {
          const td = document.createElement('td');
          td.contentEditable = "true";
          td.textContent = texto;
          if(i === 0) {
            td.style.fontWeight = 'bold';
          }
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });
      adicionarListenersDeEdicao();
    }
  }

  // Ao clicar no botão "+", cria uma nova linha editável
  addBtn.addEventListener('click', () => {
    const tr = document.createElement('tr');
    for (let i = 0; i < 6; i++) {
      const td = document.createElement('td');
      td.contentEditable = "true";
      if (i === 0) {
        td.textContent = 'Horário';
        td.style.fontWeight = 'bold';
      } else {
        td.textContent = '';
      }
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
    adicionarListenersDeEdicao();
    tr.cells[1].focus();
    salvarCronograma();
  });

  // Adiciona event listeners para salvar quando o conteúdo for editado
  function adicionarListenersDeEdicao() {
    const tds = tbody.querySelectorAll('td[contenteditable="true"]');
    tds.forEach(td => {
      td.addEventListener('input', salvarCronograma);
    });
  }

  // Carregar o cronograma quando a página abrir
  carregarCronograma();
});
