const battleship = () => {
  let player1 = {
    name: prompt("Please enter your name."),
    shipCount: 4,
    gameBoard: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]
  };
  let player2 = {
    name: prompt("Please enter your name."),
    shipCount: 4,
    gameBoard: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]
  };

  let shipPlaced1 = 0;
  let shipPlaced2 = 0;
  while (shipPlaced1 < 4) {
    let xPos1 = Math.floor(Math.random()* (3-0+1)) + 0;
    let yPos1 = Math.floor(Math.random()* (3-0+1)) + 0;
    console.log(xPos1, yPos1);

    let xPos2 = Math.floor(Math.random()* (3-0+1)) + 0;
    let yPos2 = Math.floor(Math.random()* (3-0+1)) + 0;
    console.log(xPos2, yPos2);

    if (player1.gameBoard[xPos1][yPos1] === 0 && player2.gameBoard[xPos2][yPos2] === 0) {
      player1.gameBoard[xPos1][yPos1] = 1;
      player2.gameBoard[xPos2][yPos2] = 1;
      shipPlaced1 ++;
      shipPlaced2 ++;
    } 
  }
  console.log(player1, player2)

  let currentPlayer = player1;
  let message;
  while (message === undefined){
    if (currentPlayer === player1){
      let guessX = prompt(`Please enter a number from 0 to 3 for x coordinates, ${currentPlayer.name}`);
      let guessY = prompt(`Please enter a number from 0 to 3 for y coordinates, ${currentPlayer.name}`);
        if (player2.gameBoard[guessX][guessY]=== 1){
          player2.gameBoard[guessX][guessY] = 0;
          player2.shipCount -= 1;
          console.log (player2.gameBoard);
          alert ("Hit")
        } else if (player2.shipCount === 0){
          message = (`You win!, ${currentPlayer.name}`);
          break;
        } else {
          alert ("You missed!")
        }
        currentPlayer = player2;
    }
    if (currentPlayer === player2){
      let guessX = prompt(`Please enter a number from 0 to 3 for x coordinates, ${currentPlayer.name}`);
      let guessY = prompt(`Please enter a number from 0 to 3 for y coordinates, ${currentPlayer.name}`);
        if (player1.gameBoard[guessX][guessY] === 1){
          player1.gameBoard[guessX][guessY] = 0;
          player1.shipCount -= 1;
          console.log (player1.gameBoard);
          alert ("Hit")
        } else if (player1.shipCount === 0){
          message = (`You win!, ${currentPlayer.name}`);
          break;
        } else {
          alert ("You missed!")
        }
        currentPlayer = player1;
    }
  }
 
  return message;
}

const gameResult = battleship()

const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult
