function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"]
    let compchoice = Math.floor(Math.random() * 3)

    let herchoice = choice[compchoice]
    return herchoice
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

let computerChoice = getComputerChoice()

let bodyTag = document.querySelector("body")


var rock = document.createElement("button")
rock.setAttribute("id", "Rock")
rock.textContent = "Rock!"


let paper = document.createElement("button")
paper.setAttribute("id", "Paper")
paper.textContent = "Paper!!"



let scissors = document.createElement("button")
scissors.setAttribute("id", "Scissors")
scissors.textContent = "Scissors!"

let games = 0
var playerChoice = ''

    rock.addEventListener("click", ()=>{
        playerChoice = 'rock'
        let round = document.createElement('p')
        let gameplay = playRound(playerChoice, computerChoice)
        round.textContent = gameplay
        bodyTag.appendChild(round)
    })
    paper.addEventListener("click", ()=>{
        playerChoice = 'paper'
        let round = document.createElement('p')
        let gameplay = playRound(playerChoice, computerChoice)
        playRound(playerChoice, computerChoice)
        round.textContent = gameplay
        bodyTag.appendChild(round)
    })
    scissors.addEventListener("click", ()=>{
        playerChoice = 'scissors'
        let round = document.createElement('p')
        let gameplay = playRound(playerChoice, computerChoice)
        playRound(playerChoice, computerChoice)
        round.textContent = gameplay
        bodyTag.appendChild(round)
    })
    
console.log(playerChoice)


bodyTag.appendChild(rock)
bodyTag.appendChild(paper)
bodyTag.appendChild(scissors)





console.log(`Your score: ${humanScore}`)
console.log(`Computer score: ${computerScore}`)

