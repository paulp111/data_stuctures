class QueueNode {
    value: number;
    next: QueueNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    first: QueueNode | null;
    last: QueueNode | null;
    size: number;

    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val: number) {
        const newNode = new QueueNode(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            if (this.last) {
                this.last.next = newNode;
            }
            this.last = newNode;
        }
        this.size++;
        return this.size;
    }

    dequeue(): number | null {
        if (!this.first) return null;
        
        const temp = this.first;
        this.first = this.first.next;
        
        if (!this.first) {
            this.last = null;
        }
        this.size--;
        
        return temp.value;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); 
console.log(queue.dequeue()); 
console.log(queue.dequeue());
