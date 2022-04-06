// const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "D", "E", "F"];
// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener("click", (e) => {
//     let hexColor = "#";
//     for (let i = 0; i < 6; i++) {
//         hexColor += hex[getRandomNumber()];
//     }

//     color.textContent = hexColor;
//     document.body.style.background = hexColor;
// })

// function getRandomNumber() {
//     return Math.floor(Math.random() * hex.length);
// }
$(document).ready(function() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "D", "E", "F"];
    const btn = $("#btn");
    const color = $(".color");

    btn.on("click", function(e) {
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[getRandomNumber()];
        }
        color.text(hexColor);
        $("body").css("background-color", hexColor);
    });

    function getRandomNumber() {
        return Math.floor(Math.random() * hex.length);
    }

});
