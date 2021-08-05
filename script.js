
const tabs = document.querySelectorAll('#tabs > ul > li > a');

tabs.forEach(function(n){n.addEventListener('click', selTab);});

function selTab(e){
    e.preventDefault();
    tabs.forEach(function(x){x.removeAttribute('class');});
    e.target.className = 'active';
    const attr = e.target.getAttribute('href');
    const cont = document.querySelector(attr);
    const old = document.querySelector('.visible');
    old.className = 'visuallyhidden';
    old.addEventListener('transitionend', function() {
        old.className = 'hidden';
        cont.className = 'visible visuallyhidden';
        setTimeout(function(){
            cont.classList.remove('visuallyhidden')}, 20);
        },{capture: false, once:true, passive: false});

}