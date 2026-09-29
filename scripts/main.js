const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/hamtaro.webp") {
        myImage.setAttribute("src", "images/hamtaro2.webp");
    } else {
        myImage.setAttribute("src", "images/hamtaro.webp");
    }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hamtaro is safe, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = 'Hamtaro is safe, ${storedName}';
}

myButton.addEventListener("click", () => {
    setUserName();
});