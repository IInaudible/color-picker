// const colors = ["green", "red", "rgb(133,122,200)", "#f15025"];
// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener("click", (e) => {
//     const randomNumber = getRandomNumber();
//     color.textContent = colors[randomNumber];
//     document.body.style.background = colors[randomNumber];
// })

// function getRandomNumber() {
//     return Math.floor(Math.random() * colors.length);
// }

$(document).ready(function() {
    const colors = ["green", "red", "rgb(133,122,200)", "#f15025"];
    const btn = $("#btn");
    const color = $(".color");

    btn.on("click", function(e) {
        const randomNumber = getRandomNumber();
        color.text(colors[randomNumber]);
        $("body").css("background-color", colors[randomNumber]);
    });

    function getRandomNumber() {
        return Math.floor(Math.random() * colors.length);
    }

});
