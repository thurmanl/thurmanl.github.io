window.onload = function () {
  var testing = false;

  var bod = document.body;
  var hrs = document.querySelectorAll('hr')
  var buttons = document.querySelectorAll('button')
  bod.style.transition = testing ? "all 1s" : "all 4s";
  bod.style.backgroundPosition = "50% 0%";
  hrs.forEach((h) => {
    h.style.opacity = "0%";
  });
  buttons.forEach(b => {
    b.style.opacity = "0%";
  });

  var text = 'Logan Thurman';

  var textElements = text.split("").map(function (c) {
    return $('<span id="' + c + '">' + c + '</span>');
  });

  var el = $('#name-text');
  var delay = testing ? 10 : 200;
  textElements.forEach(function (e, i) {
    el.append(e);
    e.hide();
    setTimeout(function () {
      e.fadeIn(300)
    }, 100 + i * delay)
  })

  setTimeout(function () {
    hrs.forEach((h) => {
      h.style.opacity = "100%";
      h.style.transition = testing ? "opacity 1s" : "opacity 4s";
    });
    buttons.forEach((b) => {
      b.style.opacity = "100%";
      b.style.transition = testing ? "opacity 1s" : "opacity 4s";
    });

    setTimeout(function() {
      buttons.forEach((b) => {
        b.style.transition =  "all 0.5s ease-in-out";
      });
    }, 100);
  },
    100 + textElements.length * delay)
}