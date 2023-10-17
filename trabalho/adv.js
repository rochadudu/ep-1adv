// Seleciona todos os elementos com a classe 'slider'
const slider = document.querySelectorAll('.slider');

// Seleciona os botões de anterior e próximo pelo ID
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

// Inicializa a variável para acompanhar o slide atual
let currentSlide = 0;

// Função para ocultar todos os slides
function hideSlider() {
  slider.forEach(item => item.classList.remove('on'));
}

// Função para mostrar o slide atual
function showSlider() {
  slider[currentSlide].classList.add('on');
}

// Função para avançar para o próximo slide
function nextSlider() {
  hideSlider();
  if (currentSlide === slider.length - 1) {
    currentSlide = 0; // Volta ao primeiro slide se estiver no último
  } else {
    currentSlide++;
  }
  showSlider();
}

// Função para voltar para o slide anterior
function prevSlider() {
  hideSlider();
  if (currentSlide === 0) {
    currentSlide = slider.length - 1; // Volta ao último slide se estiver no primeiro
  } else {
    currentSlide--;
  }
  showSlider();
}

// Adiciona ouvintes de eventos aos botões de anterior e próximo
btnNext.addEventListener('click', nextSlider);
btnPrev.addEventListener('click', prevSlider);
