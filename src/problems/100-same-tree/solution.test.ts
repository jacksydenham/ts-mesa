import { isSameTree, manualBFS, manualDFS, TreeNode } from "./solution";

// Trees 1/2 match
const tree1 = new TreeNode(0,
    new TreeNode(1),
    new TreeNode(3)
)

const tree2 = new TreeNode(0,
    new TreeNode(1),
    new TreeNode(3)
)

const tree4 = new TreeNode(0,
    new TreeNode(1),
    new TreeNode(3,
        new TreeNode(2, null,
            new TreeNode(4)
        )
    )
)

describe('Same Tree', () => {
    describe('Simple DFS', () => {
        test('should return true on matching trees', () => {
            expect(isSameTree(tree1,tree2)).toBe(true)
        })

        test('should return false on mismatched trees', () => {
            expect(isSameTree(tree1,tree4)).toBe(false)
        })
    })
    describe('Manual BFS', () => {
        test('should return true on matching trees', () => {
            expect(manualBFS(tree1,tree2)).toBe(true)
        })

        test('should return false on mismatched trees', () => {
            expect(manualBFS(tree1,tree4)).toBe(false)
        })
    })

    describe('Manual DFS', () => {
        test('should return true on matching trees', () => {
            expect(manualDFS(tree1,tree2)).toBe(true)
        })

        test('should return false on mismatched trees', () => {
            expect(manualDFS(tree1,tree4)).toBe(false)
        })
    })
})