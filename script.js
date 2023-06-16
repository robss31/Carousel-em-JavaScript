const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carousel() {
    idx++;

    if (idx > img.length - 2){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 563}px)`;
}

setInterval(carousel, 2000);

