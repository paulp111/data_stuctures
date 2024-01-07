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

    // Append
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

    // Get
    get(index: number): ListNode<T> | null {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let current: ListNode<T> | null;
        if (index < this.length / 2) {
            current = this.head;
            for (let i = 0; i < index; i++) {
                current = current!.next;
            }
        } else {
            current = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                current = current!.prev;
            }
        }
        return current;
    }

    // Insert
    insert(index: number, value: T): boolean {
        if (index < 0 || index > this.length) {
            return false;
        }

        if (index === 0) {
            this.unshift(value);
            return true;
        }

        if (index === this.length) {
            this.append(value);
            return true;
        }

        const newNode = new ListNode(value);
        const beforeNode = this.get(index - 1);
        if (!beforeNode) {
            return false;
        }

        const afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        if (afterNode) {
            afterNode.prev = newNode;
        }

        this.length++;
        return true;
    }

    // Remove
    remove(index: number): T | undefined {
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        if (index === 0) return this.shift()?.value;
        if (index === this.length - 1) return this.pop();

        const nodeToRemove = this.get(index);

        if (nodeToRemove) {
            nodeToRemove.prev!.next = nodeToRemove.next;
            nodeToRemove.next!.prev = nodeToRemove.prev;

            this.length--;
            return nodeToRemove.value;
        }
    }

    // Reverse
    reverse() {
        let current = this.head;
        let prev = null, next = null;

        while (current !== null) {
            next = current.next;
            current.next = prev;
            current.prev = next;
            prev = current;
            current = next;
        }

        [this.head, this.tail] = [this.tail, this.head];
    }
}

const myList = new DoublyLinkedList<number>();

myList.append(5);
myList.append(25);
myList.append(35);
myList.append(45);
myList.append(55);
myList.append(65);
myList.append(75);
myList.unshift(1);


