export function containerWithMostWater(height: number[]): number {

    let maxArea = 0;

    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        
        // We don't want to slap bang ops onto every index ref, so we cache the ref 
        // at the top of our loop and check they're defined.
        const leftH = height[left];
        const rightH = height[right];
        if (leftH === undefined || rightH === undefined) break;

        /** Lazy way to do address the issue is to use a coalesce op, eg:
         * const leftH = height[left] ?? 0;
         * const rightH = height[right] ?? 0;
        */

        const currArea = Math.min(leftH, rightH) * (right - left);
        maxArea = Math.max(maxArea, currArea);

        if (leftH < rightH) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}