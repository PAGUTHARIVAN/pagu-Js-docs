const arrName = ['Pagutharivan'];
const arrLast = ['S'];
const unpack = arrName[0] + " " + arrLast[0];
const upcase = unpack.toUpperCase();
console.log(upcase);

const tostring = arrName.toString();
console.log(tostring);

const findMiddle = tostring[6].toUpperCase();
console.log(findMiddle);

const first = arrName.toString();
const slice = first.slice(0, 6);
const sliceLast = first.slice(7, 12);
console.log(slice);
const combinesName = slice + findMiddle + sliceLast;
console.log(sliceLast);
console.log(combinesName);