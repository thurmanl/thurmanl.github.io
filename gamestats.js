//works on first load, but not after
window.addEventListener('load', (event) => {
  alert('page fully loaded and parsed');
});

window.addEventListener('pageshow', (event) => {
  var path = window.location.pathname;
  var page = path.split("/").pop();
  alert("on page " + page);
});

window.onunload = function() {
    //myfun();
    var path = window.location.pathname;
    var page = path.split("/").pop();
    alert("Left page " + page);
}

navigation.addEventListener('navigate', (event) => {
  var path = window.location.pathname;
  var page = path.split("/").pop();
  alert("page navigation on" + page);
});