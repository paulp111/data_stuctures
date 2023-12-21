var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.next = null;
        this.prev = null;
        this.value = value;
    }
    return ListNode;
}());
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // Append
    DoublyLinkedList.prototype.append = function (value) {
        var newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    };
    // Pop
    DoublyLinkedList.prototype.pop = function () {
        if (!this.tail) {
            return undefined;
        }
        var temp = this.tail;
        this.tail = this.tail.prev;
        if (this.tail) {
            this.tail.next = null;
        }
        else {
            this.head = null;
        }
        this.length--;
        return temp.value;
    };
    // Shift
    DoublyLinkedList.prototype.shift = function () {
        if (!this.head) {
            return undefined;
        }
        var temp = this.head;
        this.head = this.head.next;
        if (this.head) {
            this.head.prev = null;
        }
        else {
            this.tail = null;
        }
        this.length--;
        temp.next = null;
        return temp;
    };
    // Unshift
    DoublyLinkedList.prototype.unshift = function (value) {
        var newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    };
    return DoublyLinkedList;
}());
var myList = new DoublyLinkedList();
// Test
myList.append(5);
myList.append(25);
myList.append(35);
myList.append(45);
myList.append(55);
myList.append(65);
myList.append(75);
myList.unshift(1);
