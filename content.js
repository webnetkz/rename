document.addEventListener('mousemove', function(event) {
  var x = event.clientX;
  var y = event.clientY;

  var pixel = getPixelColor(x, y);

  chrome.runtime.sendMessage({ color: pixel });
});

function getPixelColor(x, y) {
  var canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  var context = canvas.getContext('2d');
  context.drawImage(document.body, -x, -y);
  var pixelData = context.getImageData(0, 0, 1, 1).data;

  return rgbToHex(pixelData[0], pixelData[1], pixelData[2]);
}

function rgbToHex(r, g, b) {
  return ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
}
