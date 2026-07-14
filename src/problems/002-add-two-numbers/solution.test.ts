import { addTwoNumbers, ListNode } from "./solution";

const list1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const list2 = new ListNode(5, new ListNode(6, new ListNode(4)));

describe('Add Two Numbers', () => {
    test('sample test case', () => {
        expect(addTwoNumbers(list1, list2)).toEqual(807);
    });
});
