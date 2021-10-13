let cols = document.getElementsByClassName("col");
const wrongAnswers = document.querySelector("#wrong");
const correctAnswers = document.querySelector("#correct");
let col1 = cols[0];
let col2 = cols[1];
let col3 = cols[2];
let col4 = cols[3];
let col5 = cols[4];
let col6 = cols[5];
let count = 0;
let seconds = 700;
let correct = 0;
let wrong = 0;
let n = 0;
let clicked = [];
let clickedImg = [];
let images = [
  "url(IMG/dog.png)",
  "url(IMG/frog.png)",
  "url(IMG/monkey.png)",
  "url(IMG/dog.png)",
  "url(IMG/frog.png)",
  "url(IMG/monkey.png)",
];
let numbers = [0, 1, 2, 3, 4, 5];

shuffle(images);
shuffle(numbers);

document.querySelectorAll(".col").forEach((col) => {
  col.style.backgroundImage = images[numbers[n]];
  n++;

  col.addEventListener("click", (event) => {
    col.style.backgroundBlendMode = "normal";
    col.style.backgroundColor = "whitesmoke";
    count++;

    clicked.push(col.style.backgroundImage);
    clickedImg.push(col);

    if (count == 2) {
      if (check(clicked, clickedImg)) {
        correct++;
        correctAnswers.innerText = correct.toString();
        clicked = [];
        clickedImg = [];
      } else {
        wrong++;
        wrongAnswers.innerText = wrong.toString();
        clicked = [];
        clickedImg = [];
      }
      count = 0;
      if (correct == 3) {
        setTimeout(function() {
          alert("You Won!");
        }, 300);
      }
    }
  });
});

function check(click, clickIMG) {
  if (click[0] == click[1]) {
    return true;
  } else {
    setTimeout(function () {
      clickIMG[0].style.backgroundBlendMode = "overlay";
      clickIMG[1].style.backgroundBlendMode = "overlay";
      clickIMG[0].style.backgroundColor = "red";
      clickIMG[1].style.backgroundColor = "red";
    }, seconds);
    return false;
  }
}

function shuffle(array) {
  return array.sort((a, b) => 0.5 - Math.random());
}
