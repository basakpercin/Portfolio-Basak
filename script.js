const checkbox = document.getElementById("checkbox");
const navElement = document.getElementById("navElement");
const logoLink = document.getElementById("logoLink");
const homeLink = document.getElementById("homeLink");
const contactLink = document.getElementById("contactLink");
const checkboxSecond = document.getElementById("checkboxSecond");
const hamBar = [...document.getElementsByClassName("bar")];
const hamList = document.getElementById("hamList");
const homeHam = document.getElementById("homeHam");
const contactHam = document.getElementById("contactHam");
const iconImgList = [...document.getElementsByClassName("icon")];
const contactsLink = [...document.getElementsByClassName("contactLink")];


checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark-body");
  navElement.classList.toggle("dark-nav");
  logoLink.classList.toggle("dark-nav");
  homeLink.classList.toggle("dark-nav");
  contactLink.classList.toggle("dark-nav");

  hamList.classList.toggle("dark-nav");
  homeHam.classList.toggle("dark-nav");
  contactHam.classList.toggle("dark-nav");

  hamBar.forEach((bar) => bar.classList.toggle("dark-hamBar"));

  iconImgList.forEach((icon) => icon.classList.toggle("invertedIcon"));

  contactsLink.forEach((link) => link.classList.toggle("invertedContact"));
});

checkboxSecond.addEventListener("change", () => {
  document.body.classList.toggle("dark-body");
  navElement.classList.toggle("dark-nav");
  logoLink.classList.toggle("dark-nav");

  homeLink.classList.toggle("dark-nav");
  contactLink.classList.toggle("dark-nav");

  hamList.classList.toggle("dark-nav");
  homeHam.classList.toggle("dark-nav");
  contactHam.classList.toggle("dark-nav");

  hamBar.forEach((bar) => bar.classList.toggle("dark-hamBar"));

  iconImgList.forEach((icon) => icon.classList.toggle("invertedIcon"));

  contactsLink.forEach((link) => link.classList.toggle("invertedContact"));

});
