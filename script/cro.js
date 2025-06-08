// Aplica o tema global ao site
function aplicarTema(tema) {
    document.body.classList.remove('tema-claro', 'tema-escuro', 'tema-sereno');
    document.body.classList.add(`tema-${tema}`);
    localStorage.setItem('tema', tema);

    if (document.getElementById('tema-claro')) {
        document.querySelectorAll('#menu svg').forEach(icon => {
            icon.classList.remove('active');
        });
        document.getElementById(`tema-${tema}`).classList.add('active');
    }
}

// Quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function () {
    const settingsButton = document.getElementById('settings');
    const menu = document.getElementById('menu');

    // Ativa menu hambúrguer
    if (settingsButton && menu) {
        settingsButton.addEventListener('click', () => {
            menu.classList.toggle('menu-hidden');
            menu.classList.toggle('menu-visible');
            settingsButton.classList.toggle('rotated');
        });

        document.addEventListener('click', function (e) {
            if (!menu.contains(e.target) && e.target !== settingsButton) {
                menu.classList.add('menu-hidden');
                menu.classList.remove('menu-visible');
                settingsButton.classList.remove('rotated');
            }
        });

        // Botões de tema
        ['claro', 'escuro', 'sereno'].forEach(tipo => {
            const btn = document.getElementById(`tema-${tipo}`);
            if (btn) {
                btn.addEventListener('click', () => {
                    aplicarTema(tipo);
                    menu.classList.add('menu-hidden');
                    menu.classList.remove('menu-visible');
                    settingsButton.classList.remove('rotated');
                });
            }
        });
    }

    // Cards de matérias
    document.querySelectorAll('aside').forEach(aside => {
        aside.addEventListener('click', function (e) {
            if (e.target.closest('a')) return;
            const p = aside.querySelector('p');
            if (p) p.style.display = p.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Aplica o tema salvo ou o padrão
    const temaSalvo = localStorage.getItem('tema') || 'escuro';
    aplicarTema(temaSalvo);
});

// Foto de perfil: carrega imagem salva
window.addEventListener('DOMContentLoaded', () => {
    const salva = localStorage.getItem('fotoPerfil');
    if (salva) {
        const fotoPerfil = document.getElementById('fotoPerfil');
        if (fotoPerfil) {
            fotoPerfil.style.backgroundImage = `url(${salva})`;
        }
    }

    // Frase motivacional
   const frases = [
  "Cada passo conta, mesmo os pequenos.",
  "A disciplina supera a motivação.",
  "Você é mais forte do que imagina.",
  "O sucesso é a soma de pequenos esforços diários.",
  "Estude hoje para colher amanhã.",
  "A persistência leva à excelência.",
  "Se está cansado, aprenda a descansar, não a desistir.",
  "O futuro pertence a quem se dedica no presente.",
  "Só vence quem não desiste.",
  "Foco, força e fé nos estudos!",
  "Disciplina é fazer o que precisa ser feito, mesmo sem vontade.",
  "Estude até se orgulhar de si mesmo.",
  "Foco no objetivo, força para lutar e fé para vencer.",
  "Você não precisa ser o melhor, só melhor do que ontem.",
  "Grandes conquistas começam com pequenos passos.",
  "A persistência realiza o impossível.",
  "Pare de se comparar, comece a se superar.",
  "Você é mais capaz do que imagina.",
  "A constância é o segredo dos vencedores.",
  "Quem quer, arranja um jeito. Quem não quer, uma desculpa.",
  "O sucesso não vem antes do esforço.",
  "A única coisa entre você e o seu sonho é a sua atitude.",
  "Seja teimoso com seus objetivos e flexível com os métodos.",
  "Você colhe amanhã o que planta hoje.",
  "Aprender nunca é em vão.",
  "Não espere por motivação. Crie rotina.",
  "A melhor maneira de prever o futuro é construí-lo.",
  "Seu esforço de hoje é sua vitória de amanhã.",
  "Sonhos sem ação são apenas desejos.",
  "Não pare até se orgulhar.",
  "A vitória ama a preparação.",
  "Tudo parece impossível até que seja feito.",
  "A caminhada pode ser longa, mas o destino vale a pena.",
  "Você nunca perde. Ou você ganha ou aprende.",
  "Não desista. Geralmente é a última chave do chaveiro que abre a porta.",
  "Transforme esforço em hábito e hábito em vitória.",
  "Quanto maior o desafio, maior a glória.",
  "Você é o único responsável pelo seu sucesso.",
  "Não existe progresso sem esforço.",
  "Aprender é resistir. Estudar é lutar.",
  "Levante. Estude. Supere.",
  "Sucesso é 1% inspiração e 99% transpiração.",
  "A mente que se abre a uma nova ideia jamais volta ao seu tamanho original.",
  "Toda grande jornada começa com o primeiro passo.",
  "Não espere o momento perfeito. Faça o momento ser perfeito.",
  "Você não é o que dizem que é. Você é o que escolhe ser.",
  "Cansaço passa. Resultado fica.",
  "Tenha orgulho do seu esforço, mesmo que ninguém veja.",
  "Você está estudando para ser livre.",
  "Aprenda como se fosse viver para sempre.",
  "Você não precisa ser perfeito, só comprometido.",
  "Pequenos esforços diários criam grandes resultados.",
  "Seja constante. A disciplina vence o talento.",
  "A recompensa vem depois do esforço, não antes.",
  "Estudar também é um ato de coragem.",
  "Sua dedicação de hoje será seu conforto amanhã.",
  "Nunca é tarde para recomeçar com mais foco.",
  "Desistir não é opção para quem quer vencer.",
  "Acorde com determinação. Durma com satisfação.",
  "Foco, fé e força. O resto é consequência."
];


    const fraseElemento = document.getElementById('fraseMotivacional');
    if (fraseElemento) {
        const indice = Math.floor(Math.random() * frases.length);
        fraseElemento.textContent = frases[indice];
    }
});

// Salvar matéria estudada no Session Storage
function salvarMateria(materia) {
    let materias = sessionStorage.getItem('materiasEstudadas');
    materias = materias ? materias.split(',') : [];
    if (!materias.includes(materia)) {
        materias.push(materia);
        sessionStorage.setItem('materiasEstudadas', materias.join(','));
    }
}

// Registrar matérias estudadas por dia no Local Storage
function registrarMateriaEstudada(nomeMateria) {
    const hoje = new Date().toLocaleDateString('pt-BR');
    const materiasSalvas = JSON.parse(localStorage.getItem('materiasEstudadas')) || { data: "", materias: [] };

    if (materiasSalvas.data !== hoje) {
        materiasSalvas.data = hoje;
        materiasSalvas.materias = [];
    }

    if (!materiasSalvas.materias.includes(nomeMateria)) {
        materiasSalvas.materias.push(nomeMateria);
    }

    localStorage.setItem('materiasEstudadas', JSON.stringify(materiasSalvas));
}
