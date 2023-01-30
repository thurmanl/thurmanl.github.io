// testJson();
// setInterval(function(){ reportPage();}, 1000);

// function reportPage() {
//   var path = window.location.pathname;
//   var page = path.split("/").pop();
//   console.log("on page " + page);
// }

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