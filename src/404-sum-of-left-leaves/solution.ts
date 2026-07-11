export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

export function sumOfLeftLeaves(root: TreeNode | null): number {

    if (!root) return 0;

    let count = 0;
    const queue: TreeNode[] = [root];

    while (queue.length > 0) {
        const curr = queue.shift()!;
        const currLeft = curr.left;

        if (currLeft) {
            if (currLeft.left === null && currLeft.right === null) count += currLeft.val;
            queue.push(currLeft)  
        }
        if (curr.right) queue.push(curr.right)
    }

    return count;
};