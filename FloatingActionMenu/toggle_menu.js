const menuToggle = document.querySelector(".menu_toggle");
const navigation = document.querySelector(".navigation");

menuToggle.onclick = () => {
  navigation.classList.toggle("active");
};
