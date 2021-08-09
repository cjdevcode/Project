
window.addEventListener('load', function () {
    const sldcont = document.querySelectorAll('#slider-wrapper ul li').length;
    const sldwidth = document.querySelector('#slider-wrapper').offsetWidth;
    const total = sldcont * sldwidth + 'px';
    const slider = document.querySelector('#slider-wrapper ul');
    const nxt = document.querySelector('#next');
    const pre = document.querySelector('#prev');
    let count = 0;
    let leftpos = 0;
    slider.style.width = total;
    nxt.addEventListener('click', function (e) {
        e.preventDefault();
        count++
        if (count === sldcont) { count = 0; }
        leftpos = `-${sldwidth * count}px`;
        slider.style.left = leftpos;
    });
    pre.addEventListener('click', function (e) {
        e.preventDefault();
        count--
        if (count < 0) { count = sldcont - 1 }
        leftpos = `-${sldwidth * count}px`;
        slider.style.left = leftpos;
    });

});