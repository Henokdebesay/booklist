let submit = document.getElementById("submit");
let inputs = document.getElementById("inputs")
let bookTitle = inputs.getElementsByClassName('input')[0];
let author = inputs.getElementsByClassName('input')[1];
let table = document.getElementsByTagName("table")[0];
let tBody = document.getElementById("book-list");

// let row = document.createElement("tr")
// let td = document.createElement("td")
// console.log(td);

submit.addEventListener("click", () => {
    if( !bookTitle.value && !author.value){
        console.log("try again")
    }else {
        let row = document.createElement("tr")

        let td1 = document.createElement("td")
        td1.textContent = bookTitle.value;
        let td2 = document.createElement("td")
        td2.textContent = author.value;

        row.appendChild(td1)
        row.appendChild(td2)

        console.log(row);

        table.appendChild(row);
       
    }
})



