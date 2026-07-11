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

export function invertTree(root: TreeNode | null): TreeNode | null {

    if (!root) return null;

    if (root.left === null && root.right === null) return root;

    const tempLeft = root.left;
    root.left = root.right;
    root.right = tempLeft;

    invertTree(root.left);
    invertTree(root.right);

    return root;
}

export function invertTreeBFS(root: TreeNode | null): TreeNode | null {
    
    if (!root) return null;

    const queue: TreeNode[] = [root];

    while (queue.length > 0) {
        const curr = queue.shift()!;
                
        const tempLeft = curr.left;
        curr.left = curr.right;
        curr.right = tempLeft;

        if (curr.left) queue.push(curr.left)
        if (curr.right) queue.push(curr.right)
    }

    return root;
}