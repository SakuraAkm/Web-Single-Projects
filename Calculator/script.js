const one = document.getElementById("1")
const two = document.getElementById("2")
const three = document.getElementById("3")
const four = document.getElementById("4")
const five = document.getElementById("5")
const six = document.getElementById("6")
const sever = document.getElementById("7")
const eight = document.getElementById("8")
const nine = document.getElementById("9")
const zero = document.getElementById("0")
const minus = document.getElementById("minus")
const divide = document.getElementById("divide")
const multiply = document.getElementById("multiply")
const plus = document.getElementById("plus")
const equal = document.getElementById("=")
const dot = document.getElementById(".")
const percentage = document.getElementById("percentage")
const square = document.getElementById("square")
const deleteAllCE = document.getElementById("delete-all")
const deleteC = document.getElementById("delete")
const result = document.getElementById("result")
const calculationsList = document.getElementById("calculations-list")

const buttons = [one, two, three, four, five, six, sever, eight, nine, zero, plus, minus, divide, multiply, dot, square]
const Colors = ["green", "yellow", "red", "orange", "purple", "blue"]
let signPresent = false

buttons.forEach(button => {
    if(button == plus || button == multiply || button == divide){

        button.onclick = () => {
            if(!signPresent && result.value != "" && result.value != "-"){
                result.value += " " + button.innerText + " "
                signPresent = true
            }
        }
        

    } else if( button == minus){

        button.onclick = () => {
            if(result.value == ""){
                result.value += button.innerText
            }else if(!signPresent && result.value != "-"){
                result.value += " " + button.innerText + " "
                signPresent = true
            }
        }
        

    }else if (button == square){

        button.onclick = () => {
            if(!signPresent){
                result.value = button.innerText + " " + result.value
                signPresent = true
            }
        }

    } else {
        button.onclick = () => result.value += button.innerText
    }
})

function displayCalculation(arrResult){
    signPresent = false

    let newList = document.createElement("li")
    let newHr = document.createElement("hr")
    newList.innerText = arrResult.join(" ") + " = " + result.value
    calculationsList.insertAdjacentElement("afterbegin", newHr)
    calculationsList.insertAdjacentElement("afterbegin", newList)
}

equal.addEventListener("click", () => {
    let arrResult = result.value.split(" ")
    let randNum = Math.floor(Math.random()*6)

    Colors.forEach(color => result.classList.remove(color))
    result.classList.add(Colors[randNum])
    
    console.log(arrResult)

    if(arrResult.length > 2 && arrResult[2] != ''){
        if(arrResult[1] == "+"){
            result.value = parseFloat(arrResult[0]) + parseFloat(arrResult[2])
        } else if (arrResult[1] == "-"){
            result.value = parseFloat(arrResult[0]) - parseFloat(arrResult[2])
        } else if (arrResult[1] == "x"){
            result.value = parseFloat(arrResult[0]) * parseFloat(arrResult[2])
        } else if (arrResult[1] == "÷"){
            result.value = parseFloat(arrResult[0]) / parseFloat(arrResult[2])
        }

        displayCalculation(arrResult)
        

    }  else if (arrResult[0] == "√"){
        result.value = Math.sqrt(arrResult[1])

        displayCalculation(arrResult)
    }
    
})

deleteAllCE.addEventListener("click", () => {
    signPresent = false
    result.value = ""
})

deleteC.addEventListener("click", () => {
    let resultArr = result.value.split("")
    let popArr = resultArr.pop()

    if(popArr == " "){
        result.value = result.value.slice(0, -3)
        signPresent = false
    } else {
        result.value = result.value.slice(0, -1)
    }
    
})

percentage.onclick = () => result.value = "You are Gay"



