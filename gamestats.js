// testJson();

const url = "https://script.google.com/macros/s/AKfycbxM63BRpVV9xwowc7yBJrY_yfAJ9CiiCMep4x4agUOOUXU9yZf-zBG017WF3VKLbCw/exec";

setInterval(function(){ reportPage();}, 1000);

var lastPage;

function reportPage() {
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
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    redirect: "follow",
    // headers: {
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/json'
    // },
    body: JSON.stringify({ "page": page })
    // headers: {
    //   'Accept': 'application/json'
    // }
  })
    .then(response => response.text())
    .then(text => console.log(text))
}

// function testJson(){
//   // const fs = require('fs');
//   // const path = require('path');

//   const testObject = {
//     hello: 'world',
//     myArray: [
//       'entry1',
//       'entry2',
//       'entry3',
//     ],
//     myNestedObject: {
//       nestedHello: 'nestedWorld',
//     },
//   };

//   const testJsonString = JSON.stringify(testObject, null, 2);
//   console.log(testJsonString);

//   fetch("theFile.json") 
//   .then( function(data){return data.json() })
//   .then(function(response){console.log(response)});
//   // const filePath = path.join(process.cwd(), 'test.json');

//   // fs.writeFile(filePath, testJsonString, (err) => {
//   //   if (err) {
//   //     console.error(err);
//   //   } else {
//   //     console.log('File written successfully');
//   //   }
//   // });
// }

// document.addEventListener('visibilitychange', function (event) {
//   if (document.hidden) {
//     interacted = false;
//   } else {
//     interacted = true;
//   }
// });

// var interacted;
// onmousemove = (event) => {interacted = true; };