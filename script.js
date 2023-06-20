
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


/*
//CARROS

const cars = document.getElementById("slide1")
const car = document.querySelectorAll("#slide1 img")

let idc = 0;

function carros() {
    idc++;

    if (idc > car.length - 2) {
        idc = 0;
    }

    cars.style.transform = `translateX(${-idc * 201.5}px)`;
}

setInterval(carros, 1000);

*/

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
