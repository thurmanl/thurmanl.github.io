
const url = "https://script.google.com/macros/s/AKfycbyccIonUImrwCyzAhI89Og8_2cHEyflA3QPnjG2DswVoBudm3IdK6Fz56KeoJIVX2cv/exec"

$(document).ready(function () {
  getPlayTimes();
});

function hover(element, gameName) {
  console.log("hovered")
  element.setAttribute('src', "../images/" + gameName + "_gameplay.gif");
}

function unHover(element, gameName) {
  console.log("unhovered")
  element.setAttribute('src', "../images/" + gameName + "_menu.png");
}

function createDisplay(playTimes){
  playTimes.forEach(element => {
    console.log(element[0] + " has been played for " + element[1] + " minutes")
  })

  var pDiv = document.getElementById("games-display");

  var odd = false;
  playTimes.forEach(element => {
    // var imageChangeCommand = `this.setAttribute('src', '../images/` + element[0] + `_gameplay.gif')`
    // var string = `
    //   <div class="game">
    //       <a href="` + element[0] + `_Web/` + element[0] + `.html">
    //         <img src="../images/` + element[0] + `_menu.png" width="400px" 
    //           onmouseover="` + imageChangeCommand + `"
    //           >
    //         </img>
    //       </a>
    //       <div class = "game-description">
    //         <h4> ` + gameDescriptions[element[0]] + `</h4>
    //         <div class="short-strip"></div>
    //         <h4> Total Play Time: ` + element[1] + ` minutes</h4>
    //       </div>
    //     </div>
    //   <div class="long-strip"></div>
    // `;
    // console.log(string)
    // pDiv.innerHTML += string;
    var hoverCommand = `onmouseover = "this.setAttribute('src', '../images/` + element[0] + `_gameplay.gif')"`
    var unhoverCommand = `onmouseleave = "this.setAttribute('src', '../images/` + element[0] + `_menu.png')"`
    var image = `
    <a href="` + element[0] + `_Web/` + element[0] + `.html"><img src="../images/` + element[0] + `_menu.png" width="400px"
    ` + hoverCommand + ` 
    ` + unhoverCommand + `
    ></img></a>`
    var text = `
    <div class = "game-description">
      <h4> ` + gameDescriptions[element[0]] + `</h4>
      <div class="short-strip"></div>
      <h4> Total Play Time: ` + element[1] + ` minutes</h4>
    </div>`
    var addedHtml = ""
    if(odd){
      addedHtml = `
      <div class="game">
          ` + image + `
          ` + text + `
        </div>
      <div class="long-strip"></div>`;
    }
    else {
      addedHtml = `
      <div class="game">
          ` + text + `
          ` + image + `
        </div>
      <div class="long-strip"></div>`;
    }
    odd = !odd;
    pDiv.innerHTML += addedHtml;
  })
  document.getElementById("loading-element").style.display = "none";
}

function getPlayTimes() {
  let uri = url + "\?" + new URLSearchParams({
    page: "None",
    isNew: false
  });

  fetch(uri, {
    method: 'POST',
    mode: 'cors',
    redirect: "follow",
    body: JSON.stringify({ "page": "None" })
  })
    .then(response => response.text())
    .then(text => {
      json = JSON.parse(text)
      const playTimes = []
      json.forEach(element => {
        if(isGameName(element[0])){
          playTimes.push([element[0], element[2]])
        }
      });
      createDisplay(playTimes.sort((a, b) => b[1] - a[1]));
    }
  )
}

function isGameName(name){
  return name == "cosmo" ||
    name == "boats" ||
    name == "dave" ||
    name == "gifted" ||
    name == "waves" ||
    name == "meta";
}

var gameDescriptions = {
  "cosmo": `Play as BYU's mascot, Cosmo the Cougar, as you sweep the buildings of campus. Armed with a rifle
            that shoots globs of hand-sanitizer and your trusty calc textbook, can you completely sanitize every level??
            Challenge not enough for you? Try to climb your way up the high score chart!`,
  "waves": `Build a sandcastle to defend against the growing waves! Make sure to watch out for the crabs!
            You can build turrets out of items you find on the beach!`,
  "dave": `A 24-hour game jam game. Help Dave create an awesome rave in his cave by collecting gems!`,
  "gifted": `Text-based choose your own adventure game! Craft your own story as you fight monsters, gain magic
            abilities,
            acquire new weapons, and lead armies! Note: F: Change font ; M: Change music`,
  "meta": `A funny little game me and two friends made in 24 hours for a game jam.`,
  "boats": `Intense 2-player boat battle! Play best 3 out of 5 rounds! With upgrades between each round,
            anything can happen!`,
}