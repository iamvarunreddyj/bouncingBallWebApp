// JQuery ready function
$(document).ready(function() {
    // Variables for X and Y speeds;
    var speedX = 5;
    var speedY = 5;
    
    // Variables for width and height of canvas element 
    var WIDTH; 
    var HEIGHT;

    // Initialization function
    function init(canvasID, color, x, y, fps) {

        WIDTH = $("#"+ canvasID +"").width();
        HEIGHT = $("#"+ canvasID +"").height();        
        
        //Create a stage by getting a reference to the canvas
        stage = new createjs.Stage(canvasID);
        //Create a Shape DisplayObject.
        object = new createjs.Shape();
        drawCircle(object, x, y, color);
        //Add Shape instance to stage display list.
        stage.addChild(object);  
        
        createjs.Ticker.on("tick", tick);
        createjs.Ticker.setFPS(fps);
        
    }
    
    
    // Draw the circle 
    function drawCircle(canvas, x, y, color) {
        canvas.graphics.beginFill(color).drawCircle(x, y, 40);
    }

    // Tick function
    function tick(event) {
        
        if (object.x > WIDTH)
            speedX =- 5;
        else if (object.x < 0)
            speedX =+ 5;
        if (object.y > HEIGHT)
            speedY =- 5;
        else if (object.y < 0)
            speedY =+ 5;
        object.x += speedX;
        object.y += speedY;

        //Update stage will render next frame
        stage.update(event);
    }
    
    // Invoking the initialization function.
    init("circle", "red", 10, 10, 160 );

});