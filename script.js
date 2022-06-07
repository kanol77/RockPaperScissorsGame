const statusField = document.querySelector('.status')
const rockOption = document.querySelector('.rockOption') 
const paperOption = document.querySelector('.paperOption')
const scissorsOption = document.querySelector('.scissorsOption')
const scoresDiv = document.querySelector('.scores')
const resetButton = document.querySelector('#reset')
const modal = document.querySelector('.modal')
const inputVal = document.querySelector('.scoreMax')
const closeButton = document.querySelector('#close')
const openButtonAtt = document.querySelector('.openButton')
const modalA = document.querySelector('.modalA')
const closeButtonAtt = document.querySelector('.closeButton')

inputVal.addEventListener('keydown', (e) =>{
    if(e.keyCode == 96 || e.keyCode == 48 && inputVal.value == "") e.preventDefault();
})

let playerScore = 0
let AIScore = 0

window.onload = () => {
    modal.showModal();
}

rockOption.addEventListener('click', () => {
    let AIPick = randomNum(1,3);
    if(AIPick == 1){
        statusField.style.color = 'blue'
        statusField.innerText = "It's a draw!"
    } 
    else if(AIPick == 2){
        statusField.style.color = 'red'
        statusField.innerText = "You Lose!"
        AIScore+=1;
    } 
    else{
        statusField.style.color = 'green'
        statusField.innerText = "You Win!"
        playerScore += 1
    }
    appendScores(); 
})

paperOption.addEventListener('click', () => {
    let AIPick = randomNum(1,3);
    if(AIPick == 1){
        statusField.style.color = 'green'
        statusField.innerText = "You Win!"
        playerScore += 1
    } 
    else if(AIPick == 2){
        statusField.style.color = 'blue'
        statusField.innerText = "It's a draw!"
    } 
    else{
        statusField.style.color = 'red'
        statusField.innerText = "You Lose!"
        AIScore+=1;
    }
    appendScores(); 
})

scissorsOption.addEventListener('click', () => {
    let AIPick = randomNum(1,3);
    if(AIPick == 1){
        statusField.style.color = 'red'
        statusField.innerText = "You Lose!"
        AIScore+=1
    } 
    else if(AIPick == 2){
        statusField.style.color = 'green'
        statusField.innerText = "You Win!"
        playerScore += 1
    } 
    else{
        statusField.style.color = 'blue'
        statusField.innerText = "It's a draw!"
    }
    appendScores(); 
})

function randomNum(from, to){
    from = Math.ceil(from)
    max = Math.floor(to)
    return Math.floor(Math.random()*(to-from+1)) + from;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function appendScores(){
    scoresDiv.innerHTML = ""

    let paragraph = document.createElement('p')
    paragraph.innerHTML = "Player Score: " + playerScore + "<br>Computer Score: " + AIScore;

    scoresDiv.appendChild(paragraph);
    setTimeout(clear, 2500);
}	

function clear(){
    statusField.innerText = "";
    statusField.style.color = 'black';
    statusField.innerText = "Pick your choice!";
}

resetButton.addEventListener('click', () => {
    window.location.reload();
})

let winningScore;

closeButton.addEventListener('click', () => {
    if(inputVal.value!=""){
        winningScore = parseInt(inputVal.value);
        modal.close();
    }
    else{
        alert("Put in a number greater than 0!")
    } 
})

let interval = setInterval(check, 500)

function check(){
    if(playerScore == winningScore){
        alert("Congratulations you Won!");
        clearInterval(interval);
        window.location.reload();
    } 
    else if(AIScore == winningScore){
        alert("You Lost :(");
        clearInterval(interval);
        window.location.reload();  
    }
}

openButtonAtt.addEventListener('click', () =>{
    modalA.showModal();
})

closeButtonAtt.addEventListener('click', () =>{
    modalA.close();
})



