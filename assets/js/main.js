// Navbar Mobile Screen Menu ================================

function add() {
  let nav = document.querySelector("ul");
  nav.classList.add("active");
  let mobileMenu = document.querySelector(".mobile_menu");
  mobileMenu.classList.add("click");
  let closeMenu = document.querySelector(".close_menu");
  closeMenu.classList.remove("click");
}
function remove() {
  let nav = document.querySelector("ul");
  nav.classList.remove("active");
  let mobileMenu = document.querySelector(".mobile_menu");
  mobileMenu.classList.remove("click");
  let closeMenu = document.querySelector(".close_menu");
  closeMenu.classList.add("click");
}

// Navbar Mobile Screen Menu ================================
