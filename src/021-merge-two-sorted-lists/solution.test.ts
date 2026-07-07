import { ListNode, mergeTwoSortedLists } from "./solution";

// same as reverse linked list, this should have a helper to create test case inputs, 
// but for a quick question this quick fix is fine
describe('Merge Two Sorted Lists', () => {
    test('Should return correctly merged list', () => {

        const list1 = new ListNode(1, 
            new ListNode(2,
                new ListNode(4)
            )
        );
        
        const list2 = new ListNode(1, 
            new ListNode(3,
                new ListNode(4)
            )
        );

        const expectedList = new ListNode(1,
            new ListNode(1,            
                new ListNode(2,
                    new ListNode(3,
                        new ListNode(4,
                            new ListNode(4, null)
                        )
                    )
                )
            )
        );
        expect(mergeTwoSortedLists(list1,list2)).toStrictEqual(expectedList);
    })

    test('Should return null when both input lists are null', () => {
        const list1 = null;
        const list2 = null;

        expect(mergeTwoSortedLists(list1,list2)).toBeNull;
    }) 

    test('should return only the present list when only one exists', () => {
        const list1 = null;
        const list2 = new ListNode(1);

        expect(mergeTwoSortedLists(list1,list2)).toStrictEqual(list2)
    })
})