var canvas = document.getElementById('canvas');
var W = canvas.width;
var H = canvas.height;

var ctx = canvas.getContext('2d');
ctx.strokeStyle = 'white';

var point = { x: W / 2, y: H / 2 };
var lastPoint = { x: W / 2, y: H / 2 };

var range = 6;

function nextPosition() {
    'use strict';

    return (Math.floor(Math.random() * (range * 2 + 1)) - range);
}

function draw() {
    'use strict';

    ctx.beginPath();
    ctx.moveTo(lastPoint.x, lastPoint.y);
    ctx.lineTo(point.x, point.y);
    ctx.stroke();
    ctx.closePath();

    lastPoint.x = point.x;
    lastPoint.y = point.y;

    point.x += nextPosition();
    point.y += nextPosition();

    if(point.x < 0 || point.x > W ||
        point.y < 0 || point.y > H) {

        ctx.clearRect(0, 0, W, H);

        point.x = W / 2;
        point.y = H / 2;
        lastPoint.x = W / 2;
        lastPoint.y = H / 2;
    }

    window.requestAnimationFrame(draw);
}

draw();
