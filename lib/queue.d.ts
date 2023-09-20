export default class Queue<T> {
    private first;
    private last;
    private length;
    /**
     * Initializes the queue to be empty no args
     */
    constructor();
    /**
     * Checks if the queue is empty. Should be a prerequisite for popping queue
     * @returns {boolean} true if the queue is empty and false otherwise
     */
    isEmpty(): boolean;
    /**
     * Pushes a value onto the queue
     * @param value the value that you would like to add to the queue
     */
    push(value: T): void;
    /**
     * removes an item from the front of the queue.
     *
     * Expects queue to be non-empty. Can be checked with Queue.prototype.isEmpty()
     *
     * @returns the top item on the queue and undefined if the queue is empty
     */
    pop(): T;
}
