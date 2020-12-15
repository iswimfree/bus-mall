'use strict';

var allImages = [];
var myContainer = document.getElementById('imgBox');
var imageOneElement = document.getElementById('imgOne');
var imageTwoElement = document.getElementById('imgTwo');
var imageThreeElement = document.getElementById('imgThree');

class ProductImg {
  constructor(name, src = 'src') {
    this.name = name;
    this.src = `img/${name}.${'jpg'}`;
    allImages.push(this);
    //what do i do with this src ?????????
  }
}

new ProductImg('bag');
new ProductImg('tauntaun');
new ProductImg('wine-glass');

function getRandomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function renderImages() {
  var imageOneIndex = getRandomIndex(allImages.length);
  var imageTwoIndex = getRandomIndex(allImages.length);
  var imageThreeIndex = getRandomIndex(allImages.length);
  while (imageOneIndex < imageTwoIndex) {
    imageTwoIndex = getRandomIndex(allImages.length);
  }
  imageOneElement.src = allImages[imageOneIndex].src;
  imageOneElement.alt = allImages[imageOneIndex].name;
  imageOneElement.title = allImages[imageOneIndex].name;
  allImages[imageOneIndex].view++;

  imageTwoElement.src = allImages[imageTwoIndex].src;
  imageTwoElement.alt = allImages[imageTwoIndex].name;
  imageTwoElement.title = allImages[imageTwoIndex].name;
  allImages[imageTwoIndex].views++;

  imageThreeElement.src = allImages[imageThreeIndex].src;
  imageThreeElement.alt = allImages[imageThreeIndex].name;
  imageThreeElement.title = allImages[imageThreeIndex].name;
  allImages[imageTwoIndex].views++;

  function handleClick(event) {
    var clickedImage = event.target.title;
    console.log(clickedImage);

    for (var i = 0; i < allImages.length; i++)
      if (clickedImages === allImages[i].name) {
        allImages[i].votes++;
      }
  }
  renderImages();
  myContainer.addEventListener('click', handleClick);
}
renderImages();
