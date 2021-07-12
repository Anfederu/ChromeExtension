
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()

})
function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
        listItems += "<li>" + myLeads[i] + "</li>"
    }
    // 3. Render the listItems inside the unordered list using ulEl.innerHTML
    ulEl.innerHTML = listItems

}

