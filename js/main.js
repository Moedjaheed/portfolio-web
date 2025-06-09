// Load components
async function loadComponents() {
  try {
    // Load header
    const headerResponse = await fetch('/components/header.html');
    const headerContent = await headerResponse.text();
    document.getElementById('header-container').innerHTML = headerContent;

    // Load background
    const bgResponse = await fetch('/components/background.html');
    const bgContent = await bgResponse.text();
    document.getElementById('background-container').innerHTML = bgContent;

    // Load footer
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
      const footerResponse = await fetch('components/footer.html');
      const footerContent = await footerResponse.text();
      footerContainer.innerHTML = footerContent;
    }
  } catch (error) {
    console.error('Error loading components:', error);
  }
}

// Function to highlight current page in navigation
function highlightCurrentPage() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('text-yellow-400');
    }
  });
}

// Initialize components
document.addEventListener('DOMContentLoaded', async () => {
  await loadComponents();
  highlightCurrentPage();
});

function handleSubmit(event) {
  event.preventDefault();
  alert("Pesan Anda telah dikirim!");
}
