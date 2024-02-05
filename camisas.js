/* ABRIR MENU TOGGLE*/
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("#header nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

/* FECHAR MENU MENU*/
const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

/* HEADER NO SCROLL */
const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

function changeHeader() {
  if (window.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
}

const backTop = document.querySelector(".back-top");
function backToTop() {
  if (window.scrollY >= 560) {
    backTop.classList.add("show");
  } else {
    backTop.classList.remove("show");
  }
}

/* MENU HEADER ATIVO NAS SESSOES DA PAGINA */
const sections = document.querySelectorAll("main section[id]");
function showSectionCorrentMenu() {
  /* DIVIDIR A TELA EM 8 E PEGAR O PEDAÇO EQUIVALENTE A 4 */
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector("nav div ul li a[href*= " + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector("nav div ul li a[href*= " + sectionId + "]")
        .classList.remove("active");
    }
  }
}

// /* MOSTRAR ELEMENTOS NO SCROLL DA PAG */

// const scrollReveal = ScrollReveal({
//   origin: 'top',
//   distance: '30px',
//   duration: 700,
//   reset: true
// })

// scrollReveal.reveal(`#home header, #home .shirts`, { interval: 100 })

/* When Scroll */
window.addEventListener("scroll", function () {
  changeHeader();
  backToTop();
  showSectionCorrentMenu();
});
