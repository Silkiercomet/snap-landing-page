export const toggleDropdown = (query) => {
    let dropdown = document.querySelector(query)

    if(dropdown.childNodes[1].style.maxHeight){
        dropdown.childNodes[1].style.margin = "0 6px"
        return dropdown.childNodes[1].style.maxHeight = null
    }
    dropdown.childNodes[1].style.margin = "16px 6px"
    return dropdown.childNodes[1].style.maxHeight = dropdown.childNodes[1].scrollHeight + "px"
}

