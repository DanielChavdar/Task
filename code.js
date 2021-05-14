drawImage('originalCanvas', 'image.jpg', 100);
drawImage('changedCanvas', 'image.jpg', 150);

function drawImage(canvasName, filename, brightness) {
    let canvas = document.getElementById(canvasName);
    let ctx = canvas.getContext('2d');

    let pic = new Image();
    pic.src = filename;
    pic.onload = function () {
        ctx.drawImage(pic, 0, 0);
    };

    canvas.style.filter = `brightness(${brightness}%)`;
};