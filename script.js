
// ANIMAiS, CASA,
const imgs = document.getElementById("slide");
const img = document.querySelectorAll("#slide img");

let idf = 0;

function carousel() {
    idf++;

    if (idf > img.length - 2) {
        idf = 0;
    }

    imgs.style.transform = `translateX(${-idf * 219}px)`;
}

setInterval(carousel, 2500);



const filmes = document.getElementById("slide2")
const filme = document.querySelectorAll("#slide2 img")

let ids = 0;

function cinema() {
    ids++;

    if (ids > filme.length - 1) {
        ids = 0;
    }

    filmes.style.transform = `translateX(${-ids * 197}px)`;
}

setInterval(cinema, 2500);



function animais(){
    window.location.replace("http://127.0.0.1:5500/animais.html");
    window.location.replace("https://robss31.github.io/Carousel-em-JavaScript/animais.html");
}

function casas(){
    window.location.replace("http://127.0.0.1:5500/casas.html");
    window.location.replace("https://robss31.github.io/Carousel-em-JavaScript/casas.html");
}

function carros(){
    window.location.replace("http://127.0.0.1:5500/carros.html");
    window.location.replace("https://robss31.github.io/Carousel-em-JavaScript/carros.html");
}

function deco_sala(){
    window.location.replace("http://127.0.0.1:5500/deco_sala.html");
    window.location.replace("https://robss31.github.io/Carousel-em-JavaScript/deco_sala.html");
    
}

function voltar(){
    window.location.replace("http://127.0.0.1:5500/index.html");
    window.location.replace("https://robss31.github.io/Carousel-em-JavaScript");
}
