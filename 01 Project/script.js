const first = document.querySelector("#first")
const second = document.querySelector("#second")
const result = document.getElementById("result")
const button = document.getElementById("button")

button.addEventListener("click", function () {

    if (first.value.length == 0 || second.value.length == 0) return



    let firstPerson = first.value
    let secondPerson = second.value
    let score = 0


    for (let i = 0; i < firstPerson.length; i++) {
        if (secondPerson.includes(firstPerson[i])) {
            score++;
        }
    }

    let percentage = Math.floor((score / firstPerson.length) * 100);

    result.classList.add('result_style')

    if (percentage <= 30) {
        result.innerHTML = ` ${percentage} % ❤️‍🩹</br>
        Not a great match 😅 </br>
        You two might have different vibes and personalities. But who knowzs? Sometimes opposites attract!`
    } else if (30 < percentage >= 60) {
        result.innerHTML = `${percentage}% 😊<br>
        Could work 🙂<br>
        There are some good signs here. With a little effort and understanding, this connection could grow stronger.`; z
    } else if (percentage <= 80) {
        result.innerHTML = `${percentage}% ❤️<br>
        Good match ❤️<br>
        You seem to share a nice bond and positive energy. There's definitely potential for something special.`;
    }
    else {
        result.innerHTML = `${percentage}% 💕<br>
        Perfect match 💕<br>
        Wow! The stars seem to be on your side. You both look like a dream team made for each other.`;
    }


    first.value = ""
    second.value = ""

})