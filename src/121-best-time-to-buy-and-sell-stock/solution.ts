export function bestTimeToBuyAndSellStock(prices: number[]): number {

    let maxProfit = 0;

    let left = 0;

    for (let right = 1; right < prices.length; right++) {
        let currMax = prices[right]! - prices[left]!;
        maxProfit = Math.max(currMax, maxProfit);

        if (prices[right]! < prices[left]!) {
            left = right;
        }
    }

    return maxProfit;
}