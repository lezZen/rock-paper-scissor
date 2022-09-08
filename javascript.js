function getComputerChoice(){
let choice = Math.round(Math.random() * 2)
    switch(choice){
        case 0:
            console.log('rock')
            break;
        case 1:
            console.log('paper')
            break;
        case 2:
            console.log('scissor')        
            break;
    }
}
getComputerChoice();

