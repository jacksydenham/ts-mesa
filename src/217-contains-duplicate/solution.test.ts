import { containsDuplicate } from "./solution";
describe('Contains Duplicate', () => {
    test('Should return true if duplicate exists', () => {
        expect(containsDuplicate([1,2,3,4,4,5])).toBe(true);
    });

    test('Should return false on no duplicate', () => {
        expect(containsDuplicate([9,145,12,5])).toBe(false);
    })

    test('Shold return false when no values exist', () => {
        expect(containsDuplicate([])).toBe(false);
    })
});
