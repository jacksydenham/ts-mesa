export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

// I read the questino wrong but got curious if my implementation would've worked lol...
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): number {

    let num1 = 0;
    let num2 = 0;

    let currentBase = 1;

    while (l1 || l2) {
        if (l1 !== null) {
            num1 += l1.val * currentBase;
        }
        if (l2 !== null) {
            num2 += l2.val * currentBase;
        }

        l1 = l1!.next;
        l2 = l2!.next
        currentBase *= 10;
    }
    return num1 + num2;
};