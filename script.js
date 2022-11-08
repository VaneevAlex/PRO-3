const list = document.querySelectorAll(".list");

function activeLink() {
  list.forEach((el) => el.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((el) => el.addEventListener("click", activeLink));
