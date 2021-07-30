// clona el template y agrega los params provenientes de getPortfolioContent() a la seccion portfolio de la pagina
function addPortfolioCards(params) {
  const containerPortfolioCards = document.querySelector(
    ".portfolio__container-cards"
  );
  const templatePortfolioCard = document.querySelector(
    "#template__portfolio-card"
  );
  const clone = templatePortfolioCard.content.cloneNode(true);

  const portfolioImgEl = clone.querySelector(".portfolio-card__img");
  portfolioImgEl.src = params.imageUrl;

  const portfoliotitleEl = clone.querySelector(".portfolio-card__title");
  portfoliotitleEl.textContent = params.title;

  const portfolioParragraph = clone.querySelector(".portfolio-card__p");
  portfolioParragraph.textContent = params.description;

  const portfolioLink = clone.querySelector(".portfolio__link");
  portfolioLink.href = params.link;
  portfolioLink.textContent = "Ver aquí";

  containerPortfolioCards.appendChild(clone);
}
//Usa el id de una imagen del model para encontrar la url de la imagen en el Asset
function getAssetImageUrl(imageId, data) {
  const itemImageArray = data.includes.Asset.find((item) => {
    return item.sys.id == imageId;
  });
  return itemImageArray.fields.file.url;
}

// trae el contenido del modelo PortfolioCard desde la api y crea un array de objetos con cada instancia del modelo
function getPortfolioContent() {
  return fetch(
    "https://cdn.contentful.com/spaces/lj3cfwngwqd5/environments/master/entries?access_token=U4E_8brZv1ELdNO1SqdfpFESzL_KywzLQwAb7fusz3o&content_type=portfolioCards"
  )
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      const fieldsCollection = data.items.map((item) => {
        const imageId = item.fields.portfolioImg.sys.id;
        return {
          imageUrl: getAssetImageUrl(imageId, data),
          title: item.fields.portfolioTitle,
          description: item.fields.portfolioDescription,
          link: item.fields.portfolioLink,
        };
      });
      return fieldsCollection;
    });
}
function addFooter() {
  const footerEl = document.querySelector(".footer");
  console.log();
  footerComp(footerEl);
}
function addHeader() {
  const headerEl = document.querySelector(".header");
  componentHeader(headerEl);
}

function main() {
  addFooter();
  addHeader();
  getPortfolioContent().then((r) => {
    for (const item of r) {
      addPortfolioCards(item);
    }
  });
}
main();
