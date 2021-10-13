
const noteText = document.querySelector("#note")
const btnAdd = document.querySelector("#add")
const noteContainer = document.querySelector("#noteContainer")
const modal = document.querySelector("#modal")
const modalText = document.querySelector("#modalText")
const X = document.querySelector(".close")
let count = 0

btnAdd.onclick = function() {

    if (noteText.value == "")
        alert("Textbox is empty!")
    else {
        addNote()
        noteText.value = ""
    }
}


function addNote() {
    count ++
    const heading = document.createElement("h3")
    const note = document.createElement("div")
    const txt = document.createElement("p")
    const btn = document.createElement("button")

    heading.innerText = "Note " + count.toString()

    txt.innerText = noteText.value

    note.setAttribute("style","border: 2px solid whitesmoke; width:45%; display: inline-block; padding: 10px; margin: 10px;")
    note.setAttribute("id","notediv")
    txt.setAttribute("style", "height: 40px; overflow: hidden")

    btn.type = "button"
    btn.innerText = "View Detail"
    btn.setAttribute("id","btnView")
    
    btn.onclick = function() {
        modal.setAttribute("style","display: block")
        modalText.innerText = txt.innerText
    }

    note.appendChild(heading)
    note.appendChild(txt)
    note.appendChild(btn)
    noteContainer.appendChild(note)
}

X.onclick = function() {
    modal.style.display = "none"
}
