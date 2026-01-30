let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
let slideInterval; // Variável para armazenar o timer

// Função para mostrar um slide específico
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Função para mudar o slide manualmente
function changeSlide(direction) {
    showSlide(currentSlide + direction);
    resetTimer(); // Sempre que mudar manualmente, reseta o tempo
}

// Função que inicia ou reinicia o temporizador
function resetTimer() {
    // Para o temporizador atual
    clearInterval(slideInterval);
    
    // Inicia um novo do zero (1000ms = 1 segundo)
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 3000);
}

// Inicia o carrossel pela primeira vez
resetTimer();


/* --- Código do Menu Hambúrguer (Mantido) --- */
const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

const toggleMenu = () => {
    menuToggle.classList.toggle('is-active');
    navList.classList.toggle('active');
};

menuToggle.addEventListener('click', toggleMenu);

document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('is-active');
        navList.classList.remove('active');
    });
});