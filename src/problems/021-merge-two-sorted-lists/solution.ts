export class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    } 

}

export function mergeTwoSortedLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

    const dummyHead = new ListNode(0, null);
    let curr = dummyHead;
    
    while (list1 && list2) {
        if (list1.val < list2.val) {
            curr.next = list1;
            curr = list1;
            list1 = list1.next
        } else {
            curr.next = list2;
            curr = list2;
            list2 = list2.next;
        }
    }

    if (list1) {
        curr.next = list1;
    } else if (list2) {
        curr.next = list2
    }

    return dummyHead.next;
}
