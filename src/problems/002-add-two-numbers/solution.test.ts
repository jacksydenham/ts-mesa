import { addTwoNumbers, addTwoNumbersReal, ListNode } from "./solution";

const list1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const list2 = new ListNode(5, new ListNode(6, new ListNode(4)));

const expectedList = new ListNode (7, new ListNode(0, new ListNode(8)));

describe('Add Two Numbers Alt', () => {
    test('sample test case', () => {
        expect(addTwoNumbers(list1, list2)).toEqual(807);
    });
});

describe('Real Add Two Numbers', () => {
    test('should return list of 7,0,8 for given lists 1/2', () => {
        expect(addTwoNumbersReal(list1, list2)).toStrictEqual(expectedList);
    });
    test('should return empty list when two empty lists are given', () => {
        expect(addTwoNumbersReal(new ListNode(), new ListNode())).toStrictEqual(new ListNode())
    });

    test('should return l2 when l1 is empty', () => {
        expect(addTwoNumbersReal(new ListNode(), list2)).toStrictEqual(list2)
    })
})
