// Get elements
const startButton = document.getElementById('start-btn');
const gameContainer = document.getElementById('game-container');
const scoreDisplay = document.getElementById('score');
const healthDisplay = document.getElementById('health');
const bgMusic = document.getElementById('bg-music');
const explosionSound = document.getElementById('explosion-sound');

// Game Variables
let score = 0;
let health = 100;
let activeWords = [];

// Start Game Function
startButton.addEventListener('click', startGame);

function startGame() {
  startButton.style.display = 'none';  // Hide the start button
  bgMusic.play();  // Play background music
  bgMusic.volume = 0.2;  // Reduce background music volume
  setInterval(spawnWord, 2000);  // Spawn words every 2 seconds
  gameLoop();
}

// Word class
class Word {
  constructor(text) {
    this.text = text;
    this.element = document.createElement('div');
    this.element.className = 'word';
    this.element.textContent = text;
    this.element.style.left = Math.random() * (window.innerWidth - 100) + 'px';
    this.element.style.top = '-30px';
    this.speed = 0.5 + Math.random();
    gameContainer.appendChild(this.element);
  }

  move() {
    const top = parseFloat(this.element.style.top);
    this.element.style.top = (top + this.speed) + 'px';
    if (top > window.innerHeight) {
      this.destroy();
      decreaseHealth(10);
    }
  }

  destroy() {
    this.element.remove();
    const index = activeWords.indexOf(this);
    if (index > -1) {
      activeWords.splice(index, 1);
    }
  }

  explode() {
    const explosion = document.createElement('div');
    explosion.className = 'explosion';
    explosion.style.left = this.element.style.left;
    explosion.style.top = this.element.style.top;
    explosion.textContent = '💥';
    gameContainer.appendChild(explosion);

    // Trigger explosion sound with callback to ensure it plays after the background music
    explosionSound.play().then(() => {
      setTimeout(() => {
        explosion.remove(); // Remove explosion after animation
      }, 500);  // Delay to match animation time
    }).catch(error => {
      console.error('Explosion sound failed to play:', error);
    });

    this.destroy();  // Remove word
  }
}

// Update Score
function updateScore(points) {
  score += points;
  scoreDisplay.textContent = `Score: ${score}`;
}

// Decrease Health
function decreaseHealth(amount) {
  health -= amount;
  healthDisplay.textContent = `Health: ${health}`;
  if (health <= 0) {
    gameOver();  // Trigger Game Over
  }
}

// Game Over function
function gameOver() {
  bgMusic.pause();  // Pause background music
  alert(`Game Over! Final Score: ${score}`);
  location.reload();  // Restart the game
}

// Spawn Word
function spawnWord() {
  if (activeWords.length < 5) {
    const randomWord = ['javascript', 'programming', 'computer', 'algorithm', 'database', 'network', 'security', 'function', 'variable', 'browser'][Math.floor(Math.random() * 10)];
    const word = new Word(randomWord);
    activeWords.push(word);
  }
}

// Game Loop
function gameLoop() {
  activeWords.forEach(word => word.move());
  requestAnimationFrame(gameLoop);
}

// Key Press Event for Typing
document.addEventListener('keypress', (event) => {
  const char = event.key.toLowerCase();

  activeWords.forEach(word => {
    if (word.text.toLowerCase().startsWith(char)) {
      if (word.text.length === 1) {
        updateScore(10);  // Points for full word typed
        word.explode();  // Trigger explosion
      } else {
        word.text = word.text.substring(1);  // Remove the typed letter
        word.element.textContent = word.text;
        updateScore(1);  // Points for typing one character correctly
      }
    }
  });
});




// স্টার্ট বাটন এবং ওয়ার্নিং এলিমেন্ট ধরার জন্য
const startBtn = document.getElementById('start-btn');
const keyboardWarning = document.getElementById('keyboard-warning');

// স্টার্ট বাটনে ইভেন্ট লিসেনার যোগ করা
startBtn.addEventListener('click', () => {
  // ওয়ার্নিং মেসেজ হাইড করা
  keyboardWarning.style.display = 'none';
  
  // গেম স্টার্ট করার জন্য প্রয়োজনীয় কোড যোগ করুন
  console.log('Game Started!');
});




function gameOver() {
  bgMusic.pause(); // Pause background music
  const popup = document.getElementById('game-over-popup');
  const finalScore = document.getElementById('final-score');
  const typingAccuracy = document.getElementById('typing-accuracy');

  // হিসাব করে স্কোর এবং একুরেসি দেখান
  finalScore.textContent = `Score: ${score}`;
  const accuracy = ((score / (score + 100 - health)) * 100).toFixed(2);
  typingAccuracy.textContent = `Accuracy: ${accuracy}%`;

  popup.style.display = 'block'; // পপআপ দেখান
}

// Restart Game Function
document.getElementById('restart-btn').addEventListener('click', () => {
  location.reload(); // পেজ রিলোড করে গেম রিস্টার্ট করুন
});






