// starting of animation part

let popup = document.getElementById("popup")
let popup1 = document.getElementById("menu")
let overlay = document.getElementById("overlay")
// let btn = document.getElementById("closepopup")
function openpopup(){
    popup1.classList.remove("openmenu");
    popup.classList.add("openpopup");
    overlay.style.visibility = "visible";
}

function colsepopup(){
    popup.classList.remove("openpopup");
}

function openmenu(){
    popup.classList.remove("openpopup");
    // sigpop.classList.remove("openregpopup");
    popup1.classList.add("openmenu");
    overlay.style.visibility="visible";

}

function closemenu(){
    popup1.classList.remove("openmenu");
    popup.classList.remove("openpopup");
    // sigpop.classList.remove("openregpopup");
    overlay.style.visibility = "hidden";    
}

// let sigpop = document.getElementById("regpopup");
//  function opensigpop(){
//     sigpop.classList.add("openregpopup");
// }
// function closesigpop(){
//     popup.classList.remove("openregpopup");
// }


// endinging of animation part


// starting of the header part

var header = document.getElementById("head");
document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if (scroll_position>200){
        header.style.backgroundColor='rgb(9, 49, 9)';
    }
    else{
        header.style.backgroundColor='rgba(252, 252, 252, 0.247)';


    }
});


// ending signup page
// ending of validation part
    
