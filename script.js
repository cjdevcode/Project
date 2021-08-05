const tabs = document.querySelectorAll('#tabs > ul > li > a');
for( let i = 0; i < tabs.length; i++){
    tabs[i].addEventListener('click', selTab)
}

function selTab(e){
    e.preventDefault();
    for (let i = 0; i < tabs.length; i++){tabs[i].removeAttribute('class');}
    e.target.className = 'active';
}