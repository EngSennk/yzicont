// Função para abrir o pop-up
function openPopup() {
  document.getElementById("popup").style.display = "block";
}

// Função para fechar o pop-up
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Evento de clique no botão de fechar
document.querySelector(".popup-close").addEventListener("click", closePopup);

// Abre o pop-up quando a página é carregada
window.addEventListener("load", openPopup);