// dawg
// i don't know how to do this shit
// don't pmo

function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"]
    let compchoice = Math.floor(Math.random() * 3)

    let herchoice = choice[compchoice]
    return herchoice
}

function getHumanChoice() {
    let humanchoice = prompt('Rock, Paper, Scissors!')
    return humanchoice
}

var humanScore = 0
var computerScore = 0

function playRound(humanChoice, machineChoice) {

    switch (humanChoice){
        case 'rock':
            if (machineChoice == 'paper'){
                computerScore += 1
                return `You Lose! ${machineChoice} bears ${humanChoice}`
                
            }
            else if (machineChoice == 'scissors'){
                humanScore += 1
                return `You win! ${humanChoice} beats ${machineChoice} `
                
            }
            else{
                return 'You drew!'
            }
        case 'paper':
            if (machineChoice == 'scissors'){
                computerScore += 1
                return `You Lose! ${machineChoice} bears ${humanChoice}`
                
            }
            else if (machineChoice == 'rock'){
                humanScore += 1
                return `You win! ${humanChoice} beats ${machineChoice} `
                
            }
            else{
                return 'You drew!'
            }
        case 'scissors':
            if (machineChoice == 'rock'){
                computerScore += 1
                return `You Lose! ${machineChoice} bears ${humanChoice}`

                
            }
            else if (machineChoice == 'paper'){
                humanScore += 1
                return `You win! ${humanChoice} beats ${machineChoice} `

                
            }
            else{
                return 'You drew!'
            }
    }
}


let games = 0

while (games < 5){
    let playerChoice = getHumanChoice()
    let computerChoice = getComputerChoice()
    let game = playRound(playerChoice, computerChoice)
    console.log(game)
    games++
    
}

console.log(`Your score: ${humanScore}`)
console.log(`Computer score: ${computerScore}`)

