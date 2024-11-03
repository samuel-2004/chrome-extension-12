// load
function loadFontName() {
    const displayName = document.getElementById("fontName");
    if (displayName) {
        chrome.storage.sync.get(["fontname"], function(result) {
            const font = result["fontname"] || "handwriting-sams"
            displayName.textContent = font;
            displayName.style.fontFamily = font;
        });
    }
}
loadFontName();

function isValidFontName(font) {
    if (font.length <= 0) {
        return false;
    }
    return true;
}

//save
document.getElementById("saveButton").addEventListener("click", function() {
    const inputData = document.getElementById("inputData").value;
    console.log(inputData);
    if (isValidFontName(inputData)) {
        chrome.storage.sync.set({ "fontname": inputData });
        loadFontName();
        document.getElementById("reloadWarning").style.display = "block";
        document.getElementById("invalidFontWarning").style.display = "none";
        
    } else {
        document.getElementById("invalidFontWarning").style.display = "block";
    }
});
