const header = document.querySelector("header");
const headerNav = document.querySelector(".header__nav");

const handleMenuClick = (e) => {
  const target = e.target;
  if (
    target.classList.contains("hamburger") ||
    target.classList.contains("hamburger__line")
  ) {
    document.documentElement.classList.toggle("lock");
    headerNav.classList.toggle("nav_active");
  }
  if (
    target.classList.contains("header__nav") ||
    target.classList.contains("nav__link")
  ) {
    document.documentElement.classList.remove("lock");
    headerNav.classList.remove("nav_active");
  }
};

header.addEventListener("click", handleMenuClick);
