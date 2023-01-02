const keyBoard = document.getElementById("keyboard")
const message = document.getElementById("message")
const values = [undefined, undefined, undefined, undefined, undefined, undefined]
const numbers = []


const pin = prompt("Unesi pin od 6 znamenki (0-9):")

window.onload = () => {
    const pins = document.querySelector("#pins")
    values.forEach((value, index) => {
        let li = document.createElement("li")
        li.id = `dot${index}`
        pins.prepend(li)
    })
}

const renderDots = () => {
    values.forEach((value, index) => {
        let li = document.getElementById(`dot${index}`)
        if (value) {
            li.style.color = "#2CA6FF"
        }
        else {
            li.style.color = "#C4C4C4"
        }
    })
}

const mouseClick = (e) => {
    handlePinDots(e.value)
}

const correctPin = () => {
    keyBoard.remove()
    message.innerHTML = "PIN correct"
}
const wrongPin = () => {
    keyBoard.remove()
    message.innerHTML = "incorrect PIN"
}

window.addEventListener("keydown", (e) => {
    toggleKeyPressed(e.key, "keydown")
})

window.addEventListener("keyup", (e) => {
    toggleKeyPressed(e.key, "keyup")
})

const toggleKeyPressed = (key, event = "keydown" | "keyup") => {
    const button = document.getElementById(key)
    if (!button) {
        return
    }
    if (event === "keydown") {
        button.style.backgroundColor = "#2CA6FF"
        button.style.borderRadius = "50%"
        button.style.color = "#fff"
        handlePinDots(key)
    } else {
        button.style.backgroundColor = ""
        button.style.color = ""
    }
}

const handlePinDots = (value) => {
    if (numbers.length === 6)
        return

    numbers.push(value)
    values[numbers.length - 1] = value
    renderDots()
    if (numbers.length === 6) {
        if (pin === numbers.join("")) {
            correctPin()
        }
        else {
            wrongPin()
        }
    }
}
