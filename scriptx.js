
$(window).on('load', function(){
    'use strict';
    const imcont = $('#slider ul li').length;
    const widim = $('#slider ul li img').first().width();
    const total = (widim * imcont) + 'px';
    let cnt = 0;
    let pos = 0;
    $('#slider ul').css('width', total);
    $('#next').click(function(){
        cnt++;
        if (cnt === imcont){
            cnt = 0;
        }
        pos = `-${cnt*widim}px`;
        $('#slider ul').animate({left: pos}, 700, 'easeInQuad');
    });
    
    $('#previous').click(function(){
        cnt--;
        if (cnt < 0){
            cnt = imcont-1;
        }
        pos = `-${cnt*widim}px`;
        $('#slider ul').animate({left: pos}, 700, 'easeInQuad');
    });
});