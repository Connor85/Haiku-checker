import { Haiku } from '../src/haiku.js';

describe ('Haiku', function(){
    it('returns the correct number of vowels', function(){
        let testLine = new Haiku ("Hello");
        expect(testLine.findLetters()).toEqual(2);
    })

});