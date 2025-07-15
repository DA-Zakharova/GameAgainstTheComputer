const input = document.querySelector(".userAnswer");
const btn = document.querySelector(".btn");
const answer = Math.floor((Math.random() * 20) + 1);

input.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
        play();
    }
})

btn.addEventListener("click", play);

function play() {
    const userNumber = document.querySelector(".userAnswer").value;
    if (userNumber < 1 || userNumber > 20) {
        Swal.fire({
        icon: "error",
        title: "Ой!",
        text: "Введи число от 1 до 20.",
        });
    }

    else if (isNaN(userNumber)) {
        Swal.fire({
        icon: "error",
        title: "Ой!",
        text: "Нужно ввести число.",
        });
    }

    else {
        if (userNumber < answer) {
            Swal.fire("Попробуй число повыше!", "Компьютер пока побеждает");
        }
        else if (userNumber > answer) {
            Swal.fire("Попробуй число пониже!", "Компьютер пока побеждает");
        }
        else {
            Swal.fire({
            title: "Ура! Победа!",
            imageUrl: "victory.jpg",
            imageWidth: 500,
            imageHeight: 300,
            imageAlt: "Custom image"
            });
        }
    }
}