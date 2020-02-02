
var stackArray = [];
function paranthesis(str) {
    for (let i = 0; i < str.length; i++) {
        const element = str[i];

        if (["(", ")"].indexOf(element) > -1) {
            stackArray.push(element);
        }
        stackArray.forEach((ele, index, arr) => {
            if (arr[index] == "(" && arr[index + 1] == ")" || arr[index] == ")" && arr[index + 1] == "(") {
                stackArray.pop();
                stackArray.pop();
            }
        })
    }
    if (stackArray.length != 0) {
        console.log(-1);
    }
    else {
        console.log(1);
    }
}


paranthesis("()()()()()()()()");