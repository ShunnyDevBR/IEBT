// Animação simples para aparecer os elementos com classe .animar
function animateOnLoad() {
  const animados = document.querySelectorAll('.animar');
  animados.forEach((el) => {
    el.style.animationName = 'fadeInUp';
  });
}

window.onload = () => {
  animateOnLoad();
};

// Formulário simples só com alerta (sem backend)
const form = document.querySelector('#form-contato');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Mensagem enviada com sucesso! Deus abençoe!');
  form.reset();
});