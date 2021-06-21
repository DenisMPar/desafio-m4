function formComponent(el) {
  const formComp = document.createElement("div");
  formComp.className = "cont-form";
  formComp.innerHTML = `<p class="contact-form__p">Escríbeme</p>
    <form class="contact-form" action="">
      <label for="nombre" class="contact-form__label-name">
        NOMBRE
        <input type="text" class="contact-form__input-name" />
      </label>

      <label for="email" class="contact-form__label-email">
        EMAIL
        <input type="text" class="contact-form__input-email" />
      </label>

      <label for="nombre" class="contact-form__label-message">
        MENSAJE
        <textarea
          class="contact-form__area-message"
          name="mensaje"
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </label>
      <button class="contact-form__button">Enviar</button>
    </form>`;

  el.appendChild(formComp);
}
