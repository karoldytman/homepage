{
    const welcome = () => {
        console.log("Hellooooo"
        );
    };

    const onChangeBackgroundClic = () => {
        const mainBody = document.querySelector(".mainBody")
        const js__button = document.querySelector(".js__button");
        mainBody.classList.toggle("color")
       
        if (mainBody.classList.contains("color")) {
            js__button.innerText = "OFF";
        } else {
            js__button.innerText = "ON";
        }
       
    };

    const init = () => {
        const js__button = document.querySelector(".js__button");
        js__button.addEventListener("click", onChangeBackgroundClic);

        welcome();
    };
    init();

};



