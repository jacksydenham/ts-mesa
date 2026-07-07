import { reverse } from 'node:dns';
import { reverseList, ListNode } from './solution';

// Ideally we have some sort of array-to-list function so we can test thoroughly without 
// manual list setup, but I don't see it as worth pursuing on for an easy question like this

// manual head & reverse creation
const head = new ListNode (1,
    new ListNode(2,
        new ListNode(3,
            new ListNode(4,
                new ListNode(5)
            )
        )
    )
)

const headReverse = new ListNode (5,
    new ListNode(4,
        new ListNode(3,
            new ListNode(2,
                new ListNode(1)
            )
        )
    )
)

describe('Reverse Linked List', () => {
    test('Reverse is applied correctly', () => {
        expect(reverseList(head)).toStrictEqual(headReverse)
    })

    test('Should handle empty lists, returning null (init prev)', () => {
        const input = new ListNode();
        expect(reverseList(input)).toStrictEqual(input)
    })
})