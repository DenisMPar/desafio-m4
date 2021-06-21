function componentHeader(container){
    const headerEl = document.createElement("div")
    headerEl.className = "header__cont"
    headerEl.innerHTML = `<a href="./index.html" class = "logo__link" >
    <img src="./images/logo.png" alt="" class="logo" />
    </a>
    <nav class="header__nav">
      <a href="" class="header__nav-link">Portfolio</a>
      <a href="" class="header__nav-link">Servicios</a>
      <a href="" class="header__nav-link">Contacto</a>
    </nav>
    <button class="header__burger-button">
      <span class="header__burger-button-span"> </span>
      <span class="header__burger-button-span"> </span>
      <span class="header__burger-button-span"> </span>
    </button>
    <div class="menu">
      <div class="menu__cont-button">
        <button class="menu__close-button"></button>
      </div>
      <nav class="menu__nav">
        <a href="./portfolio.html" class="menu__nav-link">Portfolio</a>
        <a href="" class="menu__nav-link">Servicios</a>
        <a href="" class="menu__nav-link">Contacto</a>
      </nav>
    </div>`
    container.appendChild(headerEl)
    const menuEl = document.querySelector(".menu")
    const openMenuEl = document.querySelector(".header__burger-button")
    const closeMenuEl = document.querySelector(".menu__close-button")

    openMenuEl.addEventListener("click", ()=>{
    menuEl.style.display = "initial"
    })
    closeMenuEl.addEventListener("click", ()=>{
    menuEl.style.display = "none"
    })

}