function speedup() {
  browser.tabs.executeScript({
    code: 'var videos = document.getElementsByTagName("video"); videos.forEach = Array.prototype.forEach;videos.forEach(function(v){v.playbackRate = 1.4;})'
  });
}

browser.browserAction.onClicked.addListener(speedup);
