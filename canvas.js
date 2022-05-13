function Canvas2D() {
    this.canvas = document.getElementById('screen');
    this.canvasContext = this._canvas.getContext('2d');
}

Canvas2D.prototype.clear = function() {
    this.canvasContext.clearRect(0,0,this._canvas.width,this._canvas.height);
}

Canvas2D.prototype.drawImage = function(image, position) {
    this._canvasContext.drawImage(image, position.x, position.y);
}

let Canvas = new Canvas2D;

let image = new Image();
image.src = 'background.png';



setTimeout(() => {
    Canvas.drawImage(image, {x:0,y:0});
}, 1000);

