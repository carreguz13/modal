// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay


var modalBtn = document.querySelector(".modal-btn")
var modalOverlay = document.querySelector(".modal-overlay")
var closeBtn = document.querySelector(".close-btn")


modalBtn.addEventListener ("click", function(){
    modalOverlay.classList.toggle("open-modal")
})

closeBtn.addEventListener("click", function(){
    modalOverlay.classList.remove("open-modal")
})