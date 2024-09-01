document.addEventListener('mouseover', e=>{
    const isDropdownButton = e.target.matches("[data-dropdown-btn]")
    if(!isDropdownButton && e.target.closest('[data-dropdown]') !=null) return

    let currentDropdown
    if (isDropdownButton){
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('')
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown =>{
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})

