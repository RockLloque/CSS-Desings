const listItems = document.querySelectorAll(".list");

function activeLink() {
  listItems.forEach((item) => {
    item.classList.remove("active");
    this.classList.add("active");
  });
}

listItems.forEach((item) => {
  item.addEventListener("click", activeLink);
});
