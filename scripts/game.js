
function hideElementById(elementId) {
    document.getElementById(elementId).classList.add('hidden');
}
function showElementById(elementId) {
    document.getElementById(elementId).classList.remove('hidden');
}
function addBackground(elementId){
    document.getElementById(elementId).classList.add('bg-orange-300');
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
function play(){
    hideElementById('home-ground');
    showElementById('play-ground');
    startPlay()
}

