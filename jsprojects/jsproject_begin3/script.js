const threedots =  document.querySelector('.threedots');
const cut = document.querySelector('.document');
const line = document.querySelector('.cut');

threedots.addEventListener("click",drag);
line.addEventListener("click",opencut);

function drag(){
cut.style.width = '50vw';
}

function opencut(){
cut.style.width = '0vw';
}

