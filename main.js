const card1 = document.querySelector("#card1");
const card2 = document.querySelector("#card2");
const card3 = document.querySelector("#card3");


function Hide(arg, method) {
    if (method == "class") {
        document.getElementsByClassName(arg)[0].style.visibility = "hidden";
    } else {
        document.getElementById(arg).style.visibility = "hidden";
    }
    

}

function View(arg, method) {
    if (method == "class") {
        document.getElementsByClassName(arg)[0].style.visibility = "visible";
        
    } else {
        document.getElementById(arg).style.visibility = "visible";
    }
    
}

document.onkeydown = function(e) {
if(event.keyCode == 123) 
    {
        return false;}
    
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
        return false;}

    if(e.ctrlKey && e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)){
        return false;}
    
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
        return false;}
    
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
        return false;}
    
    }

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function openDialog() {
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
    dialog.style.visibility = 'visible';
    dialog.style.opacity = '1';
    Hide("MainScript", "class");

}

async function closeDialog() {
    overlay.style.opacity = '0';
    dialog.style.opacity = '0';
    setTimeout(function() {
        overlay.style.visibility = 'hidden';
        dialog.style.visibility = 'hidden';
        }, 300);
    View("MainScript", "class");
}

// Функция, выполняемая после загрузки страницы
async function init() {

    openButton = document.querySelector('.neonbutton');
    closeButton = document.querySelector('.close-button');
    overlay = document.querySelector('.overlay');
    dialog = document.querySelector('.dialog');

    openButton.addEventListener('click', openDialog);
    closeButton.addEventListener('click', closeDialog);
}


document.addEventListener('DOMContentLoaded', init);

// async function alertWidth() {
//     setInterval(() => {
//         Hide("alert-width", "class")
//     }, 5000);
// }
// document.addEventListener("DOMContentLoaded", alertWidth);
// var ButtonRegister = {enabled: false};



// function Main() {
//     if (ButtonRegister.enabled) {
//         Deactivate();
//     } else {
//         Activate();
//     }
// }

// function Deactivate() {
//     document.body.style.backgroundColor = "#02071b";
//     ButtonRegister.enabled = false;

// }

// function Activate() {
//     document.body.style.backgroundColor = "#3C0464";
//     ButtonRegister.enabled = true;

// }


function HideMainMenu(arg) {
    if (arg == 1) {
        Hide("MainMenu", "class");
    }
}

card1.addEventListener("click", function(){
    Hide("MainMenu", "class")
});

card2.addEventListener("click", function(){
    // Function for card 2
});

card3.addEventListener("click", function(){
    // Function for card 3
});