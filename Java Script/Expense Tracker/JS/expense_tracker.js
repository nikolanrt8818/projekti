

const inputName = document.querySelector("#nameExp")
const inputDate = document.querySelector("#dateExp")
const inputAmount = document.querySelector("#amountExp")
const btnAdd = document.querySelector("#add")
const table = document.querySelector("#table")


btnAdd.onclick = function() {
    if (checkEntries(inputName.value,inputDate.value,inputAmount.value)) {
        addRow(table) 
        inputName.value = ""
        inputDate.value = ""
        inputAmount.value = ""
    }
    else
        alert("Fill every entry.")
}


function addRow(tbl) {
    const row = document.createElement("tr")
    const colName = document.createElement("td")
    const colDate = document.createElement("td")
    const colAmount = document.createElement("td")
    const colRemove = document.createElement("td")
    const btnX = document.createElement("button")

    btnX.innerText = "X"
    btnX.type = "button"
    btnX.setAttribute("onclick","removeRow(this)")

    colName.innerText = inputName.value
    colDate.innerText = inputDate.value
    colAmount.innerText = "\u20AC" + inputAmount.value
    colRemove.innerHTML = btnX.outerHTML

    row.appendChild(colName)
    row.appendChild(colDate)
    row.appendChild(colAmount)
    row.appendChild(colRemove)   
    tbl.appendChild(row)
}

function removeRow(r) {
    r.parentNode.parentNode.remove()
}

function checkEntries(n, d, a) {
    if (n == "")
        return false
    else if (d == "")
        return false
    else if (a == "")
        return false
    else 
        return true
}