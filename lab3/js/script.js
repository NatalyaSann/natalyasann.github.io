var canvas = document.createElement('canvas');
var loaded = [false, false, false,false];

canvas.width = 480;
canvas.height = 320;
context = canvas.getContext('2d');
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

function linesForCanvas (text, maxWidth) {
    var words = text.split(' ');
    var lines = [];

    var tempLine = '';

    words.forEach(function (value) {
        var newLine = tempLine + value + ' ';
        var newLineWidth = context.measureText(newLine).width;

        if (newLineWidth > maxWidth) {
            lines.push(tempLine);
            tempLine = value + ' ';
        } else {
            tempLine = newLine;
        }
    });

    lines.push(tempLine);

    return lines;
}

function drawText (text, marginLeft, marginRight, marginTop, marginBottom, lineHeight) {
    var maxWidth = canvas.width - marginLeft - marginRight;
    var maxHeight = canvas.height - marginTop - marginBottom;

    var centerXCanvas = canvas.width / 2;

    var lines = linesForCanvas(text, maxWidth);
    var listHeight = lines.length * lineHeight;

    if (listHeight > maxHeight) {
        return;
    }

    marginTop = marginTop + (maxHeight - listHeight) / 2;

    lines.forEach(function (value){
        context.fillText(value, centerXCanvas, marginTop);
        marginTop += lineHeight;
    });
}

function fillText(marginLeft, marginRight, marginTop, marginBottom, lineHeight) {
    if (!isLoaded(loaded)) {
        return;
    }
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=ru', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) {
            return;
        }

        if (xhr.status === 200) {
            context.font = 'italic 30px Arial';
            context.fillStyle = 'white';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            drawText(JSON.parse(xhr.response)['quoteText'], marginLeft, marginRight, marginTop, marginBottom, lineHeight);
        }
    };
    xhr.send();
}

function fillCanvas(x, y) {
    var img1 = getImage(x, y);
    img1.onload = function () {
        context.drawImage(img1, 0, 0, x, y);
        loaded[0] = true;
        fillText(20, 20, 10, 10, 30);
    };
    var img2 = getImage(canvas.width - x, y);
    img2.onload = function () {
        context.drawImage(img2, x, 0, canvas.width - x, y);
        loaded[1] = true;
        fillText(20, 20, 10, 10, 30);
    };
    var img3 = getImage(x, canvas.height - y);
    img3.onload = function () {
        context.drawImage(img3,0, y, x, canvas.height - y);
        loaded[2] = true;
        fillText(20, 20, 10, 10, 30);
    };
    var img4 = getImage(canvas.width - x, canvas.height - y);
    img4.onload = function () {
        context.drawImage(img4,x, y, canvas.width - x, canvas.height - y);
        loaded[3] = true;
        fillText(20, 20, 10, 10, 30);
    };
}

fillCanvas(200, 100);
