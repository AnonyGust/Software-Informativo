const cards = document.querySelector(".cards");
const card = document.querySelectorAll(".card");
const cardWidth = card[0].offsetWidth;
const margin = 10;
let count = 0;

function moveCards() {
    count++;
    if (count >= card.length / 6) {
        count = 0;
    }
    cards.style.transform = `translateX(-${(cardWidth + margin) * 6 * count}px)`;
}

setInterval(moveCards, 5000);