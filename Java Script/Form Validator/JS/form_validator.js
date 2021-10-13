const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const county = document.querySelector("#country");
const tel = document.querySelector("#tel");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const smallText = document.getElementsByClassName("warningText");
const succText = document.querySelector(".succText");
const btn = document.querySelector("#send");
let pattern = /[a-zA-Z]/

btn.addEventListener("click", function () {
  validate();
});

function validate() {
  if (firstName.value == "") {
    smallText[0].innerText = "Please enter your name.";
    firstName.focus()
    return false;
  } else if (lastName.value == "") {
    smallText[1].innerText = "Please enter your last name.";
    lastName.focus()
    return false;
  } else if (county.value == "--") {
    county.focus()
    smallText[2].innerText = "Please select your country.";
    return false;
  } else if ((tel.value == "") || (pattern.test(tel.value)) || (tel.value.length!=10)) {
    smallText[3].innerText = "Please enter your phone number.";
    tel.focus()
    return false;
  } else if ((email.value == "") || (!email.value.includes("@")) || (!email.value.includes("."))) {
    smallText[4].innerText = "Please enter your e-mail or check the pattern.";
    email.focus()
    return false;
  } else if (message.value == "") {
    smallText[5].innerText = "Please enter your message.";
    message.focus()
  } else {
    for (let i =0; i<smallText.length;i++)
      smallText[i].innerText = "";
    succText.innerText = "Form is valid!"
    return true;
  }
}
