const imgs = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", 
                "6.jpg", "7.jpg", "8.jpg", "9.jpg"];

const nowImg = imgs[Math.floor(Math.random() * imgs.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${nowImg}`;

document.body.appendChild(bgImg);