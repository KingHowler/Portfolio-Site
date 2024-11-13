// JavaScript to toggle the collapsible content
document.querySelectorAll(".menu-button").forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    content.style.display = content.style.display === "none" ? "block" : "none";
  });
});

// Define the media query for screens wider than 700px
const mediaQuery = window.matchMedia("(min-width: 700px)");

// Function to toggle display style, class, and border-left based on media query
function handleMediaQueryChange(event) {
  const dropdowns = document.querySelectorAll(".dropdown-content");

  dropdowns.forEach(dropdown => {
    // Toggle display style based on media query
    if (event.matches) {
      // Screen width is 700px or more
      dropdown.removeAttribute("style"); // Remove inline style to show
    } else {
      // Screen width is less than 700px
      dropdown.style.display = "none"; // Set inline style to hide
    }

    // Toggle "lbcolorWheel" class and border-left for each child element except last child
    const children = dropdown.children;
    Array.from(children).forEach((child, index) => {
      const isLastChild = index === children.length - 1;

      if (event.matches) {
        if (!isLastChild) {
          child.classList.add("lbcolorWheel"); // Add class when width is 700px or more
        }
        child.style.borderLeft = ""; // Clear any inline border-left style
      } else {
        child.classList.remove("lbcolorWheel"); // Remove class when width is less than 700px
        child.style.borderLeft = "none"; // Remove border-left by setting it to "none"
      }
    });
  });
}

// Attach the event listener to the media query
mediaQuery.addEventListener("change", handleMediaQueryChange);

// Initial check to apply correct styles and classes on page load
handleMediaQueryChange(mediaQuery);
