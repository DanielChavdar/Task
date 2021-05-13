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

    canvas.style.filter = brightness($ {
        brightness
    } % );
};



// let originalCanvas = document.getElementById('originalCanvas');

// let changedCanvas = document.getElementById('changedCanvas');

// ctx = originalCanvas.getContext('2d');
// ctx2 = changedCanvas.getContext('2d');

// pic = new Image();
// pic.src = "image.jpg";
// pic.onload = function () {
//     ctx.drawImage(pic, 0, 0);
// };


// pic2 = new Image();
// pic2.src = "image.jpg";
// pic2.onload = function () {
//     ctx2.drawImage(pic2, 0, 0);
// };
// changedCanvas.style.filter = "brightness(150%)";