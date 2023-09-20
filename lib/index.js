"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const queue_1 = __importDefault(require("./queue"));
// lock that notifies when done unlocking the next waiter
class Lock {
    // "mutex" this code exists to prevent race conditions.
    // However, this isnt a real mutex so multiple worker threads can still mess this up but single thread concurrency should not be able to
    locked;
    waitingQ;
    constructor() {
        this.locked = false;
        this.waitingQ = new queue_1.default();
    }
    lock() {
        this.locked = true;
    }
    unlock() {
        this.locked = false;
        if (!this.waitingQ.isEmpty()) {
            (this.waitingQ.pop())();
        }
    }
    isLocked() {
        return this.locked;
    }
    wait() {
        return new Promise(res => {
            this.waitingQ.push(res);
        });
    }
}
exports.default = Lock;
