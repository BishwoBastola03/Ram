const listItems = document.querySelectorAll('.boy li'); // Select all list items

const typeWriter = (element, text, speed) => {
  let i = 0; 
  const typeSpeed = speed || 100; // Default speed if none is provided

  const type = () => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, typeSpeed); 
    }
  };

  type(); // Start the animation
};

listItems.forEach(listItem => {
  // Get the original text from the list item
  let originalText = listItem.textContent; 
  // Clear the text content before starting the animation
  listItem.textContent = ''; 
  // Apply typing animation with a speed of 150ms
  typeWriter(listItem, originalText, 200);
});