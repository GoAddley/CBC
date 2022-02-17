const card1 = document.querySelectorAll(".counselling-card");
const card2 = document.querySelectorAll(".counselling-card2");
const fees = document.querySelectorAll(".price-card");

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 1750 || document.documentElement.scrollTop > 1750) {  
    card1.forEach(card => {
        card.style.right = '0%';
        card.style.opacity = '1'
        card.style.transition = 'all 1s';
    });
    card2.forEach(card => {
        card.style.left = '0%';
        card.style.opacity = '1'
        card.style.transition = 'all 1s';
    });
  } if (document.body.scrollTop > 3600 || document.documentElement.scrollTop > 3600) {
    fees.forEach(fee => {
        fee.style.opacity = '1';
        fee.style.transition = 'all 2s';
    });
    }
}

const svg = document.querySelector('.menu-icon');
const drop = document.querySelector('.drop-down');
const menu = document.querySelector('.nav');

svg.addEventListener("click", () => {
  drop.classList.toggle('show-menu');
  drop.style.transition = 'all 0.6s';
}); 