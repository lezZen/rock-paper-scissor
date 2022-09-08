function getComputerChoice(){
let choice = Math.round(Math.random() * 2)
    switch(choice){
        case 0:
            return 'rock'
        case 1:
            return 'paper'
            
        case 2:
            return 'scissors'                 
    }
}
// another version of playRound
/*function playRound(playerSelection, computerSelection){

    if((playerSelection == 'rock') && computerSelection == 'paper'){
        return 'you lose, paper beats rock'
    }else if ((playerSelection == 'rock') && computerSelection == 'scissors'){
        return 'you win, rock beats scissors'
    }
    else if((playerSelection == "paper") && computerSelection == 'scissors'){
        return 'you lose, scissors beats paper'
    }else if((playerSelection == "paper") && computerSelection == 'rock'){
        return 'you win, paper beats rock'
    }
    else if((playerSelection == "scissors") && computerSelection =='rock'){
        return 'you lose, rock beats scissors'
    }else if((playerSelection == "scissors") && computerSelection =='paper'){
        return 'you win, scissors beats paper'
    }else{
        return 'draw'
    }
}*/
function playRound(playerSelection, computerSelection){
switch(playerSelection){
    case "rock":
        if(computerSelection == 'paper'){
            return 'you lose, paper beats rock'
        }else if(computerSelection == 'scissors'){
            return "you win, rock beats scissors"
        }else{
            return 'draw'
        }
        
    case 'scissors':
        if(computerSelection == 'rock'){
            return 'you lose, rock beats scissors'
        }else if(computerSelection == 'paper'){
            return "you win, scissors beats paper "
        }else{
            return 'draw'
        }
    case 'paper':
        if(computerSelection == 'scissors'){
            return 'you lose, scissors beats paper'
        }else if(computerSelection == 'rock'){
            return "you win, paper beats rock"
        }else{
            return 'draw'
        }
}
}


function game(){
for (let i = 0; i < 5; i++) {
const computerSelection = getComputerChoice();
const playerSelection= (prompt('select rock, paper or scissors')).toLowerCase()
console.log(playRound(playerSelection, computerSelection))

 }
}

game()
