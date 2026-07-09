import { containsDuplicate, containsDuplicateCM } from "./solution";

describe('Contains Duplicate', () => {
    describe('CD standard set-based solution', () => {
        test('Should return true if duplicate exists', () => {
            expect(containsDuplicate([1,2,3,4,4,5])).toBe(true);
        });

        test('Should return false on no duplicate', () => {
            expect(containsDuplicate([9,145,12,5])).toBe(false);
        })

        test('Shold return false when no values exist', () => {
            expect(containsDuplicate([])).toBe(false);
        })
    })

    describe('CD with sorted solution', () => {
        test('Should return true if duplicate exists', () => {
            expect(containsDuplicateCM([1,2,3,4,4,5])).toBe(true);
        });

        test('Should return false on no duplicate', () => {
            expect(containsDuplicateCM([9,145,12,5])).toBe(false);
        })

        test('Shold return false when no values exist', () => {
            expect(containsDuplicateCM([])).toBe(false);
        })
    });
});
