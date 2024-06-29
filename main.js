console.log(`Welcome to my Calculator`)
let key = document.querySelectorAll(".key");
console.log(key)
let result = document.querySelector(".result")


key.forEach(function (e) {
    e.onclick = function (d) {
        let oper = result.innerHTML[0];
        let operfound = false;
        // console.log(`The value of the key is ${e.innerHTML}`)
        result.innerHTML += e.innerHTML
        if (e.innerHTML === "=") {
            let first = "";
            let second = "";
            for (let i = 0; i < result.innerHTML.length; i++) {
                oper = result.innerHTML[i];
                if (result.innerHTML[i] === "+" || result.innerHTML[i] === "X" || result.innerHTML[i] === "-" || result.innerHTML[i] === "/") {
                    operfound = true;
                    for (let j = i + 1; j < result.innerHTML.length; j++) {
                        second += result.innerHTML[j];
                    }
                    break;
                }
                first += result.innerHTML[i];
            }
            let f = parseInt(first);
            let l = parseInt(second);
            if (operfound) {
                if (oper === "+") {
                    result.innerHTML = f + l;
                }
                else if (oper === "-") {
                    result.innerHTML = f - l;
                }
                else if (oper === "X") {
                    result.innerHTML = f * l;
                }
                else if (oper === "/") {
                    result.innerHTML = f / l;
                }
                let num = +(result.innerHTML);
                let newNum = num.toPrecision(3);
                console.log(num)
                result.innerHTML = newNum;
            }
            else {
                result.innerHTML = f;
            }

        }
        if (e.innerHTML === "CE") {
            result.innerHTML = "";
        }
    }
})
// function calculate() {

//     return


// }
// key.forEach(button => {
//     let buttonValue = button.innerText;
//     button.addEventListener('click', function () { operation(buttonValue) })
// });

// function operation(buttonValue) {
//     if (buttonValue === '=') {
//         input.value = calculate(input.value);
//     } else {
//         input.value += buttonValue;
//     }
// }

// function calculate(expression) {
//     console.log(expression);
//     try {
//         return new Function('return ' + expression)();
//     } catch (error) {
//         return 'Malformed Operation';
//     }
// }