import { invertTree, invertTreeBFS, TreeNode } from "./solution";

describe('Invert Binary Tree', () => {

    let tree1: TreeNode;
    let flippedTree: TreeNode;
    let tree2: TreeNode;
    let flippedTree2: TreeNode;

    // We reinitalise each tree before tests as unlike with Same Tree, we're manipulating them.
    beforeEach(() => {

        tree1 = new TreeNode(0,
            new TreeNode(1),
            new TreeNode(3)
        );
        
        flippedTree = new TreeNode(0,
            new TreeNode(3),
            new TreeNode(1)
        );
        
        // Clearly this is painful to read. I imagine an interviewer may ask what's wrong with some code which contains this,
        // maybe it contains issues bbreaking tests, but even if it doesn't a prod test suite should have a helper to build 
        // trees for test input.
        tree2 = new TreeNode(0,
            new TreeNode(1),
            new TreeNode(3,
                new TreeNode(2, 
                    new TreeNode(5),
                    new TreeNode(4)
                )
            )
        );
        
        flippedTree2 = new TreeNode(0,
            new TreeNode(3, null,
                new TreeNode(2,
                    new TreeNode(4),
                    new TreeNode(5)
                )
            ),
            new TreeNode(1)
        );
    });

    describe('Self referenced implementation', () => {
        test('should return the flipped Tree', () => {
            expect(invertTree(tree1)).toStrictEqual(flippedTree)
        });
        test('should return the more complex flipped Tree', () => {
            expect(invertTree(tree2)).toStrictEqual(flippedTree2)
        });
    });

    describe('Manual trace implementation with BFS', () => {
        test('should return the flipped Tree', () => {
            expect(invertTreeBFS(tree1)).toStrictEqual(flippedTree)
        });

        test('should return the more complex flipped Tree', () => {
            expect(invertTreeBFS(tree2)).toStrictEqual(flippedTree2)
        });
    });
});
