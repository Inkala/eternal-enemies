'use strict';

function Enemy(canvas, randomY) {
  this.canvas = canvas;
  this.ctx = canvas.getContext('2d');
  this.x = this.canvas.width;
  this.y = randomY;
  this.velocity = 3;
  this.direction = -1;
  this.color = 'red';
  this.height = 10;
  this.width = 10;
}

Enemy.prototype.move = function() {
  this.x = this.x + this.direction * this.velocity;
};

Enemy.prototype.draw = function() {
  this.ctx.fillStyle = this.color;
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
};
