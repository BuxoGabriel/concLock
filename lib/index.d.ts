export default class Lock {
    private locked;
    private waitingQ;
    constructor();
    lock(): void;
    unlock(): void;
    isLocked(): boolean;
    wait(): Promise<void>;
}
