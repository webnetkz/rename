// chrome.action.onClicked.addListener((tab) => {
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: clearAndReload,
//   });
// });

// function clearAndReload() {
//   localStorage.clear();
//   sessionStorage.clear();
//   document.cookie = '';
//   location.reload();
// }
// chrome.action.onClicked.addListener((tab) => {
//   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     const activeTab = tabs[0];
//     if (activeTab) {
//       // Очистка хранилищ
//       chrome.storage.local.clear();
//       chrome.storage.session.clear();

//       // Очистка cookie
//       chrome.cookies.getAll({ url: activeTab.url }, (cookies) => {
//         for (const cookie of cookies) {
//           chrome.cookies.remove({ url: activeTab.url, name: cookie.name });
//         }

//         // Перезагрузка вкладки
//         chrome.tabs.reload(activeTab.id, { bypassCache: true });
//       });
//     }
//   });
// });

chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    if (activeTab) {
      // Очистка хранилищ
      chrome.storage.local.clear();
      chrome.storage.session.clear();

      // Очистка cookie
      chrome.cookies.getAll({ url: activeTab.url }, (cookies) => {
        for (const cookie of cookies) {
          chrome.cookies.remove({ url: activeTab.url, name: cookie.name });
        }

        // Перезагрузка вкладки
        chrome.tabs.reload(activeTab.id, { bypassCache: true });
      });
    }
  });
});

