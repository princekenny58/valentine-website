function checkName() {
    let name = document.getElementById("nameInput").value.toLowerCase();
    if (name === "glory" || name === "sweetpea") {
        document.getElementById("nameInputPage").style.display = "none";
        document.getElementById("valentinePage").classList.remove("hidden");
    } else {
        alert("Only Glory or Sweetpea can enter! ❤️");
    }
}

function showConfetti() {
    document.body.innerHTML = "<h1>Yay! 🎉 I love you! ❤️</h1>";
}

function moveNoButton() {
    let button = document.getElementById("noButton");
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    button.style.position = "absolute";
    button.style.left = x + "px";
    button.style.top = y + "px";
}

function showMessage() {
    document.getElementById("noMessage").classList.remove("hidden");
}

function showImage(imageSrc) {
    document.getElementById("hoverImage").src = imageSrc;
    document.getElementById("hoverImage").classList.remove("hidden");
}

function hideImage() {
    document.getElementById("hoverImage").classList.add("hidden");
}
