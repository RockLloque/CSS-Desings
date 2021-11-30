const show = (option) => {
  document.querySelector(".textBox").value = option;
};

let dropdown = document.querySelector(".dropdown");
dropdown.onclick = () => {
  dropdown.classList.toggle("active");
};
