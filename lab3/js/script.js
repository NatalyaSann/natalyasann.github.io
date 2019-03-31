var canvas = document.createElement('canvas');
var loaded = [false, false, false,false];

canvas.width = 480;
canvas.height = 320;
ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

function getImage(width, height) {
    var img = new Image();
    img.src = `https://source.unsplash.com/collection/1127163/${width}x${height}`;
    return img;
}

function isLoaded(arr) {
    return !arr.some(el => {
        return !el;
    });

}

function fillText() {
    if (!isLoaded(loaded)) {
        return;
    }
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=text&lang=ru', false);
    xhr.send();
    console.log(xhr.response);
    ctx.font = "italic 30pt Arial";
    ctx.fillText(xhr.response, canvas.width /2, canvas.height / 2);
}

function fillCanvas(x, y) {
    var img1 = getImage(x, y);
    img1.onload = function () {
        ctx.drawImage(img1, 0, 0, x, y);
        loaded[0] = true;
        fillText();
    };
    var img2 = getImage(canvas.width - x, y);
    img2.onload = function () {
        ctx.drawImage(img2, x, 0, canvas.width - x, y);
        loaded[1] = true;
        fillText();
    };
    var img3 = getImage(x, canvas.height - y);
    img3.onload = function () {
        ctx.drawImage(img3,0, y, x, canvas.height - y);
        loaded[2] = true;
        fillText();
    };
    var img4 = getImage(canvas.width - x, canvas.height - y);
    img4.onload = function () {
        ctx.drawImage(img4,x, y, canvas.width - x, canvas.height - y);
        loaded[3] = true;
        fillText();
    };
}

fillCanvas(200, 100);
