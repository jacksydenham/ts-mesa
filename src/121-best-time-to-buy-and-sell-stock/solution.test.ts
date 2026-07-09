import { bestTimeToBuyAndSellStock } from "./solution";

describe('Best Time to Buy and Sell Stock', () => {

    test('Should return the maximum profit', () => {
        expect(bestTimeToBuyAndSellStock([7,1,5])).toBe(4);
    })
})