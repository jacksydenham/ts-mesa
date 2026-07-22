import { productExceptSelf } from "./solution";

describe('Product except self', ()=> {
    test('should return array of except-self products', () => {
        expect(productExceptSelf([1,2,3,4])).toEqual([24,12,8,6]);
    }) 
})