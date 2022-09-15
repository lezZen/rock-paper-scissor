
let scoreslog = [];
function finalscore(){
    if(scoreslog.length == 5){
    let logString = scoreslog.join(' ')
    let timesWon = logString.match(/win/g);
    let timesLost = logString.match(/lose/g);
    timesWon = timesWon === null ? 0: timesWon;
    timesLost = timesLost === null ? 0: timesLost;
if (timesWon.length > timesLost.length){ 
    gameResult.textContent= 'you won the game, congratulations!'
}else if(timesWon.length < timesLost.length){
    gameResult.textContent = 'you lost the game, try again!'
}else { 
    gameResult.textContent = 'the game its a draw!'
}

buttons.forEach(b => b.disabled = true);

document.querySelector('#finalScoreContainer').appendChild(gameResult)
document.querySelector('#finalScoreContainer').appendChild(TryAgain)

}

}
//plays a round, gets playerselection from the text of the button clicked
function playRound(playerSelection, computerSelection){
    switch(playerSelection){
        case "rock":
            if(computerSelection == 0)result =  `you lose, paper beats ${playerSelection}`
            else if(computerSelection == 1)result = `you win, ${playerSelection} beats scissor`
            else result =  'its a tie!'
            break;

        case 'scissors':
           if(computerSelection == 2)result =  `you lose, rock beats ${playerSelection}`
            else if(computerSelection == 0)result = `you win, ${playerSelection} beats paper`
            else result =  'its a tie!'
            break;

        case 'paper':
          if(computerSelection == 1) result =  `you lose, scissors beats ${playerSelection}`
            else if(computerSelection == 2)result =  `you win, ${playerSelection} beats rock`
            else result = ' its a tie!'
            
    }
    
    scoreslog.push(result);
   finalscore()
   scoresP.innerHTML += result + "<br>"
    }   
//buttons animation effect
const buttons = document.querySelectorAll('button');  
buttons.forEach(b => b.addEventListener('mouseover', e => e.target.classList.add('mouseon')))
buttons.forEach(b => b.addEventListener('mouseout', e => e.target.classList.remove('mouseon')))

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
// restore the player last choice to the start point if they're moved and runs computer side
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

buttons.forEach(b => b.addEventListener('click', useChoice));//begins the match when clicking button

//try again button
function restart(){
    document.querySelectorAll('div').forEach(b=> b.classList.remove('toend'));
    document.querySelectorAll('div').forEach(b=> b.classList.remove('tostart'));
    buttons.forEach(b => b.disabled= false);
    scoreslog = [];
    document.querySelector('#finalScoreContainer').removeChild(TryAgain);
    document.querySelector('#finalScoreContainer').removeChild(gameResult);
    scoresP.textContent= ''
}
const TryAgain= document.createElement('button');
TryAgain.textContent ='Wanna Try again?';
const gameResult= document.createElement('h2');
TryAgain.addEventListener('click', restart);
const scoresP= document.createElement('p');
document.querySelector('#gameLog').appendChild(scoresP)
