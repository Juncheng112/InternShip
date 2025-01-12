const box = document.getElementById('box');

  // Function to dynamically change the speed of the rotation
  function slowDownRotation() {
    box.style.animationDuration = '60s'; // Slower rotation for clarity
  }

  // Function to resize images dynamically for better clarity
  function adjustImageSize() {
    const images = document.querySelectorAll('.box img');
    images.forEach(img => {
      img.style.width = '60%'; // Adjust width for better clarity
      img.style.height = '60%'; // Adjust height for better clarity
    });
  }

  // Initial adjustments
  slowDownRotation();
  adjustImageSize();