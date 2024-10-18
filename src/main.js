const marqueeTextWrapper = document.querySelector('.marquee-text-wrapper');
let lastScrollPos = window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener('scroll', function() {
  let scrollPos = window.pageYOffset || document.documentElement.scrollTop;
  let scrollDiff = scrollPos - lastScrollPos;
  
  // Diagonal scroll effect
  marqueeTextWrapper.style.transform = `translate(${scrollPos * 0.3}px, ${scrollPos * 0.1}px)`;
  
  // Optional opacity change based on scroll
  marqueeTextWrapper.style.opacity = Math.max(0.3, 1 - scrollPos * 0.0015);
  
  lastScrollPos = scrollPos; // Update last scroll position
});
