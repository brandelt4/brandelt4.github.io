// Main JavaScript for the minimalist academic website

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
      }
    });
  }, observerOptions);

  // Observe all sections with animation class
  const animatedElements = document.querySelectorAll('.content-section, .research-item');
  animatedElements.forEach(el => {
    observer.observe(el);
  });

  // Add hover effects to research items
  const researchItems = document.querySelectorAll('.research-item');
  researchItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(-4px)';
    });
  });

  // Mobile menu toggle (if needed in future)
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }

  // Lazy loading for images
  const images = document.querySelectorAll('img[data-src]');
  if (images.length > 0) {
    const imageObserver = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  // Add loading states for external links
  const externalLinks = document.querySelectorAll('a[target="_blank"]');
  externalLinks.forEach(link => {
    link.addEventListener('click', function() {
      this.style.opacity = '0.7';
      setTimeout(() => {
        this.style.opacity = '1';
      }, 200);
    });
  });
}); 