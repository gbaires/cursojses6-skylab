"use strict";

function teste(x) {
  var y = 2; // Scope variable

  if (x > 5) {
    var _y = 4;
    console.log(x, _y);
  }
}

teste(10);
