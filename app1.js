const add = (add) => {
    return add + add;
};
console.log(add(10));
//Email Hider //pagutharivan2004@gmail.com
const emailHider = (email) => {
    const atIndexOfEmail = email.indexOf("@");
    const separate = email.slice(0, atIndexOfEmail);
    const domain = email.slice(atIndexOfEmail);
    const firstLetter = separate[0];
    const lastLetter = separate[separate.length - 1];
    const middlePart = "*".repeat(separate.length - 1 );

    return firstLetter + middlePart + lastLetter + domain;

};
const email = 'pagutharivan@gmail.com';
console.log(emailHider(email)); //

//Emain Hider 2 // paguart2004@gmail.com

const emailHider2 = (email1) => {
    const email1AtIndex = email1.indexOf("@");
    const slicingTheFront = email1.slice(0, email1AtIndex);
    const domain1 = email1.slice(email1AtIndex);
    const firstLetterEmail2 = slicingTheFront[0];
    const lastLetterEmail2 = slicingTheFront[slicingTheFront.length - 1];
    const middlePart2 = "*".repeat(slicingTheFront.length - 1);

    return firstLetterEmail2 + middlePart2 + lastLetterEmail2 + domain1;
}

const email1 = 'paguart2004@gmail.com';
console.log(emailHider2(email1)); //

// Email Hider 3 // pagufake@gmail.com //

const emailHider3 = (email3) => {
    const findEmail3AtIndex = email3.indexOf("@");
    const firstPartSlice = email3.slice(0, findEmail3AtIndex);
    const domain3 = email3.slice(findEmail3AtIndex);
    const firstLetterEmail3 = firstPartSlice[0];
    const lastLetterEmail3 = firstPartSlice[firstPartSlice.length - 1];
    const middlePartEmail3 = "*".repeat(firstPartSlice.length - 1);

    return firstLetterEmail3 + middlePartEmail3 + lastLetterEmail3 + domain3;
}


const email3 = 'pagufake@gmail.com';
console.log(emailHider3(email3)); //

//Email Hider 4 //
const emailHider4 = (email4) => {
    const atIndexOfEmail4 = email4.indexOf("@");
    const firstpartOfEmail4 = email4.slice(0, atIndexOfEmail4);
    const domain4 = email4.slice(atIndexOfEmail4);
    const firstLetterOfEmail4 = firstpartOfEmail4[0];
    const lastLetterOfEmail4 = firstpartOfEmail4[firstpartOfEmail4.length - 1 ];
    const middlePartEmail4 = "*".repeat(firstpartOfEmail4.length - 1 );

    return firstLetterOfEmail4 + middlePartEmail4 + lastLetterOfEmail4 + domain4;
}


const email4 = 'pagutharivanecua23032@gmail.nct.in';
console.log(emailHider4(email4)); //

// Email Hider 5 // pagutharivanwebsite@gmail.com //

const emailHider5 = (email5) => {
    const atIndex = email5.indexOf("@");
    const firstHalf = email5.slice(0, atIndex);
    const domain5 = email5.slice(atIndex);
    const firstLetterOfEmail5 = firstHalf[0];
    const lastLetterOfEmail5 = firstHalf[firstHalf.length - 1];
    const middlePartOfEmail5 = "*".repeat(firstHalf.length - 1 );

    return firstLetterOfEmail5 + middlePartOfEmail5 + lastLetterOfEmail5 + domain5;
}

const email5 = 'pagutharivan20004@gmail.com';
console.log(emailHider5(email5));

const emailHider6 = (email6) => {
    const atIndex = email6.indexOf("@");
    const firstpart = email6.slice(0, atIndex);
    const domain6 = email6.slice(atIndex);
    const firstLetter = firstpart[0];
    const lastLetter = firstpart[firstpart.length - 1];
    const middlePart = "*".repeat(firstpart.length - 1);

    return firstLetter + middlePart + lastLetter + domain6;
}
const email6 = 'helloworld@gmail.com';
console.log(emailHider6(email6));


import { addition } from "./fundamental.js";
console.log(addition(100, 200));
