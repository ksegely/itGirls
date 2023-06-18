// Задание 2
function teachJS() {
    console.log("Я учу JavaScript!");
}

teachJS();

//Задание 3

let image = document.getElementById('cat');
console.log(image);

function nextImg() {
    image.src = "/assets/brown.jpg";
}
function preImg() {
    image.src = "/assets/white.jpg";
}