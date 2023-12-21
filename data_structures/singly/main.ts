/*class ListNode {
    value: number;
    next: ListNode | null;
    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    head: ListNode | null = null;
    tail: ListNode | null = null;
    length: number = 0;
    //Add Item at the end of the list
    append(value: number) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    //remove last item and set new tail
    pop() {
        //return undefiend wenn liste leer
        if (!this.head) {
            return undefined;
        }
        let pre: ListNode | null = null;
        let temp = this.head;
        //return knoten wenn nicht leer
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            this.length--;
            return temp;
        }
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail!.next = null;
        this.length--;
        return temp;
    }
    //shift methode / remove first item from list 
    shift() {
        if (!this.head) {
            return undefined;
        }
        const temp = this.head;
        this.head = temp.next;
        this.length--;
        if (this.length === 0) this.tail = null;
        return temp;
    }
    //add value at beginning
    unshift(value: number) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

        } else {
            newNode.next = this.head;
            this.head = newNode;
        };
        this.length++;
        return this;
    }

    // get a node from specific index
    get(index: number) {
        if (index < 0 || index >= this.length) return -1;
        let currentItem = this.head;
        let counter = 0;

        while (counter !== index) {
            currentItem = currentItem?.next as ListNode;
            counter++;
        }

        return currentItem;
    }
    //change the value of a node item with a specifix index
    set(value: number, index: number) {
        const node = this.get(index);
        if (node === -1) return false;
        node!.value = value;
        return true;
    }
    //add NODE on a specific index
    insert(value: number, index: number) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(value);
        if (index === this.length) return !!this.append(value);

        const prevNode = this.get(index - 1) as ListNode;
        const newNode = new ListNode(value);
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        this.length++;
        return true;
    }

    //remove node on a specific index
    remove(index: number) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift()?.value;
        if (index === this.length - 1) return this.pop()?.value
        const prevNode = this.get(index - 1) as ListNode;
        const removedNode = prevNode.next;
        prevNode.next = removedNode?.next || null;
        this.length--;
        return removedNode?.value;
    }

    //reverse the list
    reverse() {
        let node = this.head as ListNode | null;
        this.head = this.tail;
        this.tail = node;
        let next = null as ListNode | null;
        let prev = null as ListNode | null;
        while (node !== null) {
            next = node!.next;
            node!.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}


const myList = new SinglyLinkedList();
myList.append(5)
myList.append(25)
myList.append(35)
myList.append(45)
myList.append(55)
myList.append(65)
myList.append(75)
myList.pop();
const head = new ListNode(5);
head.next = new ListNode(10);
head.next.next = new ListNode(20);
console.log(head);*/