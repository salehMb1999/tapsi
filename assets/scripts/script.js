const $ = document;
const mainLine = $.querySelector(".mainLine");

let isMenuOpen = false;
mainLine.addEventListener("click", () => {
  if (!isMenuOpen) {
    mainLine.classList.add("activeMenu");
    mainLine.style.backgroundColor = "transparent";
    isMenuOpen = true;
  } else {
    mainLine.classList.remove("activeMenu");
    mainLine.style.backgroundColor = "#000";

    isMenuOpen = false;
  }
});
