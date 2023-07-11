const popupButton = document.getElementById('popupButton');
const popupContainer = document.getElementById('popupContainer');

popupButton.addEventListener('click', () => {
  popupContainer.classList.toggle('visible');
});
