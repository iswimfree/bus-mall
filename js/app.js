'use strict';

var allImages = [];
var maxRounds = 25;
var actualRounds = 0;
var imgOneElement = document.getElementById('imgOne');
var imgTwoElement = document.getElementById('imgTwo');
var imgThreeElement = document.getElementById('imgThree');
var myimgBox = document.getElementById('imgBox');
// console.log(imgOneElement);


function CataLog () {
  constructor(name, src = 'jpg'); {
    this.name = name;
    this.src = `img/${name}.${src}`;
    this.views = 0;
    this.votes = 0;
    allImages.push(this);

  }
}

new CataLog('wine-glass');
new CataLog('bag');
new CataLog('tauntaun');
console.log(cataLog);

function getRandomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function showImages() {
  var displayImage = [];
}










// while (this.displayImage.length > 4) {
//   var newImg = getRandomIndex(allImages.length);
//   while (this.displayImage.includes(newImg)) {
//     newImg = getRandomIndex(allImages.length);
//   }
//   this.displayImage.push(newImg);
// }

// var oneIMG = allImages.shift();
// var twoImg = allImages.shift();


// imgOneElement.src = allImages[oneIMG].src;
// imgOneElement.alt = allImages[oneIMG].name;
// imgOneElement.title = allImages[oneIMG].name;
// allImages[oneIMG].views++;

// imgTwoElement.src = allImages[twoImg].src;
// imgTwoElement.alt = allImages[twoImg].name;
// imgTwoElement.title = allImages[twoImg].name;
// allImages[twoImg].views++;

// showImages();
