const openMenu = document.getElementById("open_mobile")
const closeMenu = document.getElementById("close_mobile")

const companyDropdown_mobile = document.querySelector(".company")
const featuresDropdown_mobile = document.querySelector(".features")

import {toggleMenu} from "./utilities/modalHandler.js"
import {toggleDropdown} from "./utilities/togglemenumobile.js"


// handling modal mobile menu
[openMenu, closeMenu].forEach(element => {
    element.addEventListener("click",toggleMenu)
});
//handling mobile dropdown
featuresDropdown_mobile.addEventListener("click", (e) => {
    e.target.childNodes[1].classList.toggle("rotate")
    toggleDropdown(".dropdown__content-features")
})
companyDropdown_mobile.addEventListener("click", (e) => {
    e.target.childNodes[1].classList.toggle("rotate")
    toggleDropdown(".dropdown__content")
})