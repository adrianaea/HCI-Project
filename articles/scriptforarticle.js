const nav = document.querySelector(".navbar");
fetch("navforarticle.html")
  .then((res) => res.text())
  .then((data) => {
    nav.innerHTML = data;
  });

const footer = document.querySelector(".footer");
fetch("footerforarticle.html")
  .then((res) => res.text())
  .then((data) => {
    footer.innerHTML = data;
  });