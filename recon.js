(function(document) {
    console.log("Le fichier recon.js est chargé et exécuté.");

    // Vérifiez que le script est exécuté sur une page web et non sur l'extension
    if (window.location.protocol === "http:" || window.location.protocol === "https:") {
        try {
            var url = window.location.href;
            console.log("URL actuelle :", url); // Ajoutez cette ligne
            var match = url.match(/https?:\/\/([^\/]+)/);
            if (match) {
                var domain = match[1];
                var tld = domain.match(/\.[^\.]+$/)[0];
                var domainWithoutTld = domain.replace(tld, "");

                console.log("Domaine:", domain);
                console.log("TLD:", tld);
                console.log("Domaine sans TLD:", domainWithoutTld);

                var pageContent = document.documentElement.outerHTML;
                console.log("Contenu de la page récupéré :", pageContent);

                // Reste du code pour la reconnaissance des informations
                var regexPhone = /(?<!viewbox=|viewBox=|values=|\d|index:|value"|SIREN|SIREN:|SIREN :|SIREN |rgb\()(?!(?:(?:\s)(?:(?:[0-9](?:\s|\-)){3,})(?:\s|)))(((\'|\"|\(|\>|tel:|tell:|phone:|telephone:|telefon:|tel": "|tell": "|phone": "|telephone": "|telefon": "|tel":"|tell":"|phone":"|telephone":"|telefon":"|Tel:|Tell:|Phone:|Telephone:|Telefon:|Tel": "|Tell": "|Phone": "|Telephone": "|Telefon": "|Tel":"|Tell":"|Phone":"|Telephone":"|Telefon":"| TEL:|TELL:|PHONE:|TELEPHONE:|TELEFON:|TEL": "|TELL": "|PHONE": "|TELEPHONE": "|TELEFON": "|TEL":"|TELL":"|PHONE":"|TELEPHONE":"|TELEFON":"| ){1}((((0|\+)(\[|\()\d{1,3}(\]|\)))|0|(\+\s{0,1}\d{1,4}))(\s|-){0,1})(\d(\s|-){0,1}){9,10}(\'|\"|\)|\<|\s){1})|((?!((.)((\d(\s|\-)){3,})(\s|)))((\'|\"|\(|\>|\s|tel:|tell:|phone:|telephone:|telefon:|tel": "|tell": "|phone": "|telephone": "|telefon": "|tel":"|tell":"|phone":"|telephone":"|telefon":"|Tel:|Tell:|Phone:|Telephone:|Telefon:|Tel": "|Tell": "|Phone": "|Telephone": "|Telefon": "|Tel":"|Tell":"|Phone":"|Telephone":"|Telefon":"| TEL:|TELL:|PHONE:|TELEPHONE:|TELEFON:|TEL": "|TELL": "|PHONE": "|TELEPHONE": "|TELEFON": "|TEL":"|TELL":"|PHONE":"|TELEPHONE":"|TELEFON":"| ){1}((((((\+)(\[|\(|)1(\]|\)|))|(\(|\[|)1(\)|\]|)|\+)(\s|-){0,1})(\d(\s|-){0,1}){10})|(\[|\(|)\d{3}(\]|\)|)(-|\s)\d{3}(-|\s)\d{3,4})(\'|\"|\)|\<|\s){1}))|((tel:|tell:|phone:|telephone:|telefon:|tel": "|tell": "|phone": "|telephone": "|telefon": "|tel":"|tell":"|phone":"|telephone":"|telefon":"|Tel:|Tell:|Phone:|Telephone:|Telefon:|Tel": "|Tell": "|Phone": "|Telephone": "|Telefon": "|Tel":"|Tell":"|Phone":"|Telephone":"|Telefon":"| TEL:|TELL:|PHONE:|TELEPHONE:|TELEFON:|TEL": "|TELL": "|PHONE": "|TELEPHONE": "|TELEFON": "|TEL":"|TELL":"|PHONE":"|TELEPHONE":"|TELEFON":")(\d(-|\s|)){6,12}(\'|\"|\)|\<|\s)))/g;
                var regexSocialMedia = /(?!(https\:\/\/((connect|support|developers|about|www\.(facebook|youtube)\.com\/(help|embed|settings))|((gits.|)github.com\/(features|enterprise|team|solutions|customer-stories|readme|topics|trending|collections|pricing|notifications|security))|ct\.pinterest.com)))(https\:\/\/[a-z,-]{1,}\.facebook\.[a-z]{1,}(\/(?!tr\?id=)[a-zA-Z0-9:%_+.,#!?@&=-]{1,}){1,}|https\:\/\/[a-z,-]{0,}\.{0,1}youtube\.[a-z]{1,}(\/[a-zA-Z0-9:%_+.,#?!@&=-]{1,}){1,}|https\:\/\/[a-z,-]{0,}\.{0,1}(instagram|pinterest|discord)\.[a-z]{1,}(\/[a-zA-Z0-9_.@-]{1,}){1,}|https\:\/\/github\.[a-z]{1,}(\/[a-zA-Z0-9_.-]{1,}){1,}|https\:\/\/([a-z]{1,}\.)*(twitter|x)\.[a-z]{1,}\/[a-zA-Z0-9:%_+.,#?!@&=-]{1,}|https\:\/\/[a-z-]{1,}\.linkedin\.[a-zA-Z0-9._-]{1,}(\/[a-zA-Z0-9-_.%áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]{1,}){1,})/g;
                var regexGoogleIds = /G\-[A-Z0-9]{10}|pub\-[0-9]{16}|UA\-[0-9-]{10,12}|GTM\-[0-9A-Z]{7}|AW\-[0-9A-Z]{16}/g;
                var regexEmail = /(?![a-zA-Z0-9._-]{1,}\@([a-zA-Z0-9_-]{1,}(\.(png|jpg|jpeg|pdf)){1,}|2x\.(webp|be)))([a-zA-Z0-9._-]{1,}(\@|(\(|\[)(at|TheSymbolWithaA)(\)|\]))[a-zA-Z0-9_-]{1,}(((\.|((\(|\[)dot(\)|\]))))([a-z]{2,})){1,})/g;
                var regexCDN = /([a-z]{1,}\.){0,}[a-z]{0,}cdn\.[a-z]{1,}(\.[a-z]{1,}){0,}/g;
                var regexAPI = /(?![a-z]{1,}\.png)(api\.[a-z]{1,}\.[a-z]{1,}|([a-z]{1,}\.){0,}[a-z]{1,}api(s|)\.[a-z]{1,}|https:\/\/([a-z]{1,}\.){1,}[a-z]{1,}(\/[a-z]{1,}){1,}\/api\/)/g;

                var phoneMatches = Array.from(pageContent.matchAll(regexPhone)).map(match => match[0].replace(/[<>"'()]/g, ''));
                var socialMediaMatches = Array.from(pageContent.matchAll(regexSocialMedia)).map(match => match[0].replace(/[<>"'()]/g, ''));
                var googleIdsMatches = Array.from(pageContent.matchAll(regexGoogleIds)).map(match => match[0].replace(/[<>"'()]/g, ''));
                var emailMatches = Array.from(pageContent.matchAll(regexEmail)).map(match => match[0].replace(/[<>"'()]/g, ''));
                var cdnMatches = Array.from(pageContent.matchAll(regexCDN)).map(match => match[0].replace(/[<>"'()]/g, ''));
                var apiMatches = Array.from(pageContent.matchAll(regexAPI)).map(match => match[0].replace(/[<>"'()]/g, ''));

                var wordpressMatches = [];
                var robotsMatches = ["Robots rules : https://" + domainWithoutTld + tld + "/robots.txt"];
                var sitemapMatches = ["Sitemap : https://" + domainWithoutTld + tld + "/sitemap_index"];

                if (pageContent.includes("wp-content")) {
                    wordpressMatches.push("SITE WORDPRESS : https://" + domainWithoutTld + tld + "/wp-json/wp/v2/users");
                }

                var results = {
                    phoneMatches: "Telephone : " + phoneMatches.join(", "),
                    socialMediaMatches: "Social Medias : " + socialMediaMatches.join(", "),
                    googleIdsMatches: "Google IDs : " + googleIdsMatches.join(", "),
                    emailMatches: "Emails : " + emailMatches.join(", "),
                    cdnMatches: "CDNs : " + cdnMatches.join(", "),
                    apiMatches: "APIs : " + apiMatches.join(", "),
                    wordpressMatches: wordpressMatches,
                    robotsMatches: robotsMatches,
                    sitemapMatches: sitemapMatches
                };

                console.log("Résultats de l'analyse:", results);
            } else {
                console.error("L'URL ne correspond pas au format attendu :", url);
            }
        } catch (error) {
            console.error("Erreur lors de la récupération du domaine :", error);
        }
    } else {
        console.log("Le script recon.js ne s'exécute pas sur les pages de l'extension.");
    }
})(document);
