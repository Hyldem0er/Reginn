regexPhone = /(?<!viewbox=|viewBox=|values=|\d|index:|value"|SIREN|SIREN:|SIREN :|SIREN |rgb\()(?!(?:(?:\s)(?:(?:[0-9](?:\s|\-)){3,})(?:\s|)))(((\'|\"|\(|\>|tel:|tell:|phone:|telephone:|telefon:|tel": "|tell": "|phone": "|telephone": "|telefon": "|tel":"|tell":"|phone":"|telephone":"|telefon":"|Tel:|Tell:|Phone:|Telephone:|Telefon:|Tel": "|Tell": "|Phone": "|Telephone": "|Telefon": "|Tel":"|Tell":"|Phone":"|Telephone":"|Telefon":"| TEL:|TELL:|PHONE:|TELEPHONE:|TELEFON:|TEL": "|TELL": "|PHONE": "|TELEPHONE": "|TELEFON": "|TEL":"|TELL":"|PHONE":"|TELEPHONE":"|TELEFON":"| ){1}((((0|\+)(\[|\()\d{1,3}(\]|\)))|0|(\+\s{0,1}\d{1,4}))(\s|-){0,1})(\d(\s|-){0,1}){9,10}(\'|\"|\)|\<|\s){1})|((?!((.)((\d(\s|\-)){3,})(\s|)))((\'|\"|\(|\>|\s|tel:|tell:|phone:|telephone:|telefon:|tel": "|tell": "|phone": "|telephone": "|telefon": "|tel":"|tell":"|phone":"|telephone":"|telefon":"|Tel:|Tell:|Phone:|Telephone:|Telefon:|Tel": "|Tell": "|Phone": "|Telephone": "|Telefon": "|Tel":"|Tell":"|Phone":"|Telephone":"|Telefon":"| TEL:|TELL:|PHONE:|TELEPHONE:|TELEFON:|TEL": "|TELL": "|PHONE": "|TELEPHONE": "|TELEFON": "|TEL":"|TELL":"|PHONE":"|TELEPHONE":"|TELEFON":"| ){1}((((((\+)(\[|\(|)1(\]|\)|))|(\(|\[|)1(\)|\]|)|\+)(\s|-){0,1})(\d(\s|-){0,1}){10})|(\[|\(|)\d{3}(\]|\)|)(-|\s)\d{3}(-|\s)\d{3,4})(\'|\"|\)|\<|\s){1}))|((tel:|tell:|phone:|telephone:|telefon:|tel": "|tell": "|phone": "|telephone": "|telefon": "|tel":"|tell":"|phone":"|telephone":"|telefon":"|Tel:|Tell:|Phone:|Telephone:|Telefon:|Tel": "|Tell": "|Phone": "|Telephone": "|Telefon": "|Tel":"|Tell":"|Phone":"|Telephone":"|Telefon":"| TEL:|TELL:|PHONE:|TELEPHONE:|TELEFON:|TEL": "|TELL": "|PHONE": "|TELEPHONE": "|TELEFON": "|TEL":"|TELL":"|PHONE":"|TELEPHONE":"|TELEFON":")(\d(-|\s|)){6,12}(\'|\"|\)|\<|\s)))/g;
regexSocialMedia = /(?!(https\:\/\/((connect|support|developers|about|www\.(facebook|youtube)\.com\/(help|embed|settings))|((gits.|)github.com\/(features|enterprise|team|solutions|customer-stories|readme|topics|trending|collections|pricing|notifications|security))|ct\.pinterest.com)))(https\:\/\/[a-z,-]{1,}\.facebook\.[a-z]{1,}(\/(?!tr\?id=)[a-zA-Z0-9:%_+.,#!?@&=-]{1,}){1,}|https\:\/\/[a-z,-]{0,}\.{0,1}youtube\.[a-z]{1,}(\/[a-zA-Z0-9:%_+.,#?!@&=-]{1,}){1,}|https\:\/\/[a-z,-]{0,}\.{0,1}(instagram|pinterest|discord)\.[a-z]{1,}(\/[a-zA-Z0-9_.@-]{1,}){1,}|https\:\/\/github\.[a-z]{1,}(\/[a-zA-Z0-9_.-]{1,}){1,}|https\:\/\/([a-z]{1,}\.)*(twitter|x)\.[a-z]{1,}\/[a-zA-Z0-9:%_+.,#?!@&=-]{1,}|https\:\/\/[a-z-]{1,}\.linkedin\.[a-zA-Z0-9._-]{1,}(\/[a-zA-Z0-9-_.%áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]{1,}){1,})/g;
regexGoogleIds = /G\-[A-Z0-9]{10}|pub\-[0-9]{16}|UA\-[0-9-]{10,12}|GTM\-[0-9A-Z]{7}|AW\-[0-9A-Z]{16}/g;
regexEmail = /(?![a-zA-Z0-9._-]{1,}\@([a-zA-Z0-9_-]{1,}(\.(png|jpg|jpeg|pdf)){1,}|2x\.(webp|be)))([a-zA-Z0-9._-]{1,}(\@|(\(|\[)(at|TheSymbolWithaA)(\)|\]))[a-zA-Z0-9_-]{1,}(((\.|((\(|\[)dot(\)|\]))))([a-z]{2,})){1,})/g;
regexCDN = /([a-z]{1,}\.){0,}[a-z]{0,}cdn\.[a-z]{1,}(\.[a-z]{1,}){0,}/g;
regexAPI = /(?![a-z]{1,}\.png)(api\.[a-z]{1,}\.[a-z]{1,}|([a-z]{1,}\.){0,}[a-z]{1,}api(s|)\.[a-z]{1,}|https:\/\/([a-z]{1,}\.){1,}[a-z]{1,}(\/[a-z]{1,}){1,}\/api\/)/g;

function findMatches(content, regex) {
    if (!content) {
      return []; // Retourne un tableau vide si le contenu est undefined ou null
    }
    return Array.from(content.matchAll(regex)).map(match => match[0].replace(/[<>"'()]/g, ''));
}

function analyzeHtml(htmlContent) {
    phoneMatches = findMatches(htmlContent, regexPhone)
    socialMediaMatches = findMatches(htmlContent, regexSocialMedia)
    googleIdsMatches = findMatches(htmlContent, regexGoogleIds)
    emailMatches = findMatches(htmlContent, regexEmail)
    cdnMatches = findMatches(htmlContent, regexCDN)
    apiMatches = findMatches(htmlContent, regexAPI)

    displayMatches('Phone Matches:', phoneMatches);
    displayMatches('Social Media Matches:', socialMediaMatches);
    displayMatches('Google IDs Matches:', googleIdsMatches);
    displayMatches('Email Matches:', emailMatches);
    displayMatches('CDN Matches:', cdnMatches);
    displayMatches('API Matches:', apiMatches);
}

function displayMatches(title, matches) {
    const popupContent = document.getElementById('popup-content');
    const titleElement = document.createElement('h2');
    titleElement.textContent = title;
    popupContent.appendChild(titleElement);

    if (matches.length === 0) {
        const noMatchesElement = document.createElement('p');
        noMatchesElement.textContent = 'No matches found.';
        popupContent.appendChild(noMatchesElement);
    } else {
        const listElement = document.createElement('ul');
        matches.forEach(match => {
            const listItem = document.createElement('li');
            listItem.textContent = match;
            listElement.appendChild(listItem);
        });
        popupContent.appendChild(listElement);
    }
}


document.querySelector('button').addEventListener('click', () => {
    console.log("pipi")

    chrome.tabs.executeScript({
        code: 'document.documentElement.outerHTML'
    }, (results) => {
        if (chrome.runtime.lastError) {
            document.getElementById('error-content').classList.remove('hidden');
            document.getElementById('popup-content').classList.add('hidden');
        } else {
            var html = results[0];
            analyzeHtml(html)
            // Create and display a list TODO
            console.log("caca")
            //document.getElementById('popup-content').innerHTML = '<p>Current HTML: ' + html + '</p>';
        }
    });
});
