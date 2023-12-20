let func = document.getElementsByClassName("func");
let output = document.getElementById("output")
let clear = document.getElementById("clear")
let cal = document.getElementById("cal")
let a = 0
let b = 0


for (const key in func) {
    if (func.hasOwnProperty(key)) {
        console.log(func[key]);
        func[key].addEventListener("click", () => {
            output.value += func[key].innerHTML
        });
    }
}

clear.addEventListener("click", () => {
    output.value = ""
})
cal.addEventListener("click", () => {
    outputvalue = eval(output.value)
    output.value = outputvalue
})
