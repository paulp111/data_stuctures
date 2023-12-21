var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.value = value;
        this.next = null;
    }
    return ListNode;
}());
var SinglyLinkedList = /** @class */ (function () {
    function SinglyLinkedList() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //Add Item at the end of the list
    SinglyLinkedList.prototype.append = function (value) {
        var newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    };
    //remove last item and set new tail
    SinglyLinkedList.prototype.pop = function () {
        //return undefiend wenn liste leer
        if (!this.head) {
            return undefined;
        }
        var pre = null;
        var temp = this.head;
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
        this.tail.next = null;
        this.length--;
        return temp;
    };
    return SinglyLinkedList;
}());
var myList = new SinglyLinkedList();
myList.append(5);
/*myList.append(25)
myList.append(35)
myList.append(45)
myList.append(55)
myList.append(65)
myList.append(75)
myList.pop();
/*const head = new ListNode(5);
head.next = new ListNode(10);
head.next.next = new ListNode(20);
console.log(head);*/ 
