let submit = document.getElementById("submit");
let inputs = document.getElementById("inputs")
let bookTitle = inputs.getElementsByClassName('input')[0];
let author = inputs.getElementsByClassName('input')[1];
let table = document.getElementsByTagName("table")[0];
let tHead = document.getElementsByTagName("thead")
let tBody = document.getElementById("book-list");


// let row = document.createElement("tr")
// let td = document.createElement("td")
// console.log(td);

submit.addEventListener("click", () => {
    if( !bookTitle.value && !author.value){
        alert("Please insert value for Book Title & Author")
    }else {
        let row = document.createElement("tr")

        let td1 = document.createElement("td")
        td1.textContent = bookTitle.value;
        let td2 = document.createElement("td")
        td2.textContent = author.value;

        row.appendChild(td1)
        row.appendChild(td2)

        console.log(row);

        // Add click event listener to the row
        row.addEventListener("click", () => {
            console.log("Row clicked:");
            console.log("Book Title:", td1.textContent);
            console.log("Author:", td2.textContent);
        });

        table.appendChild(row);
       
    }
})

// table.addEventListener("click", () => {
//     if (tHead){
//         console.log("head")
//     }else if (tBody.childNodes.childNodes){
//         console.log("children")
//     }



// })


// console.log(table)



