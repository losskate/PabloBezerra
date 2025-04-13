document.addEventListener('DOMContentLoaded', () => {
  // Toggle do menu mobile
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      console.log('Hamburger clicado'); // Debug para confirmar o clique
      navLinks.classList.toggle('nav-active');
    });
  }

  // Modal para exibir o email
  const emailBtn = document.getElementById('email-btn');
  const emailModal = document.getElementById('email-modal');
  const closeBtn = emailModal ? emailModal.querySelector('.close') : null;

  if (emailBtn && emailModal && closeBtn) {
    emailBtn.addEventListener('click', (e) => {
      e.preventDefault(); // Impede a ação padrão do link
      emailModal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
      emailModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
      if (e.target === emailModal) {
        emailModal.style.display = 'none';
      }
    });
  }
});
