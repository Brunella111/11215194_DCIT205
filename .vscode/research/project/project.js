function toggleDetails(button) {
    const details = button.nextElementSibling;
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
  }
  
const detailButtons = document.querySelectorAll('.details-btn');

detailButtons.forEach(button => {
  button.addEventListener('click', () => {
    const details = button.nextElementSibling;
    details.classList.toggle('show');
  });
});
