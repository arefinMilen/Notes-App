const containerBox = document.querySelector(".contain-box")
const createButton = document.querySelector(".btn")
let notes = document.querySelectorAll(".input-box")

function showNotes(){
    containerBox.innerHTML=localStorage.getItem("notes")
}
showNotes()

function updateNotes()
{
    localStorage.setItem("notes",containerBox.innerHTML)
}

createButton.addEventListener("click",()=>
{
    let inputBox = document.createElement("p")
    let img = document.createElement("img")
    inputBox.className = "input-box"
    inputBox.setAttribute("contenteditable","true")
    img.src="images/delete.png"
    containerBox.appendChild(inputBox).appendChild(img)
})

containerBox.addEventListener("click",function(e)
{
    if(e.target.tagName==="IMG")
    {
        e.target.parentElement.remove()
        updateNotes()
    }
    else if(e.target.tagName === "P"){
        notes=document.querySelectorAll(".input-box")
        notes.forEach( nt => {
            nt.onkeyup = function()
            {
                updateNotes()
            }
        })
    }

})

document.addEventListener("keydown",event=>{
    if(event.key==="Enter")
    {
        document.execCommand("insertLineBreak")
        event.preventDefault()
    }
})