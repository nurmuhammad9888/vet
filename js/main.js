
let elBtnOpen = document.querySelector(".site-header__btn-text");
let elModal = document.querySelector(".modal");
let elBtnClose = document.querySelector(".modal__close-btn");
let elBody = document.querySelector("body");


elBtnOpen.addEventListener("click", function(vet){
    vet.preventDefault
    elModal.classList.add("modal-active")
    elBody.classList.add("body-active")
})
elBtnClose.addEventListener("click", function(){
    elModal.classList.remove("modal-active")
    elBody.classList.remove("body-active")
})