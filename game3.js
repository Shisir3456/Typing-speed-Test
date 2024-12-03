const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Game assets
const rocketImg = new Image();
rocketImg.src = "./assets/rocket.png";

const astronautImg = new Image();
astronautImg.src = "./assets/astronaut.png";

const bulletImg = new Image();
bulletImg.src = "./assets/bullet.png";

const explosionImg = new Image();
explosionImg.src = "./assets/explosion.gif";

const bgImg = new Image();
bgImg.src = "./assets/space-bg.jpg";

// Variables
let score = 0;
let level = 1;
let astronauts = [];
let bullets = [];
let gameRunning = true;

// Rocket Object
const rocket = {
    x: canvas.width / 2 - 30,
    y: canvas.height - 120,
    width: 60,
    height: 100,
    speed: 20,
};

// Astronaut Class
class Astronaut {
    constructor(x, y, word) {
        this.x = x;
        this.y = y;
        this.word = word;
        this.width = 60;
        this.height = 60;
        this.speed = Math.random() * 2 + level;
    }

    draw() {
        ctx.drawImage(astronautImg, this.x, this.y, this.width, this.height);
        ctx.fillStyle = "white";
        ctx.font = "16px Arial";
        ctx.fillText(this.word, this.x + 5, this.y + this.height + 15);
    }

    update() {
        this.y += this.speed;
    }
}

// Bullet Class
class Bullet {
    constructor(x, y, targetX, targetY) {
        this.x = x;
        this.y = y;
        this.targetX = targetX;
        this.targetY = targetY;
        this.width = 10;
        this.height = 20;
        this.speed = 15;

        // Calculate the angle for bullet direction
        const dx = targetX - x;
        const dy = targetY - y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        this.velocityX = (dx / distance) * this.speed;
        this.velocityY = (dy / distance) * this.speed;
    }

    draw() {
        ctx.drawImage(bulletImg, this.x, this.y, this.width, this.height);
        // GSAP Light Effect
        gsap.to(ctx, {
            opacity: 0.5,
            duration: 0.1,
            onComplete: () => (ctx.opacity = 1),
        });
    }

    update() {
        this.x += this.velocityX;
        this.y += this.velocityY;
    }
}

// Generate Astronauts
function spawnAstronaut() {
    const x = Math.random() * (canvas.width - 60);
    const word = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    astronauts.push(new Astronaut(x, 0, word));
}

// Key Typing
window.addEventListener("keydown", (e) => {
    const key = e.key.toUpperCase();
    astronauts.forEach((astronaut, index) => {
        if (astronaut.word === key) {
            bullets.push(
                new Bullet(
                    rocket.x + rocket.width / 2,
                    rocket.y,
                    astronaut.x + astronaut.width / 2,
                    astronaut.y
                )
            );
            astronauts.splice(index, 1);
            score += 10;
        }
    });
});

// Game Loop
function gameLoop() {
    ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);

    // Draw Rocket
    ctx.drawImage(rocketImg, rocket.x, rocket.y, rocket.width, rocket.height);

    // Update Astronauts
    astronauts.forEach((astronaut, index) => {
        astronaut.update();
        astronaut.draw();

        // End Game if astronaut reaches the rocket
        if (astronaut.y + astronaut.height >= rocket.y) {
            gameRunning = false;
            alert("Game Over!");
        }
    });

    // Update Bullets
    bullets.forEach((bullet, index) => {
        bullet.update();
        bullet.draw();
    });

    if (gameRunning) requestAnimationFrame(gameLoop);
}

// Start Game
setInterval(() => {
    if (gameRunning) spawnAstronaut();
}, 2000);

gameLoop();