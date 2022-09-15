let scoreslog = [];
//Gets call when 5 rounds has been played, if its a draw keeps playing till there is a winner
function finalscore(){
    if(scoreslog.length >= 5){
    let logString = scoreslog.join(' ')
    let timesWon = logString.match(/win/g);
    let timesLost = logString.match(/lose/g);
    timesWon = timesWon === null ? '': timesWon;
    timesLost = timesLost === null ? '': timesLost;
    console.log(timesWon)
    console.log(timesLost)
    while(timesWon.length == timesLost.length){
        return
    }
if (timesWon.length > timesLost.length){ 
    gameResult.textContent= 'You won the game, congratulations! you are awesome'
}else if(timesWon.length < timesLost.length){
    gameResult.textContent = 'You lost the game, thats so sad but you can try again!'
}else { 
    gameResult.textContent = 'The game its a draw!'
}

buttons.forEach(b => b.disabled = true);

document.querySelector('#finalScoreContainer').appendChild(gameResult)
document.querySelector('#finalScoreContainer').appendChild(TryAgain)

}

}
//plays a round, gets playerselection from the text of the button clicked 
function playRound(playerSelection, computerSelection){
     switch(playerSelection){
        case "Pick rock":
            if(computerSelection == 0){
                document.querySelector('.scores').insertAdjacentHTML('beforeend', '<img src="./images/lose.png" height="70px">')
                document.querySelector('div ~ .scores').insertAdjacentHTML('beforeend', '<img src="./images/win.png" height="70px">')
                result =  `You lose this round, paper beats rock`
            }else if(computerSelection == 1){
                document.querySelector('.scores').insertAdjacentHTML('beforeend', '<img src="./images/win.png" height="70px">')
                document.querySelector('div ~ .scores').insertAdjacentHTML('beforeend', '<img src="./images/lose.png" height="70px">')
                result = `You win this round, rock beats scissor`
            }else{ document.querySelectorAll('.scores').forEach(b => b.insertAdjacentHTML('beforeend', '<img src="./images/minus.png" height="60px">'))
                result =  'This round is a tie!' }
            break;

        case 'Pick scissors':
           if(computerSelection == 2){ 
                document.querySelector('.scores').insertAdjacentHTML('beforeend', '<img src="./images/lose.png" height="70px">')
                document.querySelector('div ~ .scores').insertAdjacentHTML('beforeend', '<img src="./images/win.png" height="70px">')
                result =  `You lose this round, rock beats scissors`
            }else if(computerSelection == 0){
                document.querySelector('.scores').insertAdjacentHTML('beforeend', '<img src="./images/win.png" height="70px">')
                document.querySelector('div ~ .scores').insertAdjacentHTML('beforeend', '<img src="./images/lose.png" height="70px">')
                result = `You win this round, scissors beats paper`
            }else{ document.querySelectorAll('.scores').forEach(b => b.insertAdjacentHTML('beforeend', '<img src="./images/minus.png" height="60px">'))
                result =  'This round is a tie!'}
            break;

        case 'Pick paper':
           if(computerSelection == 1){ 
                document.querySelector('.scores').insertAdjacentHTML('beforeend', '<img src="./images/lose.png" height="70px">')
                document.querySelector('div ~ .scores').insertAdjacentHTML('beforeend', '<img src="./images/win.png" height="70px">')
                result =  `You lose this round, scissors beats paper`
           }else if(computerSelection == 2){
                document.querySelector('.scores').insertAdjacentHTML('beforeend', '<img src="./images/win.png" height="70px">')
                document.querySelector('div ~ .scores').insertAdjacentHTML('beforeend', '<img src="./images/lose.png" height="70px">')
                result =  `You win this round, paper beats rock`
           }else{ document.querySelectorAll('.scores').forEach(b => b.insertAdjacentHTML('beforeend', '<img src="./images/minus.png" height="60px">'))
                result = 'This round is a tie!'}
            
    }
    
   scoreslog.push(result);
   finalscore()                         //adds the result to the gameLog
   scoresP.innerHTML += result + "<br>"
    }   
//pushes the player choice
function movePlayerChoice(e){                        
const paper= document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const rock = document.querySelector('#rock');

    switch (e.target){
        case buttons[0]:
            paper.classList.add('toend')
            break;
        case buttons[1]:                     
            scissors.classList.add('toend')
            break;
        case buttons[2]:
            rock.classList.add('toend')
            break;
    }
}
//gets and push the computer choice, also calls playRound to log the round
function getComputerChoice(e){  
    const comppaper= document.querySelector('#comppaper');
    const compscissors = document.querySelector('#compscissors');
    const comprock = document.querySelector('#comprock');
    let choice = Math.round(Math.random() * 2)
        switch(choice){
            case 0:
                playRound(e.target.textContent, choice)
                comppaper.classList.add('tostart')
                break;
            case 1:
                playRound(e.target.textContent, choice)         
                compscissors.classList.add('tostart')
                break;
            case 2:           
                playRound(e.target.textContent, choice)         
                comprock.classList.add('tostart')                 
        }
}
 //sets the last computer choice to the start if they're moved, calls computerchoice
function moveComputerChoice(e){
    if (comppaper.classList.contains('tostart')){ 
        comppaper.classList.remove('tostart')
        getComputerChoice(e)
    }else if(compscissors.classList.contains('tostart')){
        compscissors.classList.remove('tostart')
        getComputerChoice(e)
    }else if (comprock.classList.contains('tostart')){
        comprock.classList.remove('tostart')
        getComputerChoice(e)
    }else{
        getComputerChoice(e)
    }
}
// restore the player and the computer last choice to the start point if they're moved
function useChoice(e){      
    moveComputerChoice(e)
    if (paper.classList.contains('toend')){ 
        paper.classList.remove('toend')
        movePlayerChoice(e)
    }else if(scissors.classList.contains('toend')){
        scissors.classList.remove('toend')
        movePlayerChoice(e)
    }else if (rock.classList.contains('toend')){
        rock.classList.remove('toend')
        movePlayerChoice(e)
    }else{
        movePlayerChoice(e)
    } 
}
//buttons animation effect
const buttons = document.querySelectorAll('button');  
buttons.forEach(b => b.addEventListener('mouseover', e => e.target.classList.add('mouseon')))
buttons.forEach(b => b.addEventListener('mouseout', e => e.target.classList.remove('mouseon')))

//begins the match when clicking button
buttons.forEach(b => b.addEventListener('click', useChoice));

//try again button
function restart(){
    document.querySelectorAll('div').forEach(b=> b.classList.remove('toend'));
    document.querySelectorAll('div').forEach(b=> b.classList.remove('tostart'));
    buttons.forEach(b => b.disabled= false);
    scoreslog = [];
    document.querySelector('#finalScoreContainer').removeChild(TryAgain);
    document.querySelector('#finalScoreContainer').removeChild(gameResult);
    scoresP.textContent= ''
    document.querySelectorAll('.scores').forEach(function(b){ while(b.hasChildNodes()){
        b.removeChild(b.firstChild)
    }})
}
const TryAgain= document.createElement('button');
TryAgain.textContent ='Wanna Try again?';
const gameResult= document.createElement('h2');
TryAgain.addEventListener('click', restart);
const scoresP= document.createElement('p');
document.querySelector('#gameLog').appendChild(scoresP)