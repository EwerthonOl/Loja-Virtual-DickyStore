/* ABRIR MENU TOGGLE*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* FECHAR MENU MENU*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* HEADER NO SCROLL */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

/* TESTIMONIALS CAROUSEL SLIDER SWIPER */

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  /* PONTOS DE QUBRA */
  breakpoints: {
    770: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  },
  keyboard: true
})

/* ScrollReveal: MOSTRA ELEMENTOS NO SCROLL DA PÁGINA */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .text, #home .image,
   #about .image, #about .text,
   #services header, #services .card,
   #testimonials header, #testimonials .testimonials,
   #contact .text, #contact .links,
   footer .brand, footer .social`,
  { interval: 100 }
)

/* MENU DOS BONES */
// const bones = document.querySelector('#services .container .cards .bones')
// bones.addEventListener('click', function () {
//   bones.classList.toggle('show')
// })

/* BOTÃO UP */

const backTop = document.querySelector('.back-top')
window.addEventListener('scroll', function () {
  if (window.scrollY >= 560) {
    backTop.classList.add('show')
  } else {
    backTop.classList.remove('show')
  }
})
