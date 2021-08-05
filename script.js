(function () {
    "use strict";
    const tabs = document.querySelectorAll('#tabs > ul > li > a');
    tabs.forEach(tab => { tab.addEventListener('click', selectTab); });
    function selectTab(event) {
        event.preventDefault();
        tabs.forEach(tab => { tab.removeAttribute('class'); });
        event.target.className = 'active';
        const thisTab = event.target.getAttribute('href');
        const thisContent = document.querySelector(thisTab);
        const oldTabContent = document.querySelector('.visible');
        oldTabContent.className = 'visuallyhidden';
        oldTabContent.addEventListener('transitionend', () => {
            oldTabContent.className = 'hidden';
            thisContent.className = 'visible visuallyhidden';
            setTimeout(() => {
                thisContent.classList.remove('visuallyhidden');
            }, 20);
        }, { capture: false, once: true, passive: false });
    }
}());
/* const tabs = document.querySelectorAll('#tabs > ul > li > a');

tabs.forEach(function(n){n.addEventListener('click', selTab)});

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
        cont.className = 'active visuallyhidden';
        setTimeout(function(){cont.classList.remove('visuallyhidden')}, 20);
    });

} */