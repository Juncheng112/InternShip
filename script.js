// Select all images inside the .box container
const lazyImages = document.querySelectorAll('.box img');

// Check if IntersectionObserver is supported
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src; // Replace placeholder with actual image source
        observer.unobserve(img); // Stop observing once loaded
      }
    });
  });

  // Apply observer to all images
  lazyImages.forEach(img => {
    // Use data-src for actual image source
    img.dataset.src = img.src; // Store the image source in a custom attribute
    img.src = ''; // Set src to empty initially
    observer.observe(img);
  });
} else {
  // Fallback: Load all images immediately if IntersectionObserver is not supported
  lazyImages.forEach(img => {
    img.src = img.dataset.src;
  });
}
