window.addEventListener('load', init);

const levels = {
    easy: 5,
    medium: 3,
    hard: 1
};

let currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let highscore = localStorage.getItem("highscore") || 0;
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const highScoreDisplay = document.querySelector('#highscore');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const easy = document.querySelector('#easy');
const medium = document.querySelector('#medium');
const hard = document.querySelector('#hard');

const words = [
    'feigned',
    'paper',
    'offer',
    'amuse',
    'follow',
    'condition',
    'minute',
    'blink',
    'gusty',
    'practise',
    'cushion',
    'grandiose',
    'hill',
    'hot',
    'thirsty',
    'lowly',
    'pump',
    'dry',
    'various',
    'gun',
    'club',
    'spotless',
    'lunch',
    'wooden',
    'insurance',
    'include',
    'legal',
    'aboard',
    'wiggly',
    'cowardly',
    'mine',
    'disarm',
    'whistle',
    'melodic',
    'loss',
    'airplane',
    'comparison',
    'murky',
    'whimsical',
    'stiff',
    'tan',
    'common',
    'scientific',
    'whisper',
    'meat',
    'spade',
    'absorbing',
    'puny',
    'comb',
    'ajar',
    'key',
    'undesirable',
    'spot',
    'suffer',
    'magic',
    'bore',
    'stitch',
    'teeny',
    'four',
    'dance',
    'fish',
    'bird',
    'shock',
    'look',
    'soothe',
    'want',
    'familiar',
    'repulsive',
    'befitting',
    'slimy',
    'trucks',
    'hat',
    'pies',
    'garrulous',
    'step',
    'obnoxious',
    'strange',
    'relieved',
    'brawny',
    'exuberant',
    'cool',
    'icicle',
    'science',
    'foolish',
    'eye',
    'sweet',
    'tightfisted',
    'verdant',
    'passenger',
    'loving',
    'fowl',
    'impossible',
    'placid',
    'underwear',
    'graceful',
    'recondite',
    'domineering',
    'uppity',
    'possessive',
    'shade'
];

function init() {
    easy.addEventListener('click', function() {
        currentLevel = levels.easy;
        document.getElementById('seconds').innerHTML = currentLevel;
        document.getElementById('time').innerHTML = currentLevel;
        document.getElementById('seconds').classList.remove('text-warning', 'text-danger');
        document.getElementById('seconds').classList.add('text-success');
    });
    medium.addEventListener('click', function() {
        currentLevel = levels.medium;
        document.getElementById('seconds').innerHTML = currentLevel;
        document.getElementById('time').innerHTML = currentLevel;
        document.getElementById('seconds').classList.remove('text-success', 'text-danger');
        document.getElementById('seconds').classList.add('text-warning');
    });
    hard.addEventListener('click', function() {
        currentLevel = levels.hard;
        document.getElementById('seconds').innerHTML = currentLevel;
        document.getElementById('time').innerHTML = currentLevel;
        document.getElementById('seconds').classList.remove('text-success', 'text-warning');
        document.getElementById('seconds').classList.add('text-danger');
    });
    showWord(words);
    wordInput.addEventListener('input', startMatch);
    setInterval(countdown, 1000);
    setInterval(checkStatus, 50);
    setInterval(highScore, 50);
}

function startMatch() {
    if(matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    if(score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

function matchWords() {
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}

function showWord(words) {
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];
}

function countdown() {
    if(time > 0) {
        time--;
    } else if (time === 0) {
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
}

function checkStatus() {
    if(!isPlaying && time === 0) {
        message.innerHTML = 'Game over! Type The Word Above To Start Again!';
        score = -1;
    }
}

function highScore() {
    if (score > highscore) {
        localStorage.setItem("highscore", JSON.stringify(score));
        highScoreDisplay.innerHTML = JSON.parse(localStorage.getItem("highscore"));
        highscore = JSON.parse(localStorage.getItem("highscore"));
    } else {
        highScoreDisplay.innerHTML = JSON.parse(localStorage.getItem("highscore")) || 0;
        highscore = JSON.parse(localStorage.getItem("highscore"));
    }
}
