let submit = document.getElementById("submit");
let inputs = document.getElementById("inputs")
let bookTitle = inputs.getElementsByClassName('inputs')[0];
let author = inputs.getElementsByClassName('inputs')[1];
let table = document.getElementsByTagName("table")[0];
let tBody = document.getElementById("book-list");


console.log(inputs);


submit.addEventListener("click", () => {
    if( bookTitle.value == "" && author.value == ""){
        console.log("try again")
    }else {
        console.log("good job");
    }
})



