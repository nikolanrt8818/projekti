const rock = document.querySelector(".col-rock");
const paper = document.querySelector(".col-paper");
const scissors = document.querySelector(".col-scissors");
const rockOp = document.querySelector(".col-rock-opponent");
const paperOp = document.querySelector(".col-paper-opponent");
const scissorsOp = document.querySelector(".col-scissors-opponent");
const btn = document.querySelector("#reset");
let chosenItem = "";
let seconds = 500;
let itemArray = ["rock", "paper", "scissors"];
let playerScore = document.querySelector("#playerScore");
let opponentScore = document.querySelector("#opponentScore");
let s1 = 0;
let s2 = 0;
let gameCondition = "";

rock.onclick = function () {
  rock.style.backgroundColor = "whitesmoke";
  chosenItem = "rock";
  pl = player(chosenItem);
  opp = opponent(itemArray);
  gameCondition = compare(pl, opp);

  if (gameCondition == "win") {
    setTimeout(function () {
      s1++;
      playerScore.innerText = s1.toString();
    }, seconds);
  }
  if (gameCondition == "lose") {
    setTimeout(function () {
      s2++;
      opponentScore.innerText = s2.toString();
    }, seconds);
  }
};

paper.onclick = function () {
  paper.style.backgroundColor = "whitesmoke";
  chosenItem = "paper";
  pl = player(chosenItem);
  opp = opponent(itemArray);
  gameCondition = compare(pl, opp);

  if (gameCondition == "win") {
    setTimeout(function () {
      s1++;
      playerScore.innerText = s1.toString();
    }, seconds);
  }
  if (gameCondition == "lose") {
    setTimeout(function () {
      s2++;
      opponentScore.innerText = s2.toString();
    }, seconds);
  }
};

scissors.onclick = function () {
  scissors.style.backgroundColor = "whitesmoke";
  chosenItem = "scissors";
  pl = player(chosenItem);
  opp = opponent(itemArray);
  gameCondition = compare(pl, opp);

  if (gameCondition == "win") {
    setTimeout(function () {
      s1++;
      playerScore.innerText = s1.toString();
    }, seconds);
  } else if (gameCondition == "lose") {
    setTimeout(function () {
      s2++;
      opponentScore.innerText = s2.toString();
    }, seconds);
  }
};

function player(item) {
  if (item == "rock") return "rock";
  else if (item == "paper") return "paper";
  else return "scissors";
}

function opponent(array) {
  const randomItem = array[Math.floor(Math.random() * array.length)];

  if (randomItem == "rock") {
    return "rock";
  } else if (randomItem == "paper") return "paper";
  else return "scissors";
}

function compare(item1, item2) {
  if (item1 == "rock") {
    if (item2 == "rock") {
      tie(rock, rockOp);
      return "tie";
    } else if (item2 == "scissors") {
      win(rock, scissorsOp);
      return "win";
    } else {
      lose(rock, paperOp);
      return "lose";
    }
  }
  if (item1 == "paper") {
    if (item2 == "paper") {
      tie(paper, paperOp);
      return "tie";
    } else if (item2 == "rock") {
      win(paper, rockOp);
      return "win";
    } else {
      lose(paper, scissorsOp);
      return "lose";
    }
  }
  if (item1 == "scissors") {
    if (item2 == "scissors") {
      tie(scissors, scissorsOp);
      return "tie";
    } else if (item2 == "paper") {
      win(scissors, paperOp);
      return "win";
    } else {
      lose(scissors, rockOp);
      return "lose";
    }
  }
}

function tie(item1, item2) {
  setTimeout(function () {
    item1.style.backgroundColor = "orange";
    item2.style.backgroundColor = "orange";
  }, seconds);

  setTimeout(function () {
    item1.style.backgroundColor = "white";
    item2.style.backgroundColor = "white";
  }, 1000);
}

function win(item1, item2) {
  setTimeout(function () {
    item1.style.backgroundColor = "green";
    item2.style.backgroundColor = "red";
  }, seconds);

  setTimeout(function () {
    item1.style.backgroundColor = "white";
    item2.style.backgroundColor = "white";
  }, 1000);
}

function lose(item1, item2) {
  setTimeout(function () {
    item1.style.backgroundColor = "red";
    item2.style.backgroundColor = "green";
  }, seconds);

  setTimeout(function () {
    item1.style.backgroundColor = "white";
    item2.style.backgroundColor = "white";
  }, 1000);
}

btn.onclick = function () {
  s1 = 0;
  s2 = 0;
  playerScore.innerText = s1.toString();
  opponentScore.innerText = s2.toString();
};
