
const dv = document.getElementById('div');
/* setTimeout(function(){dv.setAttribute('class', 'two')},2000); */
/* setTimeout(() => dv.setAttribute('class', 'two'), 1000); */
let cur = 'one';
function rotator() {
    if (cur === 'one') {
        setTimeout(function () {
            dv.className = 'two';
            cur = 'two';
            rotator();
        }, 2000);
    } else {
        setTimeout(function () {
            dv.className = 'one';
            cur = 'one';
            rotator();
        }, 2000);

    }
}
rotator();