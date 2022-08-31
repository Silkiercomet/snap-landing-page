const modal = document.querySelector("#myModal")
const modalMenu = document.querySelector(".modal-content")
let mobileMenuToggle = false

export const toggleMenu = () => {
    if(mobileMenuToggle){
        modal.classList.remove("modal-active")
        modalMenu.classList.remove("modal__menu-active")
        mobileMenuToggle = false
        return
    }
    modal.classList.add("modal-active")
    modalMenu.classList.add("modal__menu-active")
    mobileMenuToggle = true
}
