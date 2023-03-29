let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    if(saveEl.innerText == 'Previous entries:') {
        var countStr = ' ' + count
    }
    else {
        var countStr = ' - ' + count
    }
    saveEl.innerText += countStr
    countEl.textContent = 0
    count = 0
}
