$(document).ready(function() {
  var header = $("#header");
  var headerOffset = header.offset().top;

  $(window).scroll(function() {
      if ($(this).scrollTop() > headerOffset) {
          header.addClass("fixed");
      } else {
          header.removeClass("fixed");
      }
  });
});

// Adiciona ouvintes de eventos aos botões de anterior e próximo
btnNext.addEventListener('click', nextSlider);
btnPrev.addEventListener('click', prevSlider);

// Encontre o formulário e os elementos de input
const newsletterForm = document.getElementById("newsletter-form");
const newsletterEmail = document.getElementById("newsletter-email");

// Quando o formulário for enviado
newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = newsletterEmail.value;
    // Faça algo com o email (por exemplo, envie para o servidor ou armazene localmente)
    console.log("Email inscrito: " + email);
    // Limpe o campo de email
    newsletterEmail.value = "";
});
