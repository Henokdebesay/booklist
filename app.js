let inputs = document.getElementById("inputs")
let submit = inputs.lastElementChild;
let bookTitle = inputs.getElementsByClassName('input')[0];
let author = inputs.getElementsByClassName('input')[1];
let table = document.getElementsByTagName("table")[0];
let tHead = document.getElementsByTagName("thead")
let tBody = document.querySelector("book-list");

let quote = document.getElementById("disney");



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

        // Add click event listener to the row
        row.addEventListener("click", () => {
          if(!row.style.textDecoration){
            row.style.textDecoration = 'line-through'
          }else if(row.style.textDecoration = 'line-through' ){
            row.style.textDecoration = 'none'
          }

          quote.add.classList("visible")



        }); 

// I would like to remove the row that I am clicking on but it just removes the last element
        row.addEventListener("dblclick", () => {
            row.remove()
            confirm("Are you sure you want to delete the item?")
          }); 


        console.log(row)

        table.appendChild(row);
       
    }
})

    submit.style.color = "#121EED";
    submit.style.background = "#EDE112";


submit.addEventListener("mouseover", () => {
    submit.style.color = "#EDE112";
    submit.style.background = "#121EED";
})
submit.addEventListener("mouseout", () => {
    submit.style.color = "#121EED";
    submit.style.background = "#EDE112";
})



// console.log(table)



