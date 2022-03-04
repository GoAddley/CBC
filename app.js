const card1 = document.querySelectorAll(".counselling-card");
const card2 = document.querySelectorAll(".counselling-card2");
const fees = document.querySelectorAll(".price-card");

const fadeOptions = {
  threshold: 0.1
};

const fadeOnScroll = new IntersectionObserver(function(entries, fadeOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      fadeOnScroll.unobserve(entry.target);
    }
  })
}, fadeOptions);

card1.forEach(card => {
  fadeOnScroll.observe(card);
})
card2.forEach(card => {
  fadeOnScroll.observe(card);
})
fees.forEach(fee => {
  fadeOnScroll.observe(fee);
})

const svg = document.querySelector('.menu-icon');
const drop = document.querySelector('.drop-down');
const menu = document.querySelector('.nav');

svg.addEventListener("click", () => {
  drop.classList.toggle('show-menu');
  drop.style.transition = 'all 0.6s';
});