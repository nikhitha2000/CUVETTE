

function showRules() {
    var rulesDiv = document.querySelector('.rules'); // Select the rules div
    if (rulesDiv) {
        rulesDiv.style.visibility = 'visible'; // Hide the rules div
    } else {
        console.error('Element with class "rules" not found.');
    }
  }
  
  function hideRules() {
    var rulesDiv = document.querySelector('.rules'); // Select the rules div
    if (rulesDiv) {
        rulesDiv.style.visibility = 'hidden'; // Hide the rules div
    } else {
        console.error('Element with class "rules" not found.');
    }
}
function itemclick(event){
    var newContainer = document.querySelector('.user-selected');
    let computerContainer = document.querySelector('.computer-selected');
    var outputWrapper = document.querySelector('.selected-game-wrapper');
    hideGameElements();
    outputWrapper.style.display = 'flex';
    let closestItem = event.target.closest('.circle');

    if(closestItem){
        var clonedElement = closestItem.cloneNode(true);
        const userChoice = closestItem.getAttribute('id');
        console.log('---clonedElement--', userChoice);
        newContainer.appendChild(clonedElement);
        const computerChoice = getComputerChoice();
        console.log('-computerChoice', computerChoice);
        const computerItem = document.querySelector('#' + computerChoice);
        const computerCloned = computerItem.cloneNode(true);
        console.log('-computerItem', computerItem);
        computerContainer.appendChild(computerCloned);
        updateWinner(computerChoice, userChoice);
    }
}

function updateWinner(computerChoice, userChoice) {
    const winner = getWinner(computerChoice, userChoice);
    let resultsContainer = document.querySelector('.results');
    let outputText;
    if(winner === 0){
        outputText = 'Tie Up'
    } else if(winner === 1){
        outputText = 'You Win'
        const currentUserScore = parseInt(window.localStorage.getItem('userScore'));
        window.localStorage.setItem('userScore', currentUserScore + 1);
        showNextBtn();
    } else if(winner === -1){
        const currentComputerScore = parseInt(window.localStorage.getItem('computerScore'));
        window.localStorage.setItem('computerScore', currentComputerScore + 1);
        outputText = 'You Lost'
    } else {
        outputText = 'Invalid'
    }
    const output = `
    <div class="output">
        <h2>${outputText}</h2>
        ${winner ? `
            <h3>Against PC</h3>
            <button class="play-again" onClick="restartGame()">PLAY AGAIN</button>
            ` : '<button class="play-again" onClick="restartGame()">REPLAY</button>'}
    </div>
    `
    resultsContainer.innerHTML = output;
    updateScores();
}

function updateScores(){
    const computerScoreEl = document.querySelector('#computer-score');
    const userScoreEl = document.querySelector('#user-score');
    const computerScore = window.localStorage.getItem('computerScore');
    console.log('computerScore', computerScore);
    computerScoreEl.innerText = computerScore;
    userScoreEl.innerText = window.localStorage.getItem('userScore');
}

function showNextBtn() {
    const nextBtn = document.querySelector('#next-btn');
    nextBtn.style.display ='block';
}

function hideNextBtn() {
    const nextBtn = document.querySelector('#next-btn');
    nextBtn.style.display ='none'
}

function restartGame() {
    hideSelectedGameElements();
    hideWinningPage();
    const gameElements = document.querySelector('.game-elements');
    gameElements.style.display = 'flex';
    updateSelectedGameWrapper();
    hideNextBtn();
    showHeader();

}

function onNext() {
    hideHeader();
    hideGameElements();
    hideSelectedGameElements();
    showWinningPage();
    hideNextBtn();
}

function hideHeader() {
    const headerEl = document.querySelector('.header');
    headerEl.style.display = 'none';
}

function showHeader() {
    const headerEl = document.querySelector('.header');
    headerEl.style.display = 'flex';
}

function hideGameElements() {
    const gameElements = document.querySelector('.game-elements');
    gameElements.style.display = 'none';
}

function hideSelectedGameElements() {
    const selectedGameElements = document.querySelector('.selected-game-wrapper');
    selectedGameElements.style.display = 'none';
} 

function showWinningPage() {
    const winningPage = document.querySelector('.winning-page');
    winningPage.style.display = 'block';
}

function hideWinningPage() {
     const winningPage = document.querySelector('.winning-page');
    winningPage.style.display = 'none'
}


function updateSelectedGameWrapper() {
    var newContainer = document.querySelector('.selected-game-wrapper');
   const element = ` <div class="user-selected">
        <div>You Selected</div>
    </div>
    <div class="results">
        
    </div>
    <div class="computer-selected">
        <div>Computer Selected</div>
    </div>`
    newContainer.innerHTML = element;
}



function getWinner(computerChoice, userChoice) {
    // Define the rules of the game
    const rules = {
        rock: 'scissors',
        scissors: 'paper',
        paper: 'rock'
    };
    
    if (userChoice === computerChoice) {
        return 0;
    }

    // Determine the winner
    if (rules[userChoice] === computerChoice) {
        return  1;
    } else if (rules[computerChoice] === userChoice) {
        return -1;
    } else {
        return -2;
    }
}


function getComputerChoice(){
    const choices = ['rock','paper','scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    console.log(choices[randomChoice]);
    return choices[randomChoice];
}

function onLoad() {
    hideNextBtn();
    hideWinningPage();
    var newContainer = document.querySelector('.selected-game-wrapper');
    newContainer.style.display = 'none';
    updateSelectedGameWrapper();
    if(!window.localStorage.getItem('computerScore') && !window.localStorage.getItem('userScore') ){
        window.localStorage.setItem('computerScore', 0);
        window.localStorage.setItem('userScore', 0);
    }
    updateScores();
}

onLoad();