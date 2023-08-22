document.addEventListener("DOMContentLoaded", () => {
    // Ожидаем 4 секунды (4000 миллисекунд) и затем закрываем всплывающее окно
    setTimeout(() => {
      window.close();
    }, 10);

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