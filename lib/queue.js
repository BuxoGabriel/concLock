"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// basic queue class for lock class
class Queue {
    // next in line in queue
    first;
    // last in queue
    last;
    // num of elements in the queue
    length;
    /**
     * Initializes the queue to be empty no args
     */
    constructor() {
        this.first = undefined;
        this.last = undefined;
        this.length = 0;
    }
    /**
     * Checks if the queue is empty. Should be a prerequisite for popping queue
     * @returns {boolean} true if the queue is empty and false otherwise
     */
    isEmpty() {
        if (this.length == 0)
            return true;
        else
            return false;
    }
    /**
     * Pushes a value onto the queue
     * @param value the value that you would like to add to the queue
     */
    push(value) {
        let node = { val: value, next: undefined };
        if (this.isEmpty()) {
            this.first = node;
        }
        else {
            this.last.next = node;
        }
        this.last = node;
        this.length++;
    }
    /**
     * removes an item from the front of the queue.
     *
     * Expects queue to be non-empty. Can be checked with Queue.prototype.isEmpty()
     *
     * @returns the top item on the queue and undefined if the queue is empty
     */
    pop() {
        let val = this.first.val;
        this.first = this.first.next;
        this.length--;
        return val;
    }
}
exports.default = Queue;
