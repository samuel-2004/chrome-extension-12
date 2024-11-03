chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.get(["fontname"], function(result) {
        if (!result.fontname) { // Check if `fontname` is already set
            chrome.storage.sync.set({ fontname: "handwriting-sams" });
        }
    });
});