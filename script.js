const imgContainer = document.querySelector(".images-container")
const panelEl = document.querySelectorAll(".panel")


imgContainer.addEventListener("click", function (e){
    removeActive()
  e.target.classList.add("active")
})

function removeActive () {
    panelEl.forEach(function (panel) {
        panel.classList.remove("active")        
    }) 
}