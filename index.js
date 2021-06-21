// clona el template y agrega los params provenientes de getHomeContent() a la seccion Home de la pagina
function addHomeContent(params) {
  const containerHomeEl = document.querySelector(".main__container");
  const templateHomeEl = document.querySelector("#template__home");
  const clone = templateHomeEl.content.cloneNode(true);

  const titleEl = clone.querySelector(".main__title");
  titleEl.textContent = params.title;
  containerHomeEl.appendChild(titleEl);

  const subtitleEl = clone.querySelector(".main__sub-title");
  subtitleEl.textContent = params.subtitle;
  containerHomeEl.appendChild(subtitleEl);
}

// clona el template y agrega los params provenientes de getAboutMeContent() a la seccion aboutMe de la pagina
function addAboutMeContent(params) {
  const containerAboutMeEl = document.querySelector(".about-me__container");
  const templateAboutMeEl = document.querySelector("#template__about-me");
  const clone = templateAboutMeEl.content.cloneNode(true);
  const textContEl = clone.querySelector(".about-me__text-container");

  const imgEl = clone.querySelector(".about-me__img");
  imgEl.src = params.imageUrl;
  containerAboutMeEl.appendChild(imgEl);

  const titleEl = clone.querySelector(".about-me__title");
  titleEl.textContent = params.title;
  textContEl.appendChild(titleEl);

  const parragraphEl = clone.querySelector(".about-me__p");
  parragraphEl.textContent = params.parragraph;
  textContEl.appendChild(parragraphEl);

  containerAboutMeEl.appendChild(textContEl);
}

// clona el template y agrega los params provenientes de getServicesContent() a la seccion services de la pagina
function addServiceCards(params) {
  const containerServiceCards = document.querySelector(
    ".services__container-cards"
  );
  const templateServiceCard = document.querySelector("#template__service-card");
  const clone = templateServiceCard.content.cloneNode(true);

  const serviceImgEl = clone.querySelector(".service-card__img");
  serviceImgEl.src = params.imageUrl;

  const servicetitleEl = clone.querySelector(".service-card__title");
  servicetitleEl.textContent = params.title;

  const serviceParragraph = clone.querySelector(".service-card__p");
  serviceParragraph.textContent = params.description;

  containerServiceCards.appendChild(clone);
}

// trae el contenido del modelo home desde la api y crea un array de objetos con cada instancia del modelo
function getHomeContent() {
  return fetch(
    "https://cdn.contentful.com/spaces/lj3cfwngwqd5/environments/master/entries?access_token=U4E_8brZv1ELdNO1SqdfpFESzL_KywzLQwAb7fusz3o&content_type=home"
  )
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      const fieldsCollection = data.items.map((item) => {
        return {
          title: item.fields.homeTitle,
          subtitle: item.fields.homeSubtitle,
        };
      });
      return fieldsCollection;
    });
}

// trae el contenido del modelo AboutMe desde la api y crea un array de objetos con cada instancia del modelo
function getAboutMeContent() {
  return fetch(
    "https://cdn.contentful.com/spaces/lj3cfwngwqd5/environments/master/entries?access_token=U4E_8brZv1ELdNO1SqdfpFESzL_KywzLQwAb7fusz3o&content_type=aboutMe"
  )
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      const fieldsCollection = data.items.map((item) => {
        const imageId = item.fields.aboutMeImage.sys.id;
        return {
          imageUrl: getAssetImageUrl(imageId, data),
          title: item.fields.aboutMeTitle,
          parragraph: item.fields.aboutMeParragraph,
        };
      });
      return fieldsCollection;
    });
}

//Usa el id de una imagen del model para encontrar la url de la imagen en el Asset
function getAssetImageUrl(imageId, data) {
  const itemImageArray = data.includes.Asset.find((item) => {
    return item.sys.id == imageId;
  });
  return itemImageArray.fields.file.url;
}

// trae el contenido del modelo ServiceCard desde la api y crea un array de objetos con cada instancia del modelo
function getServicesContent() {
  return fetch(
    "https://cdn.contentful.com/spaces/lj3cfwngwqd5/environments/master/entries?access_token=U4E_8brZv1ELdNO1SqdfpFESzL_KywzLQwAb7fusz3o&content_type=serviceCard"
  )
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      const fieldsCollection = data.items.map((item) => {
        const imageId = item.fields.serviceImg.sys.id;
        return {
          imageUrl: getAssetImageUrl(imageId, data),
          title: item.fields.serviceTitle,
          description: item.fields.serviceDescription,
        };
      });
      return fieldsCollection;
    });
}

function addForm() {
  const formCont = document.querySelector(".contact");
  formComponent(formCont);
}
function addFooter() {
  const footerEl = document.querySelector(".footer");
  console.log();
  footerComp(footerEl);
}

function main() {
  const headerEl = document.querySelector(".header");
  componentHeader(headerEl);

  getHomeContent().then((r) => {
    for (const item of r) {
      addHomeContent(item);
    }
  });

  getAboutMeContent().then((r) => {
    for (const item of r) {
      addAboutMeContent(item);
    }
  });

  getServicesContent().then((r) => {
    for (const item of r) {
      addServiceCards(item);
    }
  });
  addForm();
  addFooter();
}
main();
