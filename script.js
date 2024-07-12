let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
a=Math.floor(Math.random()*1000)+100;
setInterval(f3, 3000);
i=0;
function f3(){
    document.getElementById("nd").innerHTML = a+i;
    i+=1;

}

setInterval(f1, 3000);

function f1(){
    document.getElementById("na").innerHTML = Math.floor(Math.random()*10000)+1000;
    }
b=Math.floor(Math.random()*10000)+1000;
setInterval(f4, 3000);
i=0;
function f4(){
    document.getElementById("nr").innerHTML = b+i;
    i+=1;
    }

    

setInterval(f2, 3000);

function f2(){
     document.getElementById("nh").innerHTML = Math.floor(Math.random()*100)+10;
    }


