var numArrayDefined = [1, 2, 3, 4, 5];
var peek;

class Queue {
    constructor(len) {
        this.len = len;
        this.numArray = [];
    }


    enqueue(item) {
        var enqueueVar;
        if (this.numArray.length < this.len) {
            return this.numArray.unshift(item);
        }
        else {
            enqueueVar = -1;
            return enqueueVar;
        }
    }

    dequeue() {
        if (this.numArray.length != 0) {
            var dequeueVar;
            dequeueVar = this.numArray.pop();
            return dequeueVar;
        }
        else {
            dequeueVar = -1;
            return dequeueVar;
        }
    }

}

const queue = new Queue(3);
console.log(queue.enqueue("constantine"));
console.log(queue.enqueue("JohnWick"));
console.log(queue.enqueue("Neo"));
console.log(queue.enqueue("boogeyMan"));
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
