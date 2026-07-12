import { sumOfLeftLeaves, TreeNode } from "./solution";

let tree = new TreeNode(0,
    new TreeNode(1),
    new TreeNode(3,
        new TreeNode(2, 
            new TreeNode(5),
            new TreeNode(4)
        )
    )
);

describe('Sum Of Left Leaves', () => {
    test('should return correct sum', () => {
        expect(sumOfLeftLeaves(tree)).toBe(6);
    });
});
