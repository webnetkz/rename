chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.color) {
    var colorDisplay = document.getElementById('colorDisplay');
    colorDisplay.textContent = 'Цвет под курсором: #' + message.color;
  }
});
