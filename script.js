window.addEventListener('DOMContentLoaded', () => {
  alert('Welcome to Ashwin A. R\'s Portfolio!');

  // Animate buttons on click
  const buttons = document.querySelectorAll('.btn-gradient');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      button.style.transform = 'scale(0.9)';
      setTimeout(() => {
        button.style.transform = 'scale(1)';
      }, 150);
      console.log(`You clicked: ${button.textContent}`);
    });
  });

  // Toggle Victory Studios section
  const toggleBtn = document.getElementById('toggleVictory');
  const victoryContent = document.getElementById('victoryContent');

  toggleBtn.addEventListener('click', () => {
    victoryContent.classList.toggle('hidden');
  });

  // Add dynamic year in footer
  const footer = document.querySelector('footer p');
  const currentYear = new Date().getFullYear();
  footer.textContent = `© ${currentYear} Ashwin A. R. All rights reserved.`;
});
