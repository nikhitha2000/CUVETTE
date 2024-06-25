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
function itemclick(){
getComputerChoice();
}
function getComputerChoice(){
    const choices = ['rock','paper','scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    console.log(choices[randomChoice]);
    return choices[randomChoice];
}