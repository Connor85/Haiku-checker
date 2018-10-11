export class Haiku{
    constructor(lineOne){
        this.lineOne = lineOne;
        // this.lineTwo = lineTwo;
        // this.lineThree = lineThree;
    }

    findLetters(){
        let lineoneArr = this.lineOne.split("");
        // let lineTwoArr = lineTwo.split("");
        // let lineThreeArr = lineThree.split("");

        const vowels = ["a","e","i","o","u"]
        let vowelCount = 0;
        for(let i = 0; i < lineoneArr.length; i++){
            for(let j = 0; j < vowels.length; j ++){
            if(lineoneArr[i] === vowels[j]){
                vowelCount = vowelCount +1;
            }
        }
            // console.log(vowelCount);
        }
        return vowelCount;
    }
}