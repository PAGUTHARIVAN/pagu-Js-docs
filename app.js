let age = 20;
if (age >= 20) {
    console.log('You are eligible to vote');
} else {
    console.log('You are not eligible to vote');
}

let time = 14;
if (time < 12) {
    console.log('Good morning');
} else {
    console.log('Good afternoon');
}

const marks = (mark) => {
    if (mark >= 90) {
        return 'A Grade';
    } else if (mark >= 80) {
        return 'B Grade';
    } else if (mark >= 70) {
        return 'C Grade';
    } else {
        return 'Fail';
    }
}
console.log(marks(60));

//swith statements

const examEligbity = (attendancePercentage) => {
    switch(attendancePercentage) {
        case 100:
            return `Your are Elgible`;
            break;
        case 99:
            return `Your are Elgible`;
            break;
        case 98:
            return `Your are Elgible`;
            break;
        case 97:
            return `Your are Elgible`;
            break;
        case 96:
            return `Your are Elgible`;
            break;
        case 95:
            return `Your are Elgible`;
            break;
        case 94:
            return `Your are Elgible`;
            break;
        case 93:
            return `Your are Elgible`;
            break;
        case 92:
            return `Your are Elgible`;
            break;
        case 91:
            return `Your are Elgible`;
            break;
        case 90:
            return `Your are Elgible`;
            break;
        case 89:
            return `Your are Elgible`;
            break;
        case 88:
            return `Your are Elgible`;
            break;
        case 87:
            return `Your are Elgible`;
            break;
        case 86:
            return `Your are Elgible`;
            break;
        case 85:
            return `Your are Elgible`;
            break;
        case 84:
            return `Your are Elgible`;
            break;
        case 83:
            return `Your are Elgible`;
            break;
        case 82:
            return `Your are Elgible`;
            break;
        case 81:
            return `Your are Elgible`;
            break;
        case 80:
            return `Your are Elgible`;
            break;
        case 79:
            return `Your are Elgible`;
            break;
        case 78:
            return `Your are Elgible`;
            break;
        case 77:
            return `Your are Elgible`;
            break;
        case 76:
            return `Your are Elgible`;
            break;
        case 75:
            return `Your are Elgible`;
            break;
        case 74:
            return `Your are not Eligible`;
            break;
        default:
            return `Enter your percentage`;
    }
}

console.log(examEligbity(77));

const getVowelCount = (sentence) => {
    let count = 0;
    const vowels = "aeiouAEIOU";

    for (let i = 0; i < sentence.length; i++) {
        if (vowels.includes(sentence[i])) {
            count++;
        }
    }
    return count;
}

const getSpecialCharaters = (chars) => {
    let charCount = 0;
    const specChars = "/@#$%^&*()\+";

    for (let i = 0; i < chars.length; i++) {
        if(specChars.includes(chars[i])) {
            charCount++;
        }
    }
    return charCount;
}

console.log(getSpecialCharaters("iam@the#$onlyOne8&^(+&"));
console.log(getVowelCount("Apples are tasty fruits"));


const getNumbers = (sentences) => {
    let numCount = 0;
    const nums = "1234567890";

    for (let i = 0; i < sentences.length; i++) {
        if (nums.includes(sentences[i])) {
            numCount++;
        }
    }
    return numCount;
}
console.log(getNumbers('Hello ima pagutharivan 234 ht is 230948 is 7883 i839'));

//consonants
const conso = (sentences) => {
    let count = 0;
    const consonants = "bcdfghklmnpqrstvwxyzBCDFGHKLMNPQRSTVWXYZ";

    for (let i = 0; i < sentences.length; i++) {
        if(consonants.includes(sentences[i])) {
            count++;
        }
    }
    return count;
}
console.log(conso('Hello everyone how are you'));

const consons = (sentence) => {
    let counts = 0;
    const consonan = "bcdfghklmnpqrstvwxyzBCDFGHKLMNPQRSTVWXYZ";

    for (const con of sentence) {
        if (consonan.includes(con)) {
            counts++;
        }
    }
    return counts;
}
console.log(consons("Hello every body how are you today and how its going on "));

const getWordCount = (sentence) => {
    const wordsArray = sentence.split(" ");
    return wordsArray.length;
};

console.log(getWordCount("Hello my dear brothers and sisters how are you all todya"));

const getwordsCount = (words) => {
    const wordsA = words.split(" ");
    return `It's contains : ${wordsA.length} words`;
}

console.log(getwordsCount("Today is my bithday you know"));

const stringName = 'Hello bro how are you';
const countstr = stringName.split(" ");
const result = countstr.length;
console.log(result);

function getWordCounting(sentence) {
    let count = 1;

    for (const char of sentence) {
        if(char === " ") {
            count++;
        }
    }
    return count;
}
console.log(getWordCounting('Hello bro how are you'));


const checkLengthAndTotal = (sentence) => {
    if (sentence.trim() === "") {
        return 0;
    }
    
    let count = 1;

    for (const char of sentence) {
        if(char === " ") {
            count++;
        }
    
    }
    return count;
}

console.log(checkLengthAndTotal("what are you doing?"));


const checkingAll = (sentence) => {
    if (sentence.trim() === "") {
        return 0;
    }

    let wordCount = 1;
    let specialCharCount = 0;
    let vowelCount = 0;
    let consonantCounts = 0;
    let lettCount = 0;

    const speciChars = "~!@#$%^&*()_+{}|?><";
    const vowelCounts = "aeiouAEIOU";
    const consonantCount = "bcdfghklmnpqrstvwxyzBCDFGHKLMNPQRSTVWXYZ";

    for ( let i = 0; i < sentence.length; i++) {
        let char = sentence[i];

        if (char === " ") {
            wordCount++;
        }
        else {
            lettCount++;
        }

        if (speciChars.includes(char)) {
            specialCharCount++;
        } else if (vowelCounts.includes(char)) {
            vowelCount++;
        } else if (consonantCount.includes(char)) {
            consonantCounts++
        }
    }

    return `The Total word count is : ${wordCount}
The Total special Character count : ${specialCharCount}
The Total vowel count is : ${vowelCount}
The Total consonant count is : ${consonantCounts}
The Total letterCount is : ${lettCount}`;


};

console.log(checkingAll("How are you what you want ?"));


const checker = (sentence) => {
    if(sentence === "") {
        return 0;
    }

    let wCount = 1;
    let letCount = 0;
    let specialChaCount = 0;
    let vowelCount = 0;
    let consonantCount = 0;

    const specialChars = "~!@#$%^&*()_+{}|?><";
    const vowelChars = "aeiouAEIOU";
    const consoChars = "bcdfghklmnpqrstvwxyzBCDFGHKLMNPQRSTVWXYZ"

    for (let i = 0; i < sentence.length; i++) {
        let check = sentence[i];

        if (check === " ") {
            wCount++;
        } else {
            letCount++;
        }

        if (specialChars.includes(check)) {
            specialChaCount++;
        } else if (vowelChars.includes(check)) {
            vowelCount++;
        } else if (consoChars.includes(check)) {
            consonantCount++;
        }
    }

    return 
    `The total Word Count is : (${wCount})
     The total Letter Count is : (${letCount})
     The total Vowel Count is : (${vowelCount})
     The Total SpecialCharacter is : (${specialChaCount})
     The Total Consonant Count is : (${consonantCount})`;
}

checker("I am Pagutharivan and Your Name ?");


const analyzeSentence = (sentence) => {
    if (sentence === "") {
        return 0;
    }

    let wcount = 1;
    let letcount = 0;
    let vcount = 0;
    let ccount = 0;
    let scount = 0;

    const vowels = "aeiouAEIOU";
    const special = "~!@#$%^&*()_+{}|><?:";
    const consonant = "bcdfghklmnpqrstvwxyzBCDFGHKLMNPQRSTVWXYZ";

    for (let i = 0; i < sentence.length; i++) {
        let analysis = sentence[i];

        if (analysis === " ") {
            wcount++;
        } else {
            letcount++
        }

        if (vowels.includes(analysis)) {
            vcount++;
        } else if (special.includes(analysis)) {
            scount++;
        } else if (consonant.includes(analysis)) {
            ccount++;
        }
    }
    return 
    `Word count : ${wcount}
     Letter count : ${letcount}
     Vowel count : ${vcount}
     Consonant count : ${ccount}
     SpecialCharacter count : ${scount}`;
};

console.log(analyzeSentence("Nythh th si ihd83 hhsd0u4js099#$$$"));

//Javascript arrays
let arr = [];
console.log(arr);
console.log(Array.isArray(arr));

let arr1 = [];
arr1.push("pagu", "pagu2");
console.log(arr1);

let array2 = new Array();
console.log(Array.isArray(array2));

let arr3 = ["Apple", "Banana", "Grapes", "Tomato", "Pappaya"];
console.log(arr3.length);
const arrsplice = arr3.splice(1, 1, 'Mango');
console.log(arrsplice);
console.log(arr3);
const rme = arr3.splice(2, 1);
console.log(arr3);

let arr4 = [100, 200, 300, 400, 500, 600, 700];
const accessf = arr4[0];
const lastA = arr4[arr4.length - 1];
console.log(accessf);
console.log(lastA);

arr4[0] = 'Pagu1';
arr4[1] = 'Pagu2';
arr4[2] = 'Pagu3';
arr4[3] = 'Pagu4';
arr4[4] = 'Pagu5';
arr4[5] = 'Pagu6';
arr4[6] = 'Pagu7';

console.log(arr4);

arr4.push("Pagu8", "Pagu9", "Pagu10");
arr4.unshift("Push-3", "Push-2", "Push-1", "Push0");
console.log(arr4);

arr4.pop();
arr4.shift();
console.log(arr4);
const len = arr4.length;
console.log(len);

//Increase and decreasing the length
console.log(arr4.length);
console.log(arr4);

arr4.push("Pagu10", "Pagu11", "Pagu12");
console.log(arr4);
arr4[9] = "Pagu15";
arr4[10] = "Pagu16";
arr4[11] = "Pagu17";
console.log(arr4);

for (let i = 0; i < arr4.length; i++) {
    console.log(arr4[i]);
}

//array for each loop
let arr5 = ['apple', 'mango', 'banana', 'cherry', 'pappaya'];

arr5.forEach(function myfunc(x) {
    console.log(x);
})

const programmingLanguages = ["java", "Python", "Kotlin", "C++", "C"];
programmingLanguages.forEach(x => {
    console.log(x);
    
});

let ar1 = ['Mango '];
let ar2 = ['Orange '];
let ar3 = ['Grapes'];

const com = ar1 + ar2 + ar3;
console.log(com);

let concateArray = ar1.concat(ar2, ar3);
console.log(concateArray);

let conv = concateArray.toString().split(" ");
console.log(conv);

//freecodecamp labs
function addCrewMember(crew, astronaut) {
    for (let member of crew) {
        if (member.id === astronaut.id) {
            console.log("Duplicate ID: " + astronaut.id);
            return;
        }
    }
}

let arryasofArray = ['leetcode', 'codechef', 'coderank', 'codeforces'];
const accessLastArray = arryasofArray[arryasofArray.length - 2];
console.log(accessLastArray);

arryasofArray.forEach(m => {
    console.log(m);
    
});

const leng = arryasofArray.length;
console.log(leng);

const increase = arryasofArray;
increase.length = 4;
console.log(increase);

const numbersArrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
console.log(numbersArrays);

for (let i = 0; i < numbersArrays.length; i++) {
    console.log(numbersArrays[i]);
}

const arrayConversion = numbersArrays.toString();
console.log(arrayConversion);

const createObj = {
    myNameIs = 'pagu',
    myAgeIs = 21,
    myCityIs = 'Tokyo'
}

const { myNameIs, myAgeIs, myCityIs} = createObj;
console.log(myAgeIs);