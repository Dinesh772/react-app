import {add} from './SampleUtils'
describe('add tests',()=>{
    it('should return sum of two numbers',()=>{
        expect(add(1,2)).toBe(3);
        
    });
    it('should add negative numbers',()=>{
        expect(add(2,-2)).toBe(0);
    })
    it('should add two negative numbers',()=>{
        expect(add(-2,-2)).toBe(-4);
    })
});