document.addEventListener('DOMContentLoaded', function () {
  // Oculta todos os conteúdos ao carregar a página
  const allContents = document.querySelectorAll('.info-container');
  allContents.forEach(content => {
    content.style.display = 'none';
  });

  // Carrega as perguntas do quiz
  fetch('quiz.json')
    .then(response => response.json())
    .then(data => {
      // Armazena as perguntas e respostas em uma variável global
      window.quizData = data.perguntas;
    });
});

function showInfo(info) {
  // Oculta todos os conteúdos
  const allContents = document.querySelectorAll('.info-container');
  allContents.forEach(content => {
    content.style.display = 'none';
  });

  // Exibe o conteúdo correspondente ao item do menu clicado
  const selectedContent = document.getElementById(info);
  selectedContent.style.display = 'block';
  // Espera um curto período antes de rolar a página
  setTimeout(() => {
    selectedContent.scrollIntoView({ behavior: 'smooth' });
  }, 100);

}

// Função para atualizar a data no rodapé
function updateFooterDate() {
  const footerDate = document.getElementById('footerDate');
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  footerDate.textContent = `Data: ${formattedDate}`;
}

// Chama a função para atualizar a data quando a página for carregada
window.addEventListener('load', updateFooterDate);
