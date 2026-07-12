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

export function maximumDepth(root: TreeNode | null): number {
    
    if (!root) return 0;
    let maxDepth = 0;
    let queue: [TreeNode | null, number][] = [[root, 1]];
    
    while (queue.length > 0) {
        const [curr,depth] = queue.shift()!;
        maxDepth = Math.max(maxDepth,depth);
        
        if (curr!.left) queue.push([curr!.left, depth+1]);
        if (curr!.right) queue.push([curr!.right, depth+1]);
    }

    return maxDepth;

}