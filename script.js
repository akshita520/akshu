function rotateIcon(card) {
    const icon = card.querySelector(".icon");
    icon.style.transform = "rotate(360deg)";
  }
  
  function resetIcon(card) {
    const icon = card.querySelector(".icon");
    icon.style.transform = "rotate(0deg)";
  }
  