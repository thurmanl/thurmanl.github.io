//works on first load, but not after
window.addEventListener('load', (event) => {
  alert('page fully loaded and parsed');
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
  alert("Left page " + page);
});