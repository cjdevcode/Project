
$(window).on('load', function(){
    'use strict';
    const imcont = $('#slider ul li').length;
    const widim = $('#slider ul li img').first().width();
    const total = (widim * imcont) + 'px';
    let cnt = 0;
    let pos = 0;
    $('#slider ul').css('width', total);

});