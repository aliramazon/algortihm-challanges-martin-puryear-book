class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    #newNode(value) {
        return new Node(value);
    }

    push(value) {
        let newNode = this.#newNode(value);

        if (this.length === 0) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
        return ++this.length;
    }

    unshift(value) {
        let newNode = this.#newNode(value);

        if (this.length === 0) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        return ++this.length;
    }

    pop() {
        let popped = this.tail;
        if (!popped) return undefined;

        if (this.length === 1) {
            this.head = this.tail = null;
        } else {
            let current = this.head;
            while (current.next.next) {
                current = current.next;
            }
            current.next = null;
            this.tail = current;
        }

        return popped;
    }

    shift() {
        let shifted = this.head;
        if (!shifted) return undefined;

        if (this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
        }

        this.length--;
        return shifted;
    }
}
