const body = document.getElementsByTagName('body')[0];
const numOfImages = [...document.getElementsByTagName('img')].length;
let _numImagesLoaded = 0;

function showContent() {
  _numImagesLoaded++;

  // if all images loaded, fade content in
  if (_numImagesLoaded == numOfImages) {
    body.classList.remove('loading');
  }
}
