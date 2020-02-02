
var returns;


class Stack {
    constructor(len) {
        this.len = len;
        this.numArray = [];
    }

    pop = () => {
        if (this.numArray.length != 0) {
            var x = this.numArray.pop();
            return x;
        }
        else {
            returns = -1;
            return returns;
        }
    }

    push = (item) => {
        if (this.numArray.length < this.len) {
            this.numArray.push(item);
            return this.numArray;
        }
        else {
            returns = -1;
            return returns;
        }
    }

}

const stack = new Stack(3);

console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.push(4));
console.log(stack.push(5));
console.log(stack.push(6));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
