let toggle = document.querySelector('#header .toggle-button');
let collapse = document.querySelectorAll('#header .collapse');

toggle.addEventListener('click', function(){
    collapse.forEach(col => col.classList.toggle('collapse-toggle'))
});

//fixed navbar
window.onscroll = function(){fixedFunction()};

let navbar = document.getElementById('header');

let fixed = navbar.offsetTop;

function fixedFunction(){
    if(window.pageYOffset >= fixed){
       navbar.classList.add('fixed') 
    }else{
       navbar.classList.remove('fixed') 
    }
}

