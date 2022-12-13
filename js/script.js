console.log("Hellooooo dwa kropka zero"
);

let js__button = document.querySelector(".js__button");
let mainBody = document.querySelector(".mainBody");

js__button.addEventListener("click", () => {
    mainBody.classList.toggle("color")

    if (mainBody.classList.contains("color")) {
        js__button.innerText = "OFF";
    } else {
        js__button.innerText = "ON";
    }
});


