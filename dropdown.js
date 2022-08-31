document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
  
    let currentDropdown
    if (isDropdownButton) {
      currentDropdown = e.target.closest("[data-dropdown]")
      currentDropdownIcon = e.target.childNodes[1]
      currentDropdown.classList.toggle("active")
      currentDropdownIcon.classList.toggle("rotate-desktop")
    }
  
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
      if (dropdown === currentDropdown) return
      dropdown.classList.remove("active")
      currentDropdownIcon.classList.remove("rotate-desktop")
    })
  })