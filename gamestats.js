// testJson();

const url = "https://script.google.com/macros/s/AKfycbyZ7Okrw6JYVjxVOrosQPfgfop5tKxHprqomYBAUIZwAirO-hkY9xxEVog9FWifIgre/exec"
setInterval(function(){ reportPage();}, 3000);

var lastPage;

function reportPage() {
  if(!interacted){
    return;
  }
  var path = window.location.pathname;
  var page = path.split("/").pop().split(".")[0];
  if(page == "" || page == null){
    page = "home";
  }
  let isNew = (page == lastPage) ? "n" : "y";

  postPage(page, isNew);
  lastPage = page;
}

function postPage(page, isNew){
  let uri = url + "\?" + new URLSearchParams({
    page: page,
    isNew: isNew
  });

  fetch(uri, {
    method: 'POST',
    mode: 'cors',
    redirect: "follow",
    body: JSON.stringify({ "page": page })
  })
    .then(response => response.text())
    //.then(text => console.log(text))
}

var interacted;
document.addEventListener('visibilitychange', function (event) {
  if (document.hidden) {
    interacted = false;
  } else {
    interact();
  }
});

onmousemove = (event) => {
  interact();
};

addEventListener('keydown', (event) => {
  interact();
});

var timeoutID;
function interact(){
  interacted = true;
  clearTimeout(timeoutID);
  timeoutID = setTimeout(resetInteracted, 30000);
}

function resetInteracted(){
  interacted = false;
}