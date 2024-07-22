const button = document.getElementById('btn');
const Output = document.querySelector(".output");

const quote = [
     "The greatest glory in living lies not in never falling, but in rising every time we fall.",
     "The future belongs to those who believe in the beauty of their dreams.",
    "The only person you are destined to become is the person you decide to be.",
     "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."
];

btn.addEventListener('click',check);

function check() {
    console.log("Checking...");
    let random = Math.floor(Math.random()*quote.length);
    Output.textContent =  quote[random];
}