import { linkedListCycle, ListNode } from "./solution";

const noLoop = new ListNode(0, 
    new ListNode(1,
        new ListNode(2)
    )
)

// little awkward...
const nodeToLoop = new ListNode(3)
const hasLoop = new ListNode(0,
    new ListNode(1,
        new ListNode(2, nodeToLoop)
    )
);
nodeToLoop.next = hasLoop;

describe('Linked List Cycle', () => {
    test('should return false on no loop', () => {
        expect(linkedListCycle(noLoop)).toBe(false)
    });

    test('should return true if loop exists', () => {
        expect(linkedListCycle(hasLoop)).toBe(true);
    })
});
