const marioRect = document.getElementById("marioRect");
const peachRect = document.getElementById("peachRect");

marioRect.addEventListener("click", function() {
  peachRect.setAttribute("stroke", "none");
  peachRect.setAttribute("fill", "#00FF00");
  peachRect.setAttribute("opacity", "0.5");
});
