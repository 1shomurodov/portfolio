document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in");
  
    // Hammasi birgalikda, lekin sekin-asta
    elements.forEach(el => {
      el.style.opacity = 0;
      el.style.transform = "translateY(20px)";
    });
  
    setTimeout(() => {
      elements.forEach(el => {
        el.style.transition = "opacity 1s ease, transform 1s ease";
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      });
    }, 400); // 0.2s kechikishdan keyin hammasi asta-sekin chiqadi
  });


  

