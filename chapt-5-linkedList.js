class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    #length;
    constructor() {
        this.head = null;
        this.tail = null;
        this.#length = 0;
    }

    get length() {
        return this.#length;
    }

    #newNode(value) {
        return new Node(value);
    }

    push(value) {
        let newNode = this.#newNode(value);

        if (this.#length === 0) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
        return ++this.#length;
    }

    unshift(value) {
        let newNode = this.#newNode(value);

        if (this.#length === 0) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        return ++this.#length;
    }

    pop() {
        let popped = this.tail;
        if (!popped) return undefined;

        if (this.#length === 1) {
            this.head = this.tail = null;
        } else {
            let current = this.head;
            while (current.next.next) {
                current = current.next;
            }
            current.next = null;
            this.tail = current;
        }
        this.#length--;

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

        this.#length--;
        return shifted;
    }

    remove(value) {
        let current = this.head;
        if (!current) return false;

        if (current.value === value) {
            this.shift();
            return true;
        } else {
            while (current.next && current.next.value !== value) {
                current = current.next;
            }
            if (!current.next) return false;
            current.next = current.next.next;
            if (!current.next) {
                this.tail = current;
            }
            this.#length--;
        }
        return true;
    }

    reverse() {
        let current = this.head;
        let prev = null;
        let nextNode;

        while (current) {
            nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
        }
        [this.head, this.tail] = [this.tail, this.head];
        return this;
    }

    search(value) {
        let current = this.head;
        if (!current) return false;

        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
}
