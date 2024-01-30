const $ = document;
const mainLine = $.querySelector(".mainLine");
const mobileMenu = $.querySelector(".mobileMenu");
let isMenuOpen = false;
mainLine.addEventListener("click", () => {
  if (!isMenuOpen) {
    mainLine.classList.add("activeMenu");
    mobileMenu.style.display = "flex";
    mainLine.style.backgroundColor = "transparent";
    isMenuOpen = true;
  } else {
    mainLine.classList.remove("activeMenu");
    mobileMenu.style.display = "none";

    mainLine.style.backgroundColor = "#000";

    isMenuOpen = false;
  }
});

