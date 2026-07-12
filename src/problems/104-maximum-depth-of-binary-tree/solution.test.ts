import { maximumDepth, TreeNode } from "./solution";

describe('Maximum Depth', () => {

    let tree1 = new TreeNode(0,
        new TreeNode(1),
        new TreeNode(3)
    );
    
    let flippedTree = new TreeNode(0,
        new TreeNode(3),
        new TreeNode(1)
    );
    
    let tree2 = new TreeNode(0,
        new TreeNode(1),
        new TreeNode(3,
            new TreeNode(2, 
                new TreeNode(5),
                new TreeNode(4)
            )
        )
    );
    
    let flippedTree2 = new TreeNode(0,
        new TreeNode(3, null,
            new TreeNode(2,
                new TreeNode(4),
                new TreeNode(5)
            )
        ),
        new TreeNode(1)
    );

    describe('Manual trace implementation with BFS', () => {
        test('should return the maximumDepth of a simple tree', () => {
            expect(maximumDepth(tree1)).toBe(2)
        });

        test('should return the maximumDepth of a more complex tree', () => {
            expect(maximumDepth(tree2)).toBe(4)
        });

        test('should return 1 for a single node', () => {
            expect(maximumDepth(new TreeNode(0))).toBe(1)
        })
    });
});

