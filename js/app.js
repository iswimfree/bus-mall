'use strict';

var allImages = [];
var myContainer = document.getElementById('imgBox');
var imageOneElement = document.getElementById('imgOne');
var imageTwoElement = document.getElementById('imgTwo');
var imageThreeElement = document.getElementById('imgThree');
var maxClicks = 5;
var maxViews = 0;


function ProductImg(name, src = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${src}`;
  this.views = 0;
  this.votes = 0;
  allImages.push(this);
}


new ProductImg('bag');
new ProductImg('banana');
new ProductImg('bathroom');
new ProductImg('boots');
new ProductImg('breakfast');
new ProductImg('bubblegum');
new ProductImg('chair');
new ProductImg('cthulhu');
new ProductImg('dog-duck');
new ProductImg('dragon');
new ProductImg('pen');
new ProductImg('pet-sweep');
new ProductImg('scissors');
new ProductImg('shark');
new ProductImg('sweep', 'png');
new ProductImg('tauntaun');
new ProductImg('unicorn');
new ProductImg('usb', 'gif');
new ProductImg('water-can');
new ProductImg('wine-glass');

function getRandomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function renderImages() {
  var imageOneIndex = getRandomIndex(allImages.length);
  var imageTwoIndex = getRandomIndex(allImages.length);


  while (imageOneIndex === imageTwoIndex) {
    imageTwoIndex = getRandomIndex(allImages.length);
  }
  var imageThreeIndex = getRandomIndex(allImages.length);
  while (imageThreeIndex === imageTwoIndex || imageThreeIndex === imageOneIndex) {
    imageThreeIndex = getRandomIndex(allImages.length);
  }




  imageOneElement.src = allImages[imageOneIndex].src;
  imageOneElement.alt = allImages[imageOneIndex].name;
  imageOneElement.title = allImages[imageOneIndex].name;
  allImages[imageOneIndex].views++;

  imageTwoElement.src = allImages[imageTwoIndex].src;
  imageTwoElement.alt = allImages[imageTwoIndex].name;
  imageTwoElement.title = allImages[imageTwoIndex].name;
  allImages[imageTwoIndex].views++;

  imageThreeElement.src = allImages[imageThreeIndex].src;
  imageThreeElement.alt = allImages[imageThreeIndex].name;
  imageThreeElement.title = allImages[imageThreeIndex].name;
  allImages[imageTwoIndex].views++;


}
renderImages();

myContainer.addEventListener('click', handleClick);

function handleClick(event) {
  var clickedImage = event.target.title;
  console.log(clickedImage);

  for (var i = 0; i < allImages.length; i++) {
    if (clickedImage === allImages[i].name) {
      allImages[i].votes++;
    }
  } renderImages();
}
