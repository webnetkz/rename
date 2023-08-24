chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const activeTab = tabs[0];
    if (activeTab) {
      chrome.scripting.executeScript({
        target: {tabId: activeTab.id},
        files: ["content.js"]
      });
    }
});
