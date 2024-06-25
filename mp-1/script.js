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
