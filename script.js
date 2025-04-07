const nav = document.querySelector(".navbar");
fetch("/navbar.html")
  .then((res) => res.text())
  .then((data) => {
    nav.innerHTML = data;
  });
  
const footer = document.querySelector(".footer");
fetch("/footer.html")
  .then((res) => res.text())
  .then((data) => {
    footer.innerHTML = data;
  });
