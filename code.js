
let example = document.getElementById('example');

    ctx = example.getContext('2d');
    pic = new Image();
    pic.src = "image.jpg";
    pic.onload = function(){
        ctx.drawImage(pic, 0, 0);
    };


    let example2 = document.getElementById('example2');

    ctx2 = example2.getContext('2d');
    pic2 = new Image();
    pic2.src = "image.jpg";
    pic2.onload = function(){
        ctx2.drawImage(pic2, 0, 0);
    };
example2.style.filter = "brightness(150%)";