const input = document.querySelector("#number");
const btn = document.querySelector("#btnGuess");
const text = document.querySelector("#warningText");
const triesText = document.querySelector("#tries");

const easy = document.querySelector("#easy");
const hard = document.querySelector("#hard");

randomNumber = Math.floor(Math.random() * 51).toString();
console.log(randomNumber);

input.disabled = true;
btn.disabled = true;

easy.onclick = function () {
  hard.checked = false;
  easy.checked = true;
  setEasy();
};

hard.onclick = function () {
  hard.checked = true;
  easy.checked = false;
  setHard();
};

btn.onclick = function () {
  input.focus();
  check(input.value, randomNumber, text);
  if (tries == 0) {
    text.style.color = "red";
    text.textContent = `You ran out of tries, game over! Correct number was ${randomNumber}.`;
    input.disabled = "true";
    btn.disabled = "true";
  }
  input.focus();
};

function check(num, rndNum) {
  pom = num.toString();

  if (num > 50 || num < 0) {
    alert("Number out of range!");
    input.value = "";
    input.focus();
  } else if (pom == "") {
    alert("Textbox is empty!");
    input.focus();
  } else {
    rez = num - rndNum;

    if (rez == 0) {
      text.style.color = "green";
      text.textContent = `${rndNum} is a correct number! You Won!`;
      input.disabled = "true";
      btn.disabled = "true";
    } else if ((rez <= -1 && rez >= -2) || (rez >= 1 && rez <= 2)) {
      tries--;
      text.style.color = "orange";
      text.textContent = `Close!`;
    } else if (rez < -1) {
      tries--;
      text.style.color = "red";
      text.textContent = `${num} is too low!`;
    } else if (rez > 1) {
      tries--;
      text.style.color = "red";
      text.textContent = `${num} is too high!`;
    }

    triesText.textContent = tries.toString();
  }
}

function setEasy() {
  tries = 10;
  triesText.textContent = tries.toString();
  input.focus();
  easy.disabled = true;
  hard.disabled = true;
  input.disabled = false;
  btn.disabled = false;
}

function setHard() {
  tries = 5;
  triesText.textContent = tries.toString();
  input.focus();
  easy.disabled = true;
  hard.disabled = true;
  input.disabled = false;
  btn.disabled = false;
}
