class ListNode<T> {
    value: T;
    next: ListNode<T> | null = null;
    prev: ListNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

class DoublyLinkedList<T> {
    head: ListNode<T> | null = null;
    tail: ListNode<T> | null = null;
    length: number = 0;

    constructor() { }

    //Append
    append(value: T) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    // Pop
    pop(): T | undefined {
        if (!this.tail) {
            return undefined;
        }
        const temp = this.tail;  
        this.tail = this.tail.prev;
        if (this.tail) {
            this.tail.next = null;
        } else {
            this.head = null;
        }
        this.length--;
        return temp.value;
    }

    // Shift
    shift(): ListNode<T> | undefined {
        if (!this.head) {
            return undefined;
        }
        const temp = this.head;  
        this.head = this.head.next;
        if (this.head) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }
        this.length--;
        temp.next = null;
        return temp;
    }

    // Unshift
    unshift(value: T) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }
}

const myList = new DoublyLinkedList<number>();

// Test
myList.append(5);
myList.append(25);
myList.append(35);
myList.append(45);
myList.append(55);
myList.append(65);
myList.append(75);
myList.unshift(1);
