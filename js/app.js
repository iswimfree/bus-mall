'use strict';

var allImages = [];
var myContainer = document.getElementById('imgBox');
var imageOneElement = document.getElementById('imgOne');
var imageTwoElement = document.getElementById('imgTwo');
var imageThreeElement = document.getElementById('imgThree');
var maxClicks = 25;
var maxViews = 0;


function ProductImg(name, src = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${src}`;
  this.views = 0;
  this.votes = 0;
  allImages.push(this);
}
var getproducts = localStorage.getItem('products');
if (getproducts) {
  allImages = JSON.parse(getproducts);
} else {
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
}

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
  maxViews++;
  for (var i = 0; i < allImages.length; i++) {
    if (clickedImage === allImages[i].name) {
      allImages[i].votes++;
    }
  } if (maxViews === maxClicks) {
    myContainer.removeEventListener('click', handleClick);

  }
  renderImages();
}
var newVariable = document.getElementById('results');
newVariable.addEventListener('click', newResults);

function newResults(event) {
  var clickResults = event.target.id;
  if (clickResults === 'results') {
    var stringProducts = JSON.stringify(allImages);
    localStorage.setItem('products', stringProducts);
    renderChart();
  }
}


function renderChart() {
  var namesArray = [];
  var votesArray = [];
  var viewsArray = [];

  for (var i = 0; i < allImages.length; i++) {
    namesArray.push(allImages[i].name);
    votesArray.push(allImages[i].votes);
    viewsArray.push(allImages[i].views);
  }

  var ctx = document.getElementById('myChart').getContext('2d');

  var dataObject = {
    type: 'bar',
    data: {
      labels: namesArray,
      datasets: [{
        label: 'Number of Votes',
        data: votesArray,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2
      },
      {
        label: 'Number of Views',
        data: viewsArray,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 2
      }]
    },
    options: {
      responsive: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  };
  var myChart = new Chart(ctx, dataObject);
}

