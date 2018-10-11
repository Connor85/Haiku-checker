export class Haiku{
    constructor(lineOne){
        this.lineOne = lineOne;
        // this.lineTwo = lineTwo;
        // this.lineThree = lineThree;
    }

    findLetters(){
        let lineOneArr = this.lineOne.split("");
        // let lineTwoArr = lineTwo.split("");
        // let lineThreeArr = lineThree.split("");
        if (lineOneArr[lineOneArr.length -1] === 'e'){
            lineOneArr.pop();
        }
        console.log(lineOneArr)
        const vowels = ["a","e","i","o","u"]
        let vowelCountLineOne = 0;
        for(let i = 0; i < lineOneArr.length; i++){
            for(let j = 0; j < vowels.length; j ++){
            if(lineOneArr[i] === vowels[j]){
                vowelCountLineOne = vowelCountLineOne +1;
            }
        }
            // console.log(vowelCountLineOne);
        }
         return vowelCountLineOne;
    }
}