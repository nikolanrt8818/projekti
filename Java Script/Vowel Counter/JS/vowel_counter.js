
const inputText = document.querySelector("#words") 
const btnCheck = document.querySelector("#check")


btnCheck.onclick = function() {
    if (inputText.value == "")
        alert("Textbox is empty!")
    else {
        alert("Vowels: " + checkVowels(inputText.value).toString())
        inputText.value = ""
    }
}


function checkVowels(text) {
    let count = 0
    for (let chr of text) {
        if ((chr == 'a') || (chr == 'A'))
            count ++
        if ((chr == 'e') || (chr == 'E'))
            count ++
        if ((chr == 'i') || (chr == 'I'))
            count ++
        if ((chr == 'o') || (chr == 'O'))
            count ++
        if ((chr == 'u') || (chr == 'U'))
            count ++
    }

    return count
}

