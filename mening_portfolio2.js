const burger = document.querySelector('#burger');
const navMenu = document.querySelector('.nav-link_berish');

burger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});


document.querySelectorAll('.nav-link a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});
