let originalCanvas = document.getElementById('originalCanvas');

let changedCanvas = document.getElementById('changedCanvas');

ctx = originalCanvas.getContext('2d');
ctx2 = changedCanvas.getContext('2d');

pic = new Image();
pic.src = "image.jpg";
pic.onload = function () {
    ctx.drawImage(pic, 0, 0);
};


pic2 = new Image();
pic2.src = "image.jpg";
pic2.onload = function () {
    ctx2.drawImage(pic2, 0, 0);
};
changedCanvas.style.filter = "brightness(150%)";