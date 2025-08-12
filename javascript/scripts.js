
        function toggleMenu() {
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');
            
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        }
        
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                const hamburger = document.querySelector('.hamburger');
                const navMenu = document.querySelector('.nav-menu');
                
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

let img = document.querySelector(".starbucks");
let circulo = document.querySelector(".circulo");

function trocaImagem(endereco) {
    img.src = endereco;
}

function trocaCor(cor) {
     const circulo = document.querySelector('.circulo');

    circulo.style.background = cor;
}

window.trocaImagem = trocaImagem;
window.trocaCor = trocaCor;