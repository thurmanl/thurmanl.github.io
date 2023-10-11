photos = [
  {
    "image": 'images/me_surf.JPG',
    "x": "50",
    "y": "50",
  },
  {
    "image": 'images/me_professional.PNG',
    "x": "50",
    "y": "50",
  },
  {
    "image": 'images/BYU_stadium.png',
    "x": "50",
    "y": "50",
  },
  {
    "image": 'images/lucid.jpg',
    "x": "48",
    "y": "50",
  },
  {
    "image": 'images/me_mist.jpg',
    "x": "50",
    "y": "50",
  },
  {
    "image": 'images/me_quijote.jpg',
    "x": "70",
    "y": "50",
  },
  {
    "image": 'images/me_capibara.jpg',
    "x": "45",
    "y": "50",
  },
  {
    "image": 'images/me_soccer.jpg',
    "x": "50",
    "y": "50",
  },
  {
    "image": 'images/me_door.jpg',
    "x": "50",
    "y": "50",
  }
]

function randomize(id){
  let oldFoto = document.getElementById(id).src
  let foto = getRandomPhoto()
  while(foto.image === oldFoto){foto = getRandomPhoto()}
  document.getElementById(id).src = foto.image
  document.getElementById(id).style.objectPosition = foto.x + "%" + foto.y + "0%"
}

function getRandomPhoto(){
  return photos[Math.floor(Math.random() * photos.length)];
}

function getPhoto(index){
  return photos[index]
}

function randomizePano(){
  var url = "";
  switch (Math.floor(Math.random() * 3)){
    case 0:
      url = "images/pan_bull.jpg"
      break
    case 1:
      url = "images/pan_granada.jpg"
      break
    case 2:
      url = "images/pan_peru.jpg"
      break
    default: 
      url = "images/pan_bull.jpg"
  }
  document.getElementById("pano").src = url;
  console.log("put pano: " + url);
}

travelPhotos = [
  "Guatemala ->",
  "images/Guatemala/IMG_0003.JPG",
  "images/Guatemala/IMG_0005.JPG",
  "images/Guatemala/IMG_0799.JPG",
  "images/Guatemala/IMG_5311.jpg",
  "images/Guatemala/IMG_5340.jpg",
  "images/Guatemala/road.mp4",
  "Peru ->",
  "images/Peru/path.mp4",
  "images/Peru/IMG_1054.jpg",
  "images/Peru/IMG_1070.jpg",
  "images/Peru/IMG_1111.jpg",
  "images/Peru/IMG_2478.jpg",
  "images/Peru/IMG_2713.jpg",
  "images/Peru/IMG_2739.jpg",
  "Spain ->",
  "images/Spain/IMG_1001.jpg",
  "images/Spain/IMG_1284.jpg",
  "images/Spain/IMG_1424.jpg",
  "images/Spain/IMG_1575.jpg",
  "images/Spain/bull_fight.mp4",
  "images/Spain/IMG_1871.jpg",
  "images/Spain/IMG_1874.jpg",
  "images/Spain/IMG_1902.jpg",
  "images/Spain/IMG_2394.jpg",
  "images/Spain/IMG_2605.jpg",
  "images/Spain/IMG_2711.jpg",
  "images/Spain/IMG_3171.jpg",
  "images/Spain/mosque.mp4",
  "Utah ->",
  "images/Utah/IMG_5563.jpg",
  "images/Utah/IMG_5830.jpg",
  "images/Utah/IMG_6326.jpg",
  "images/Utah/IMG_6487.jpg",
  "images/Utah/IMG_6565.jpg",
  "images/Utah/IMG_6936.jpg",
  "images/Utah/IMG_6977.jpg",
  "images/Utah/IMG_7047.jpg",
  "images/Utah/IMG_7480.jpg",
  "Brazil ->",
  "images/Brazil/b1.jpg",
  "images/Brazil/b2.jpg",
  "images/Brazil/b3.jpg",
  "images/Brazil/b4.jpg",
  "images/Brazil/b5.jpg",
  "images/Brazil/b6.jpg",
  "images/Brazil/b7.jpg",
  "images/Brazil/falls.mp4",
  "images/Brazil/b8.jpg",
  "images/Brazil/b9.jpg",
  "images/Brazil/b10.JPG",
  "images/Brazil/b11.PNG",
]

$(document).ready(function () {
  $('#slick').slick({
      lazyLoad: 'ondemand',
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnFocus: false,
      draggable: true,
      infinite: true,
      dots: false,
      arrows: true,
      speed: 1000,
      mobileFirst: false,
      slidesToShow: 3,
      slidesToScroll: 1,
  });

  travelPhotos.forEach(element => {
    if(element.includes("mp4")){
      $('#slick').slick('slickAdd', `
        <div class="slide">
          <video class="slide-media " autoplay="autoplay">
            <source src=` + element + ` type="video/mp4">
          </video>
        </div>`
      );
    }
    else if (element.includes("jpg") || element.includes("JPG")) {
      $('#slick').slick('slickAdd', `
        <div class="slide">
          <img data-lazy=` + element + ` class="slide-media" />
        </div>`
      );
    }
    else{
      $('#slick').slick('slickAdd', `
        <div class="slide">
          <h3 class="slide-title">` + element + `</h3>
        </div>`
      );
    }
  });
});



