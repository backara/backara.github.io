//board
var blockSize = 25;
var row = 20;
var cols = 20;
var board;
var context;

//snake head
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

var velocityX = 0;
var velocityY = 0;

var snakeBody = [];

let score = 0; // Sửa lỗi chính tả từ sroce thành score

var foodX;
var foodY;

var gameOver = false;

window.onload = function() {
    board = document.getElementById("board");
    board.height = row * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d");

    placeFood();
    document.addEventListener("keydown", changeDirection);
    document.getElementById("up").onclick = function() { setDirection(0, -1); };
    document.getElementById("down").onclick = function() { setDirection(0, 1); };
    document.getElementById("left").onclick = function() { setDirection(-1, 0); };
    document.getElementById("right").onclick = function() { setDirection(1, 0); };
    document.addEventListener("keydown", changeDirection);
    setInterval(update, 1000 / 7);
}

function update() {
    if (gameOver) {
        return;
    }

    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([snakeX, snakeY]);
        placeFood();
        score++; // Tăng điểm khi con rắn ăn thức ăn
    }

    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    context.fillStyle = "lime";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    if (snakeX < 0 || snakeX > cols * blockSize || snakeY < 0 || snakeY > row * blockSize) {
        gameOver = true;
        alert("Game Over!");
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            alert("Game Over!");
        }
    }

    // Hiển thị điểm trên màn hình
    context.fillStyle = "white";
    context.font = "20px Arial";
    context.fillText("Score: " + score, 5, 20);
}

function changeDirection(e) {
    if (e.code == "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.code == "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    }
    else if (e.code == "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    }
    else if (e.code == "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}

function setDirection(x, y) {
    if (x !== 0 && velocityX === 0) {
        velocityX = x;
        velocityY = 0;
    } else if (y !== 0 && velocityY === 0) {
        velocityX = 0;
        velocityY = y;
    }
}

function placeFood() {
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * row) * blockSize;
}
