const body = document.querySelector("body");

const rain = () => {
  const amountDrops = 100;
  for (let i = 0; i < amountDrops; i++) {
    const drop = document.createElement("i");
    const size = Math.random() * 5;
    const posX = Math.floor(Math.random() * window.innerWidth);
    const delay = Math.random() * -20;
    const duration = 1 + Math.random() * 5;
    drop.style.width = `${0.2 + size}px`;
    drop.style.left = `${posX}px`;
    drop.style.animationDelay = `${delay}s`;
    drop.style.animationDuration = `${duration}s`;
    body.appendChild(drop);
  }
};

rain();
