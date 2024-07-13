addbutton = document.getElementById("addbutton")
overlay = document.querySelector(".overlay")
popupbox = document.querySelector(".popupbox")


function popup() {
    overlay.style.display = "block";
    popupbox.style.display = "block";
}
function cancel(event) {
    event.preventDefault()
    overlay.style.display = "none";
    popupbox.style.display = "none";
    
}

// addbutton.addEventListener("click", function () {
//     overlay.Style.display = "block";
//     popupbox.style.display = "block";
// })

container = document.querySelector(".container")
bookcontainer = document.querySelector(".book-container")
booktitle = document.getElementById("book-title")
bookauther = document.getElementById("book-auther")
bookdescription = document.getElementById("book-description")
addbook = document.getElementById("add-book")

function add(event) {
    event.preventDefault()
    overlay.style.display = "none";
    popupbox.style.display = "none";

   var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML = ` <h2>${booktitle.value}</h2>
            <h3>${bookauther.value}</h3>
            <p>${bookdescription.value}</p>
            <button  onclick="delet(event)">delete</button>`
            container.append(div)

}

function delet(event){
    event.target.parentElement.remove()
}
