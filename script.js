//select popup-overlay popupbox button
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popupbox")
var addbutton=document.querySelector(".add-button")


addbutton.addEventListener("click", function()
{
    popupoverlay.style.display="block"
     popupbox.style.display="block"
})
//select cancelbutton
var cancelbutton=document.getElementById("cancelpopup")
cancelbutton.addEventListener("click",function()
{
    Event.preventDefault()
    popupoverlay.style.display="block"
     popupbox.style.display="block"
}

)
//select container, add book,book title,book author, book description
var container=document.querySelector(".container")
    var addbook=document.getElementById("addbook")
    var booktitle=document.getElementById("book-title-input")
var bookauthor=document.getElementById("book-author-input")
var shortdescription=document.getElementById("book-description-input")

addbook.addEventListener("click",function(event)

{
event.preventDefault()

    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${shortdescription.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
     popupbox.style.display="none"
})
function deletebook(event)
{
    event.target.parentElement.remove()
}