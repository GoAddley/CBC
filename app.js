const btn = document.querySelector('.btn');

btn.addEventListener('mouseenter', () => {
    btn.style.width = '40%'
    btn.style.height = '60px';
    btn.style.lineHeight = '45px';
    btn.style.transition = '0.4s';
});

btn.addEventListener('mouseleave', () => {
    btn.style.width = '35%';
    btn.style.height = '50px';
    btn.style.lineHeight = '35px';
});