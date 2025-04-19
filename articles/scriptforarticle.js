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
  
  /*-----Weekly Meals Page----*/
  function openModal() {
  document.getElementById("mealModal").style.display = "block";
}

function closeModal() {
  document.getElementById("mealModal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("mealModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};