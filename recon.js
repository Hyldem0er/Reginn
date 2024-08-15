let regexPhone = /(?<!viewbox=|viewBox=|values=|\d|index:|value"|SIREN|SIREN:|SIREN :|SIREN |rgb|bid=|background\:)(?!(?:(?:\s)(?:(?:[0-9](?:\s|\-)){3,})(?:\s|)))(((\'|\"|\(|\>|tel:|tell:|phone:|telephone:|telefon:|tel": "|tell": "|phone": "|telephone": "|telefon": "|tel":"|tell":"|phone":"|telephone":"|telefon":"|Tel:|Tell:|Phone:|Telephone:|Telefon:|Tel": "|Tell": "|Phone": "|Telephone": "|Telefon:|Tel":"|Tell":"|Phone":"|Telephone":"|Telefon":"| TEL:|TELL:|PHONE:|TELEPHONE:|TELEFON:|TEL": "|TELL": "|PHONE": "|TELEPHONE": "|TELEFON": "|TEL":"|TELL":"|PHONE":"|TELEPHONE":"|TELEFON":"| ){1}((((0|\+)(\[|\()\d{1,3}(\]|\)))|0|(\+\s{0,1}\d{1,4}))(\s|-|\(){0,1})(\d(\s|-|\)){0,1}){9,10}(\'|\"|\)|\<|\s){1})|((?!((.)((\d(\s|\-)){3,})(\s|)))((\'|\"|\(|\>|\s|tel:|tell:|phone:|telephone:|telefon:|tel": "|tell": "|phone": "|telephone": "|telefon": "|tel":"|tell":"|phone":"|telephone": "|telefon": "|Tel:|Tell:|Phone:|Telephone:|Telefon:|Tel": "|Tell": "|Phone": "|Telephone": "|Telefon:|Tel":"|Tell":"|Phone":"|Telephone":"|Telefon":"| TEL:|TELL:|PHONE:|TELEPHONE:|TELEFON:|TEL": "|TELL": "|PHONE": "|TELEPHONE": "|TELEFON": "|TEL":"|TELL":"|PHONE":"|TELEPHONE":"|TELEFON":"| ){1}((((((\+)(\[|\(|)1(\]|\)|))|(\(|\[|)1(\)|\]|)|\+)(\s|-){0,1})(\d(\s|-){0,1}){10})|(\[|\(|)\d{3}(\]|\)|)(-|\s)\d{3}(-|\s)\d{3,4})(\'|\"|\)|\<|\s){1}))|((tel:|tell:|phone:|telephone:|telefon:|tel": "|tell": "|phone": "|telephone": "|telefon": "|tel":"|tell":"|phone":"|telephone": "|telefon": "|Tel:|Tell:|Phone:|Telephone:|Telefon:|Tel": "|Tell": "|Phone": "|Telephone": "|Telefon:|Tel":"|Tell":"|Phone":"|Telephone":"|Telefon":"| TEL:|TELL:|PHONE:|TELEPHONE:|TELEFON:|TEL": "|TELL": "|PHONE": "|TELEPHONE": "|TELEFON:|TEL":"|TELL":"|PHONE":"|TELEPHONE":"|TELEFON":")(\d(-|\s|)){6,12}(\'|\"|\)|\<|\s)))/g;
let regexSocialMedia = /(?!(https\:\/\/((connect|support|developers|about|www\.(facebook|youtube)\.com\/(help|embed|settings))|((gits.|)github.com\/(features|enterprise|team|solutions|customer-stories|readme|topics|trending|collections|pricing|notifications|security))|ct\.pinterest.com)))(https\:\/\/[a-z,-]{1,}\.facebook\.[a-z]{1,}(\/(?!tr\?id=)[a-zA-Z0-9:%_+.,#!?@&=-]{1,}){1,}|https\:\/\/[a-z,-]{0,}\.{0,1}youtube\.[a-z]{1,}(\/[a-zA-Z0-9:%_+.,#?!@&=-]{1,}){1,}|https\:\/\/[a-z,-]{0,}\.{0,1}(instagram|pinterest|discord)\.[a-z]{1,}(\/[a-zA-Z0-9_.@-]{1,}){1,}|https\:\/\/github\.[a-z]{1,}(\/[a-zA-Z0-9_.-]{1,}){1,}|https\:\/\/([a-z,-]{0,}\.)*(twitter|x)\.[a-z]{1,}\/[a-zA-Z0-9:%_+.,#?!@&=-]{1,}|https\:\/\/[a-z-]{1,}\.linkedin\.[a-zA-Z0-9._-]{1,}(\/[a-zA-Z0-9-_.%áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]{1,}){1,})/g;
let regexGoogleIds = /G\-[A-Z0-9]{10}|pub\-[0-9]{16}|UA\-[0-9-]{10,12}|GTM\-[0-9A-Z]{7}|AW\-[0-9A-Z]{16}/g;
let regexEmail = /(?![a-zA-Z0-9._-]{1,}\@([a-zA-Z0-9_-]{1,}(\.(png|jpg|jpeg|pdf)){1,}|2x\.(webp|be)))([a-zA-Z0-9._-]{1,}(\@|(\(|\[|\s\(|\s\[)(at|a|TheSymbolWithaA)(\)|\]|\)\s|\]\s))[a-zA-Z0-9_-]{1,}(((\.|((\(|\[|\s\(|\s\[)dot(\)|\]|\)\s|\]\s))))([a-z]{2,})){1,})/g;
let regexCDN = /([a-z\-]{1,}\.){0,}[a-z_-]{0,}cdn\.[a-z\-]{1,}(\.[a-z\-]{1,}){0,}/g;
let regexAPI = /(?![a-z]{1,}\.png)((api(s|))\.[a-z]+\.[a-z]+|([a-z]+\.){0,}[a-z]+api(s|)\.[a-z]+|https:\/\/([a-z]+\.)+[a-z]+(\/[a-z]+)+\/api\/)/g;
let pageUrl = '';

const httppattern = /http(s|)?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const urlSegments = tabs[0].url.split('/');
    pageUrl = urlSegments.slice(0, 3).join('/');
});

function findMatches(content, regex,) {
    if (!content) {
        return new Set();
    }
    // const matches = Array.from(content.matchAll(regex)).map(match => match[0].replace(/[<>"']/g, ''));
    const matches = Array.from(content.matchAll(regex)).map(match => match[0].replace(/[<>"']|tel:|tell:|phone:|telephone:|telefon:|tel": "|tell": "|phone": "|telephone": "|telefon": "|tel":"|tell":"|phone":"|telephone":"|telefon":"|Tel:|Tell:|Phone:|Telephone:|Telefon:|Tel": "|Tell": "|Phone": "|Telephone": "|Telefon:|Tel":"|Tell":"|Phone":"|Telephone":"|Telefon":"| TEL:|TELL:|PHONE:|TELEPHONE:|TELEFON:|TEL": "|TELL": "|PHONE": "|TELEPHONE": "|TELEFON": "|TEL":"|TELL":"|PHONE":"|TELEPHONE":"|TELEFON":"/g, ''));

    return new Set(matches);
}


function analyzeHtml(htmlContent) {
    let phoneMatches = findMatches(htmlContent, regexPhone);
    let socialMediaMatches = findMatches(htmlContent, regexSocialMedia);
    let googleIdsMatches = findMatches(htmlContent, regexGoogleIds);
    let emailMatches = findMatches(htmlContent, regexEmail);
    let cdnMatches = findMatches(htmlContent, regexCDN);
    let apiMatches = findMatches(htmlContent, regexAPI);
    const domain = getDomain(pageUrl);
    const cleanedDomain = domain.replace('www.', '');
    
    //TODO Il faudrait virer tous les "tel:" "TELEPHONE:" des phoneMatches avant de transformer la liste en set mais là je sais pô comment faire proprement

    for (const match of cdnMatches) {
        if (match.includes('adsrv.eacdn.com')) {
            cdnMatches.delete(match);
        }
    }

    if (phoneMatches.size > 1){
        displayMatches('Phones :', phoneMatches);
    }
    else if (phoneMatches.size = 1){
        displayMatches('Phone :', phoneMatches);
    }

    if (socialMediaMatches.size > 1){
        displayMatches('Social Medias :', socialMediaMatches);
    }
    else if (socialMediaMatches.size = 1){
        displayMatches('Social Media :', socialMediaMatches);
    }

    if (googleIdsMatches.size > 1){
        displayMatches('Google IDs :', googleIdsMatches);
    }
    else if (googleIdsMatches.size = 1){
        displayMatches('Google ID :', googleIdsMatches);
    }

    if (emailMatches.size > 1){
        displayMatches('Emails :', emailMatches);
    }
    else if (emailMatches.size = 1){
        displayMatches('Email :', emailMatches);
    }

    if (cdnMatches.size > 1){
        displayMatches('CDNs :', cdnMatches);
    }
    else if (cdnMatches.size = 1){
        displayMatches('CDN :', cdnMatches);
    }cdnMatches

    if (apiMatches.size > 1){
        displayMatches('APIs :', apiMatches);
    }
    else if (apiMatches.size = 1){
        displayMatches('API :', apiMatches);
    }cdnMatches

    if (htmlContent.includes('wp-content')) {
        const wpDetect = pageUrl + '/wp-json/wp/v2/users';
        displayMatches('Site WordPress : ', [wpDetect]);
    }

    const robots = pageUrl + '/robots.txt';
    const sitemap1 = pageUrl + '/sitemap.xml';
    const sitemap2 = pageUrl + '/sitemap_index.xml';
    displayMatches('Robots :', [robots]);
    displayMatches('Sitemaps :', [sitemap1, sitemap2]);



    const cert = 'https://crt.sh/?q=' + cleanedDomain;
    displayMatches('Certificat :', [cert]);

    const whois = 'https://www.whoxy.com/' + cleanedDomain + '#whois';
    displayMatches('Whois :', [whois]);
    
    const archives = 'https://web.archive.org/web/*/' + domain;
    displayMatches('Archives :', [archives]);
}

function matchHTTPEndpoint(testString, pattern) {
    const result = pattern.test(testString);
    return result;
}


function displayMatches(title, matches) {
    const popupContent = document.getElementById('recon-content');
    const titleElement = document.createElement('h2');
    titleElement.textContent = title;
    popupContent.appendChild(titleElement);

    if (matches.size === 0) {
        const noMatchesElement = document.createElement('p');
        noMatchesElement.textContent = 'No matches found.';
        popupContent.appendChild(noMatchesElement);
    } else {
        const listElement = document.createElement('ul');
        matches.forEach(match => {
            const listItem = document.createElement('li');
            if (matchHTTPEndpoint(match, httppattern)) {
                const linkElement = document.createElement('a');
                linkElement.href = match;
                linkElement.textContent = match;
                listItem.appendChild(linkElement);
            } else if (matchHTTPEndpoint(match, regexGoogleIds)) {
                const linkElement = document.createElement('a');
                linkElement.href = 'https://search.dnslytics.com/search?d=domains&q=' + match;
                linkElement.textContent = match;
                listItem.appendChild(linkElement);
            } else if (matchHTTPEndpoint(match, regexGoogleIds)) {
                const linkElement = document.createElement('a');
                linkElement.href = 'https://search.dnslytics.com/search?d=domains&q=' + match;
                linkElement.textContent = match;
                listItem.appendChild(linkElement);
            } else {
                listItem.textContent = match;
            }
            listElement.appendChild(listItem);
        });
        popupContent.appendChild(listElement);
    }
}




document.querySelector('#recon-button').addEventListener('click', () => {
    chrome.tabs.executeScript({
        code: 'document.documentElement.outerHTML'
    }, (results) => {
        document.getElementById('recon-content').innerHTML = '';
        document.getElementById('seo-content').classList.add('hidden');
        document.getElementById('recon-content').classList.remove('hidden');
        htmlContent = results[0];
        analyzeHtml(htmlContent);
    });
});

chrome.tabs.executeScript({
    code: 'document.documentElement.outerHTML'
}, (results) => {
    if (chrome.runtime.lastError) {
        document.getElementById('error-content').classList.remove('hidden');
        document.getElementById('recon-content').classList.add('hidden');
    } else {
        htmlContent = results[0];
        initialContent = document.getElementById('recon-content').innerHTML;
        analyzeHtml(htmlContent);
    }
});

function getDomain(url) {
    try {
        const urlObj = new URL(url);
        return urlObj.hostname;
    } catch (e) {
        console.error("Invalid URL:", e);
        return null;
    }
}

