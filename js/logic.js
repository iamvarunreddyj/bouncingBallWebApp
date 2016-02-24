// JQuery ready function
$(document).ready(function() {
    // Variables for X and Y co-ordinates
    var x = 150;
    var y = 150;
    var speedX = 2;
    var speedY = 4;
    
    // Getting the canavas element on the DOM
    var id=document.getElementById("circle");
    var canvas;
    
    // Variables for width and height of canvas element 
    var WIDTH; 
    var HEIGHT;

    // Draw the circle 
    function circle(x,y,r) {
        canvas.beginPath();
        canvas.arc(x, y, r, 0, Math.PI*2, true);
        canvas.closePath();
        canvas.fill();
    }

    // Draw the rectangle
    function rect(x,y,w,h) {
        canvas.beginPath();
        canvas.rect(x,y,w,h);
        canvas.closePath();
        canvas.fill();
    }
    
    // Clear canvas for re-draw
    function clear() {
        canvas.clearRect(0, 0, WIDTH, HEIGHT);
    }

    // Initialization function
    function init() {
        canvas = id.getContext("2d");
        WIDTH = $("#circle").width()
        HEIGHT = $("#circle").height()
        return setInterval(draw, 10);
    }

    // Draw function
    function draw() {
        clear();
        circle(x, y, 40);
        if (x + speedX > WIDTH || x + speedX < 0)
            speedX = -(2 + speedX);
        if (y + speedY > HEIGHT || y + speedY < 0)
            speedY = -(2 + speedY);
        x += speedX;
        y += speedY;
    }
    
    // Invoking the initialization function.
    init();
 
});