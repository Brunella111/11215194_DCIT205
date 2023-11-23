document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll("h2"); // Select all <h2> and <h3> elements
    
    
  
    window.addEventListener("scroll", function() {
      headers.forEach(header => {
        header.style.position = "sticky";
        header.style.top = "0";
        header.style.zIndex = "999";
      });
    });
  });
  