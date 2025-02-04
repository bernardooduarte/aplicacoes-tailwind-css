let menuAberto = true;
const botaoMenu = document.getElementById("botao-menu");

if (botaoMenu) {
  botaoMenu.addEventListener("click", () => chavearMenu());
}

function chavearMenu() {
  console.log(1);
  const menu = document.getElementById("menu-opcoes");

  if (menuAberto) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }

  menuAberto = !menuAberto;
}
