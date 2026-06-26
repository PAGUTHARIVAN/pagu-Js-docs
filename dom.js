const input = document.getElementById('input');
const result = document.getElementById('result');
const output = document.getElementById('output');
console.log(input);
console.log(input.value)


input.addEventListener('keyup', () => {
         result.textContent = 'Result: ' + input.value;
         result.style.color = 'limegreen';
})