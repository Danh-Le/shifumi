// console.log(document)

// // Button que choisi le joueur
const rockButton = document.getElementById("rock")
const paperButton = document.getElementById("paper")
const scissorsButton = document.getElementById("scissor")
rockButton.addEventListener("click", () => {
    playerClick("rock")
  })
  paperButton.addEventListener("click", () => {
    playerClick("paper")
  }) 
  scissorsButton.addEventListener("click", () => {
    playerClick("scissor")
  })
  const playerClick = item => {
    carroussel()
  }
  const carroussel = () => {
  }

// Random de l'IA
const items = ["rock", "paper", "scissor"]

const iaItem = () => {
let randomItems = Math.floor(Math.random()*items.length)
let item = items[randomItems]
return(item)
}
const battle = item => {
    playerItem = item
    iaItem = item()

// Condition de score
    if (playerItem === "rock") {
      if (iaItem === "scissor") {
        playerScoreWin()
      } else if (iaItem === "paper") {
        iaScoreWin()
      } else {
        bothScoreWin()
      }
    } else if (playerItem === "paper") {
        if (iaItem === "scissor") {
        iaScoreWin()
      } else if (iaItem === "rock") {
        playerScoreWin()
      } else {
        bothScoreWin()
      } 
    } else if (playerItem === "scissor") {
        if (iaItem === "rock") {
            iaScoreWin()
        } else if (iaItem === "paper") {
            playerScoreWin()
        } else {
            bothScoreWin()
        }
    }
    scoresResult()
}

// Affichage score dans le DOM
const playerResult = 0
const iaResult = 0
const playerScoreWin = () => {
    playerResult = playerResult + 1
  }
  const iaScoreWin = () => {
    iaResult = iaResult + 1
  }
const scoresResult = () => {
  playerScore.innerHTML = playerResult
  iaScore.innerHTML = iaResult
}

// // Comparaison de resultat
// if  (playerScore >= 3 || iaScore >= 3) {
//  playerResult = document.getElementById('playerScore')
//  iaResult = document.getElementById('iaScore')
// }

// // Affichage vainqueur
// if (playerResult > iaResult) {
//     console.log("You  win !!!" + playerResult + "-" + iaResult)
// } else (iaResult > playerResult)
//     console.log("You loose..." + iaResult + "-" + playerResult)
