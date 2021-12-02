const menuToggle = document.querySelector(".toggle");

menuToggle.onclick = () => {
  console.log("Toggles");
  menuToggle.classList.toggle("active");
};
