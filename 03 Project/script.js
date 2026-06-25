const input = document.querySelector("#password")
const strength = document.querySelector(".strength")

input.addEventListener("input", function (e) {
    let password = e.target.value.trim(' ')



    let isCapital = false, isSmall = false, isNumber = false, isSpecialCharacter = false

    let score = 0

    for (let i = 0; i < password.length; i++) {
        let ch = password[i]
        if (ch == " ") continue
        score++
        if ('A' <= ch && ch <= 'Z') isCapital = true
        else if ('a' <= ch && ch <= 'z') isSmall = true
        else if ('0' <= ch && ch <= '9') isNumber = true
        else isSpecialCharacter = true
    }

    if ((score > 8) && isCapital && isSmall && isNumber && isSpecialCharacter) {
        strength.textContent = 'Strong'
        strength.style.color = 'green'
        return
    } else {
        strength.textContent = 'Weak'
        strength.style.color = 'red'
        return
    }

})