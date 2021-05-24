let home = document.querySelector("#home");
let services = document.querySelector("#services");
let tutorials = document.querySelector("#tutorials");

let about = document.querySelector("#about");
let contanct = document.querySelector("#contanct");

window.addEventListener("scroll", () => {
  var windo = window.pageYOffset;

  if (services.offsetTop <= windo && tutorials.offsetTop > windo) {
    document.querySelector(".services").setAttribute("id", "active");
    document.querySelector(".tutorials").removeAttribute("id", "active");
    document.querySelector(".about").removeAttribute("id", "active");
    document.querySelector(".contanct").removeAttribute("id", "active");
    document.querySelector(".home").removeAttribute("id", "active");
  } else if (tutorials.offsetTop <= windo && about.offsetTop > windo) {
    document.querySelector(".tutorials").setAttribute("id", "active");
    document.querySelector(".services").removeAttribute("id", "active");
    document.querySelector(".about").removeAttribute("id", "active");
    document.querySelector(".contanct").removeAttribute("id", "active");
    document.querySelector(".home").removeAttribute("id", "active");
  } else if (about.offsetTop <= windo && contanct.offsetTop > windo) {
    document.querySelector(".about").setAttribute("id", "active");
    document.querySelector(".services").removeAttribute("id", "active");
    document.querySelector(".tutorials").removeAttribute("id", "active");
    document.querySelector(".contanct").removeAttribute("id", "active");
    document.querySelector(".home").removeAttribute("id", "active");
  } else if (contanct.offsetTop <= windo) {
    document.querySelector(".contanct").setAttribute("id", "active");
    document.querySelector(".services").removeAttribute("id", "active");
    document.querySelector(".tutorials").removeAttribute("id", "active");
    document.querySelector(".about").removeAttribute("id", "active");
    document.querySelector(".home").removeAttribute("id", "active");
  } else {
    console.log("Home");
    document.querySelector(".home").setAttribute("id", "active");
    document.querySelector(".services").removeAttribute("id", "active");
    document.querySelector(".tutorials").removeAttribute("id", "active");
    document.querySelector(".about").removeAttribute("id", "active");
    document.querySelector(".contanct").removeAttribute("id", "active");
  }
});
