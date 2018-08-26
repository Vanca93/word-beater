window.addEventListener('load', init);

const levels = {
    easy: 5,
    medium: 3,
    hard: 1
};

const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

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
    seconds.innerHTML = currentLevel;
    showWord(words);
    wordInput.addEventListener('input', startMatch);
    setInterval(countdown, 1000);
    setInterval(checkStatus, 50);
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
        message.innerHTML = 'Correct!!!';
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
        message.innerHTML = 'Game over!!!';
        score = -1;
    }
}