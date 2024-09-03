const typingTest = document.querySelector('.typing-text p');
const input = document.querySelector('.wrapper .input-field');
const time = document.querySelector('.time span b');
const mistakes = document.querySelector('.mistake span');
const wpm = document.querySelector('.wpm span');
const cpm = document.querySelector('.cpm span');
const btn = document.querySelector('button');


let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistake =  0;
let isTyping = false;

function loadParagraph(){
    const paragraph = ["The greatest glory in living lies not in never falling, but in rising every time we fall.",
     "The future belongs to those who believe in the beauty of their dreams.",
    "The only person you are destined to become is the person you decide to be.",
     "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."];

    const randomIndex = Math.floor(Math.random() *paragraph.length);
    typingTest.innerHTML = '';
    for(const char of paragraph[randomIndex]){
        typingTest.innerHTML += `<span>${char}</span>`;
    }
    typingTest.querySelectorAll('span')[0].classList.add('active');
    document.addEventListener('keydown',()=>input.focus);
    typingTest.addEventListener("click",()=>input.focus);
}

function initTyping(){

    const char = typingTest.querySelectorAll('span');
    const TypedChar = input.value.charAt(charIndex);
    if(charIndex < char.length && timeLeft > 0) {
        if(!isTyping){
            timer = setInterval(initTime,1000);
            isTyping = true;
        }
        if(char[charIndex].innerText ===  TypedChar){
            char[charIndex].classList.add('correct');
            console.log("correct");
        }else{
            mistake++;
            char[charIndex].classList.add('incorrect');
            console.log("incorrect");
        }
        charIndex++;
        char[charIndex].classList.add('active');
            console.log("incorrect");
        mistakes.innerText = mistake;
    }else{
        
    }
}

function initTime(){
    if(timeLeft>0){
        timeLeft--;
        time.innerText = timeLeft;

    }else{
        clearInterval(timer);
    }
}

input.addEventListener("input",initTyping);
loadParagraph();
