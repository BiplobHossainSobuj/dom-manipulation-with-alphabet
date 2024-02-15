
function hideElementById(elementId) {
    document.getElementById(elementId).classList.add('hidden');
}
function showElementById(elementId) {
    document.getElementById(elementId).classList.remove('hidden');
}
function addBackground(elementId){
    document.getElementById(elementId).classList.add('bg-orange-300');
}
function removeBackground(elementId){
    document.getElementById(elementId).classList.remove('bg-orange-300');
}
function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const value = parseInt(element.innerText);
    return value;
}
function setElementValueById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText  = value;
}
function getLetters(){
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const randomIndex = Math.round(Math.random()*25);
    const letter = letters[randomIndex];
    return letter;
    
}
function startPlay(){
    const currentLetter = getLetters();
    document.getElementById('current-letter').innerText= currentLetter;
    addBackground(currentLetter);
}
function handlekeyPress(event){
    const gamerPressed = event.key;
    const expectedAlphabet = document.getElementById('current-letter').innerText.toLocaleLowerCase();
    // console.log(gamerPressed,expectedAlphabet);
    if (gamerPressed === 'Escape') {
        gameOver();
    }
    if (gamerPressed===expectedAlphabet) {
        // const scoreElement = document.getElementById('current-score');
        // const scoreText = scoreElement.innerText;
        // const currentScore = parseInt(scoreText);
        // const newScore = currentScore + 1;
        // scoreElement.innerText =  newScore;
        const currentValue = getElementValueById('current-score');
        const newScore = currentValue + 1;
        setElementValueById('current-score',newScore);
        removeBackground(expectedAlphabet);
        startPlay();
    }
    else{
        console.log('You loose it');
        // const lifeElement = document.getElementById('current-lives');
        // let currentLife = parseInt(lifeElement.innerText);
        // currentLife-=1;
        // lifeElement.innerText=currentLife;
        const currentlife = getElementValueById('current-lives');
        const newlife = currentlife - 1;
        setElementValueById('current-lives',newlife);
        if (newlife===0) {
            gameOver();
        }
    }
}
document.addEventListener('keyup',handlekeyPress);

function play(){
    hideElementById('home-ground');
    hideElementById('final-ground');
    showElementById('play-ground');
    startPlay()
    setElementValueById('current-lives',5);
    setElementValueById('current-score',0);
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-ground');
    // update final gaming score 
    const finalGamingScore= getElementValueById('current-score');
    setElementValueById('final-gaming-score',finalGamingScore);
    const currentLetter = document.getElementById('current-letter').innerText;
    removeBackground(currentLetter);
}


