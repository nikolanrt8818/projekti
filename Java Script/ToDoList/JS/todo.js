
const btnAdd = document.querySelector("#add")
const inputItem = document.querySelector("#item")
const itemList = document.querySelector("#list")
const btnClear = document.querySelector("#clear")
const row = document.createElement("li")

/*datum*/ 
let curDate = document.querySelector("#curDate")
let today = new Date()
let date ="Date: " + today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate()
curDate.innerText = date;

btnAdd.onclick = function() {
  addItem(inputItem.value)
  inputItem.value = ""
}

btnClear.onclick = function() {
  clearList(itemList)
}

/*funkcija za dodavanje stavki*/ 
function addItem(text) {
  if (text =="")
    alert("Textbox is empty!")
  else {
    const row = document.createElement("li")
    const btnx = document.createElement("button")
    btnx.type = "button"
    btnx.innerText = "X"
    btnx.setAttribute("onclick","deleteItem(this)")
  
    const lbl = document.createElement("label")
    lbl.innerText = "--"
    lbl.setAttribute('onclick','done(this)')
  
    row.innerHTML = text + " " + lbl.outerHTML + " " + btnx.outerHTML
    itemList.appendChild(row)
  }
}

/*brisanje liste*/
function clearList(list) {
  list.innerHTML = ""
}

/*stikla*/ 
function done(lbl) {
  lbl.innerText = "\u2713"
  lbl.style.color = "whitesmoke"
}

/*brisanje stavke*/ 
function deleteItem(btn) {
  btn.parentElement.remove()
}