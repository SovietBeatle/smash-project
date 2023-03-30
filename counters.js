var rects = [
  kingKRoolRect,
  bowserRect,
  pokemonTrainerRect,
  ridleyRect,
  kingDededeRect,
  lucinaRect,
  marthRect,
  shulkRect,
  cloudRect,
  palutenaRect,
  marioRect
];

var originalAttributes = {};
rects.forEach(function(rect) {
  originalAttributes[rect.id] = {
    fill: rect.getAttribute("fill"),
    stroke: rect.getAttribute("stroke"),
    opacity: rect === marioRect ? "1" : rect.getAttribute("opacity")
  };
});

function toggleMario() {
  if (marioRect.getAttribute("opacity") === "0.5") {
    marioRect.setAttribute("opacity", "1");
    rects.forEach(function(rect) {
      rect.setAttribute("stroke", originalAttributes[rect.id].stroke);
      rect.setAttribute("fill", originalAttributes[rect.id].fill);
      rect.setAttribute("opacity", originalAttributes[rect.id].opacity);
    });
  } else {
    marioRect.setAttribute("opacity", "0.5");
    rects.forEach(function(rect) {
      if (rect !== marioRect) {
        rect.setAttribute("stroke", "none");
        if (rect === lucinaRect ||
            rect === marthRect ||
            rect === shulkRect ||
            rect === cloudRect ||
            rect === palutenaRect) {
          rect.setAttribute("fill", "#FF0000");
        } else {
          rect.setAttribute("fill", "#00FF00");
        }
        rect.setAttribute("opacity", "0.5");
      }
    });
  }
}

marioRect.addEventListener("click", toggleMario);


var originalAttributes = {};
rects.forEach(function(rect) {
  originalAttributes[rect.id] = {
    fill: rect.getAttribute("fill"),
    stroke: rect.getAttribute("stroke"),
    opacity: rect.getAttribute("opacity")
  };
});

function toggleBowser() {
  if (bowserRect.getAttribute("opacity") === "0.5") {
    bowserRect.setAttribute("opacity", "1");
    rects.forEach(function(rect) {
      rect.setAttribute("stroke", originalAttributes[rect.id].stroke);
      rect.setAttribute("fill", originalAttributes[rect.id].fill);
      rect.setAttribute("opacity", originalAttributes[rect.id].opacity);
    });
  } else {
    bowserRect.setAttribute("opacity", "0.5");
    rects.forEach(function(rect) {
      if (rect !== bowserRect) {
        rect.setAttribute("stroke", "none");
        if (rect === lucinaRect ||
            rect === marthRect ||
            rect === shulkRect ||
            rect === cloudRect ||
            rect === palutenaRect) {
          rect.setAttribute("fill", "#FF0000");
        } else {
          rect.setAttribute("fill", "#00FF00");
        }
        rect.setAttribute("opacity", "0.5");
      }
    });
  }
}

bowserRect.addEventListener("click", toggleBowser);

var rects = [
  kingKRoolRect,
  ridleyRect,
  pokemonTrainerRect,
  bowserRect,
  kingDededeRect,
  lucinaRect,
  marthRect,
  shulkRect,
  cloudRect,
  palutenaRect,
  marioRect
];

var originalAttributes = {};
rects.forEach(function(rect) {
  originalAttributes[rect.id] = {
    fill: rect.getAttribute("fill"),
    stroke: rect.getAttribute("stroke"),
    opacity: rect.getAttribute("opacity")
  };
});

function toggleKingKrool() {
  if (kingKRoolRect.getAttribute("opacity") === "0.5") {
    kingKRoolRect.setAttribute("opacity", "1");
    rects.forEach(function(rect) {
      rect.setAttribute("stroke", originalAttributes[rect.id].stroke);
      rect.setAttribute("fill", originalAttributes[rect.id].fill);
      rect.setAttribute("opacity", originalAttributes[rect.id].opacity);
    });
  } else {
    kingKRoolRect.setAttribute("opacity", "0.5");
    rects.forEach(function(rect) {
      if (rect !== kingKRoolRect) {
        rect.setAttribute("stroke", "none");
        if (rect === lucinaRect ||
            rect === marthRect ||
            rect === shulkRect ||
            rect === cloudRect ||
            rect === palutenaRect) {
          rect.setAttribute("fill", "#FF0000");
        } else {
          rect.setAttribute("fill", "#00FF00");
        }
        rect.setAttribute("opacity", "0.5");
      }
    });
  }
}

kingKRoolRect.addEventListener("click", toggleKingKrool);


function toggleRidley() {
  if (ridleyRect.getAttribute("opacity") === "0.5") {
    ridleyRect.setAttribute("opacity", "1");
    rects.forEach(function(rect) {
      rect.setAttribute("stroke", originalAttributes[rect.id].stroke);
      rect.setAttribute("fill", originalAttributes[rect.id].fill);
      rect.setAttribute("opacity", originalAttributes[rect.id].opacity);
    });
  } else {
    ridleyRect.setAttribute("opacity", "0.5");
    rects.forEach(function(rect) {
      if (rect !== ridleyRect) {
        rect.setAttribute("stroke", "none");
        if (rect === lucinaRect ||
            rect === marthRect ||
            rect === shulkRect ||
            rect === cloudRect ||
            rect === palutenaRect) {
          rect.setAttribute("fill", "#FF0000");
        } else {
          rect.setAttribute("fill", "#00FF00");
        }
        rect.setAttribute("opacity", "0.5");
      }
    });
  }
}

ridleyRect.addEventListener("click", toggleRidley);
