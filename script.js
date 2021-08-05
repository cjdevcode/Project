const tabs = document.querySelectorAll('#tabs > ul > li > a');
/* for( let i = 0; i < tabs.length; i++){
    tabs[i].addEventListener('click', selTab);
} */
tabs.forEach(function(n){n.addEventListener('click', selTab)});

function selTab(e){
    e.preventDefault();
    /* for (let i = 0; i < tabs.length; i++){tabs[i].removeAttribute('class');} */
    tabs.forEach(function(x){x.removeAttribute('class');});
    e.target.className = 'active';
    const attr = e.target.getAttribute('href');
    const cont = document.querySelector(attr);
    const old = document.querySelector('.visible');
    old.className = 'visuallyhidden';
    old.addEventListener('transitionend', function() {
        old.className = 'hidden';
        cont.className = 'active visuallyhidden';
        setTimeout(function(){cont.classList.remove('visuallyhidden')}, 20);
    });
    
}