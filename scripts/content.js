var font = null;
chrome.storage.sync.get(["fontname"], function(result) {
    font = result["fontname"];
    console.log(font);


const font_feature_settings = `
font-feature-settings: 
      "liga" 1,    /* Standard ligatures */
      "clig" 1,    /* Contextual ligatures */
      "dlig" 1,    /* Discretionary ligatures */
      "hlig" 1,    /* Historical ligatures */
      "calt" 1,    /* Contextual alternates */
      "swsh" 1,    /* Swash alternates */
      "ss01" 1,    /* Stylistic set 1 */
      "ss02" 1,    /* Stylistic set 2 */
      "ss03" 1,    /* Stylistic set 3 */
      "ss04" 1,    /* Stylistic set 4 */
      "ss05" 1,    /* Stylistic set 5 */
      "ss06" 1,    /* Stylistic set 6 */
      "ss07" 1,    /* Stylistic set 7 */
      "ss08" 1,    /* Stylistic set 8 */
      "ss09" 1,    /* Stylistic set 9 */
      "ss10" 1,    /* Stylistic set 10 */
      "ss11" 1,    /* Stylistic set 11 */
      "ss12" 1,    /* Stylistic set 12 */
      "ss13" 1,    /* Stylistic set 13 */
      "ss14" 1,    /* Stylistic set 14 */
      "ss15" 1,    /* Stylistic set 15 */
      "ss16" 1,    /* Stylistic set 16 */
      "ss17" 1,    /* Stylistic set 17 */
      "ss18" 1,    /* Stylistic set 18 */
      "ss19" 1,    /* Stylistic set 19 */
      "ss20" 1;    /* Stylistic set 20 */
`;


// Messenger [Message - Typing]
const messenger_styles = `
  .xyk4ms5 {
    font-family: ${font} !important;
    word-spacing: 0.4rem;
    ${font_feature_settings}
  }
  .x3jgonx {
    font-family: ${font} !important;
    word-spacing: 0.4rem;
    ${font_feature_settings}
  }
`
// Instagram [Message - Typing]
const instagram_styles = `
  .xyk4ms5 {
    font-family: ${font} !important;
    word-spacing: 0.15rem;
    ${font_feature_settings}
  }
  .x3jgonx {
    font-family: ${font} !important;
    word-spacing: 0.15rem;
    ${font_feature_settings}
  }
`

var meta_com_styles = null;
if (window.location.href.includes("messenger.com")) {
  meta_com_styles = messenger_styles;
}  else { 
  meta_com_styles = instagram_styles;
}



// Whatsapp [Message - Typing]
const whatsapp_styles = `
  .message-out * {
    font-family: ${font} !important;
    word-spacing: 0.15rem;
    ${font_feature_settings}
  }
  .lexical-rich-text-input * {
    font-family: ${font} !important;
    word-spacing: 0.15rem;
    ${font_feature_settings}
  }
`


// Messages [Message - Typing]
const messages_google_styles = `
  .outgoing * {
    font-family: ${font} !important;
    word-spacing: 0.15rem;
    ${font_feature_settings}
  }
  .input-row * {
    font-family: ${font} !important;
    word-spacing: 0.15rem;
    ${font_feature_settings}
  }
`

    
// Beeper
const beeper_styles = `
  ._2ey7aoQpE0hgvTfUhLOcQq span {
    font-family: ${font} !important;
    word-spacing: 0.15rem;
    ${font_feature_settings}
  }
`


// Generic text input boxes [When typing - Default on generic placeholder]
const text_input_styles = `
  input[type=text],
  input[type=email],
  input[type=number],
  input[type=search],
  [contenteditable="true"],
  textarea {
    font-family: ${font} !important;
    word-spacing: 0.15rem;
    ${font_feature_settings}
  }


  input[type=text]::placeholder,
  input[type=email]::placeholder,
  input[type=number]::placeholder,
  input[type=search]::placeholder,
  textarea::placeholder {
    font-family: inherit;
    word-spacing: inherit;
    font-feature-settings: inherit;
  }
`
const keep_styles = `
  .notranslate.IZ65Hb-YPqjbf.fmcmS-x3Eknd.h1U9Be-YPqjbf {
    font-family: ${font} !important;
    word-spacing: 0.15rem;
    ${font_feature_settings}
  }
`


// Collate Styles
const new_styles = [
    meta_com_styles,
    whatsapp_styles,
    messages_google_styles,
    text_input_styles,
    keep_styles,
    beeper_styles
].join('\n');

const styleSheet = document.createElement("style");
styleSheet.textContent = new_styles;
document.head.appendChild(styleSheet);


});
