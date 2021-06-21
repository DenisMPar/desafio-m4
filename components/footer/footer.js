function footerComp(el) {
  const footerComp = document.createElement("div");
  footerComp.className = "footer__container";
  footerComp.innerHTML = `
  <div class="footer__container-logo">
    <img src="./images/logo.png" alt="logo" class="footer__logo" />
  </div>
  <div class="footer__container-links">
    <a href="" class="footer__socialmedia-link">
      Instagram
      <img
        src="./images/instagram-logo.png"
        alt="intagram logo"
        class="footer__social-media-logo"
      />
    </a>

    <a href="" class="footer__socialmedia-link">
      Linkedin
      <img
        src="./images/in-logo.png"
        alt="linkedin logo"
        class="footer__social-media-logo"
      />
    </a>

    <a href="" class="footer__socialmedia-link">
      Git-Hub
      <img
        src="./images/git-logo.png"
        alt="git-hub logo"
        class="footer__social-media-logo"
      />
    </a>
  </div>`;
  el.appendChild(footerComp);
}
