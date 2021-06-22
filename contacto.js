function addFooter() {
  const footerEl = document.querySelector(".footer");
  console.log();
  footerComp(footerEl);
}
function addHeader() {
  const headerEl = document.querySelector(".header");
  componentHeader(headerEl);
}
function addForm() {
  const formCont = document.querySelector(".contact");
  formComponent(formCont);
}

function main() {
  addFooter();
  addHeader();
  addForm();
}
main();
