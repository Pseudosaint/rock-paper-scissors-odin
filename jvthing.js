function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"]
    let compchoice = Math.floor(Math.random() * 3)

    let herchoice = choice[compchoice]
    return herchoice
}

function getHumanChoice() {
    
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




let bodyTag = document.querySelector("body")
let rock = document.createElement("button")
rock.setAttribute("id", "Rock")
rock.textContent = "Rock!"

let paper = document.createElement("button")
paper.setAttribute("id", "Paper")
paper.textContent = "Paper!!"

let scissors = document.createElement("button")
scissors.setAttribute("id", "Scissors")
scissors.textContent = "Scissors!"

bodyTag.appendChild(rock)
bodyTag.appendChild(paper)
bodyTag.appendChild(scissors)

let computerChoice = getComputerChoice()



console.log(`Your score: ${humanScore}`)
console.log(`Computer score: ${computerScore}`)

