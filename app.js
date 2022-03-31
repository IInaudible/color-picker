const colors = ["green", "red", "rgb(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", (e) => {
    const randomNumber = getRandomNumber();
    color.textContent = colors[randomNumber];
    document.body.style.background = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}