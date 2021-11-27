const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
// const bgImage = document.createElement("img");
// document.body.appendChild(bgImage);
const imageSrc = `img/${chosenImage}`;

const bodyImage = document.querySelector("body");
bodyImage.style.backgroundImage = `url(img/${chosenImage})`;
