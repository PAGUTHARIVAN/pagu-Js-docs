const otpGenerator = (otp) => {
    if(otp === 'Resend Otp') {
        return Math.floor(100000 + Math.random() * 900000);
    }
};
console.log(otpGenerator('Resend Otp'));

const otpGenerator2 = (otp2) => {
    if(otp2 === 'Resend Opt') {
        return Math.floor(1000000 + Math.random() * 9000000);
    }
};

console.log(otpGenerator2('Resend Opt'));

const otpGen = (otp) => {
    if (otp === 'Resend') {
        return Math.floor(100000 + Math.random() * 900000);
    }
};

console.log(otpGen('Resend'));

const powering = Math.pow(2, 3);
const power = 2 ** 3;
console.log(powering);
console.log(power);

console.log(Math.sqrt(64));
console.log(8 * 8);
console.log(Math.abs(-45));