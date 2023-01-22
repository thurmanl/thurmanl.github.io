// //works on first load, but not after
// window.addEventListener('load', (event) => {
//   alert('page fully loaded and parsed');
// });

//same here
window.addEventListener('pageshow', (event) => {
  var path = window.location.pathname;
  var page = path.split("/").pop();
  alert("on page " + page);
  setInterval(1, reportPage);
});

// window.onunload = function() {
//     //myfun();
//     var path = window.location.pathname;
//     var page = path.split("/").pop();
//     alert("Left page " + page);
// }

// window.navigator.addEventListener('navigate', (event) => {
//   var path = window.location.pathname;
//   var page = path.split("/").pop();
//   alert("page navigation on" + page);
// });

function reportPage(){
  var path = window.location.pathname;
  var page = path.split("/").pop();
  console.log("on page:" + page);
}