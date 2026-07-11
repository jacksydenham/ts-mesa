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

export function isSameTree(q: TreeNode | null, p: TreeNode | null): boolean {
    if (p === null && q === null) return true;
    if (p === null || q === null || p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

export function manualBFS(q: TreeNode | null, p: TreeNode | null): boolean {

    const queue: [TreeNode | null, TreeNode | null][] = [[p,q]];

    while (queue.length > 0) {
        const [currP, currQ] = queue.shift()!;

        if (currP === null && currQ === null) continue;
        if (currP == null || currQ == null || currP.val !== currQ.val) return false;

        queue.push([currP.left, currQ.left]);
        queue.push([currP.right, currQ.right]);
    }
    return true;
}

export function manualDFS(q: TreeNode | null, p: TreeNode | null): boolean {

    let stack: [TreeNode | null, TreeNode | null][] = [[q,p]];

    while (stack.length > 0) {
        const [currP, currQ] = stack.pop()!;

        if (currP === null && currQ === null) continue;
        if (currP === null || currQ === null || currP.val !== currQ.val) return false;
    
        stack.push([currP.left, currQ.left]);
        stack.push([currP.right, currQ.right]);
    }
    return true;
}
