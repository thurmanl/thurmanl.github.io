
document.addEventListener('DOMContentLoaded', (event) => {
  alert('DOM fully loaded and parsed');
});

window.addEventListener('load', (event) => {
  alert('page fully loaded and parsed');
});

window.onunload = function() {
    //myfun();
    var path = window.location.pathname;
    var page = path.split("/").pop();
    alert("Left page " + page);
}