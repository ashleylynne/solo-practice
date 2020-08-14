let snake = [  
    {x: 150, y: 150},  {x: 140, y: 150},  {x: 130, y: 150},  {x: 120, y: 150},  {x: 110, y: 150}
];

function drawSnakePart(snakePart) {  
    
    ctx.fillStyle = 'lightgreen';  ctx.strokestyle = 'darkgreen';
    ctx.fillRect(snakePart.x, snakePart.y, 10, 10);  ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function drawSnake() {  
    snake.forEach(drawSnakePart);
}

function advanceSnake() {  
    const head = {x: snake[0].x + dx, y: snake[0].y};
    snake.unshift(head);
    return snake.pop();
}