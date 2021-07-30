function footerComp(el) {
  const footerComp = document.createElement("div");
  footerComp.className = "footer__container";
  footerComp.innerHTML = `
  <div class="footer__container-logo">
    <img src="./images/logo.png" alt="logo" class="footer__logo" />
  </div>
  <div class="footer__container-links">
  <a href="https://github.com/DenisMPar
  " class="footer__socialmedia-link">
    Git-Hub
    <img
      src="./images/git-logo.png"
      alt="git-hub logo"
      class="footer__social-media-logo"
    />
    </a>
    <span class="footer__socialmedia-link">Mail: denispar.dev@gmail.com</span>
    <span class="footer__socialmedia-link">Cel: 2604-051876</span>
  </div>`;

  el.appendChild(footerComp);
}
