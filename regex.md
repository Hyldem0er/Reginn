Téléphone
```regex
(?<!viewbox=|viewBox=|values=|\d:"|\d\d:"|\d\d\d:"|\d\d\d\d:"|\d|index:|value"|SIREN|SIREN:|SIREN :|SIREN |rgb|bid=|background\:|background\:new|background="new|SIRET\s\:)(?!((\s)(([0-9](\s|%20|\-)){3,})(\s|%20|)))(((\'|\"|\(|\>|tel:|tell:|phone:|telephone:|telefon:|tel": "|tell": "|phone": "|telephone": "|telefon": "|tel":"|tell":"|phone":"|telephone":"|telefon":"|Tel:|Tell:|Phone:|Telephone:|Telefon:|Tel": "|Tell": "|Phone": "|Telephone": "|Telefon:|Tel":"|Tell":"|Phone":"|Telephone":"|Telefon":"| TEL:|TELL:|PHONE:|TELEPHONE:|TELEFON:|TEL": "|TELL": "|PHONE": "|TELEPHONE": "|TELEFON": "|TEL":"|TELL":"|PHONE":"|TELEPHONE":"|TELEFON":"| ){1}(?<!viewbox=|viewBox=|values=|\d:"|index:|value"|SIREN|SIREN:|SIREN :|SIREN |rgb|bid=|background\:)((((0|\+)(\d{0,3}|)( |)(\[|\()\d{1,3}(\]|\)))|0|(\+\s?\d{1,4}))(\s|-|\()?)(\d(\s|-|%20|\))?){8,10}(\'|\"|\)|\<|\s|%20){1})|((?!((.)((\d(\s|\-|%20)){3,})(\s|%20|)))((\'|\"|\(|\>|\s|%20|tel:|tell:|phone:|telephone:|telefon:|tel": "|tell": "|phone": "|telephone": "|telefon": "|tel":"|tell":"|phone":"|telephone": "|telefon": "|Tel:|Tell:|Phone:|Telephone:|Telefon:|Tel": "|Tell": "|Phone": "|Telephone": "|Telefon:|Tel":"|Tell":"|Phone":"|Telephone":"|Telefon":"| TEL:|TELL:|PHONE:|TELEPHONE:|TELEFON:|TEL": "|TELL": "|PHONE": "|TELEPHONE": "|TELEFON": "|TEL":"|TELL":"|PHONE":"|TELEPHONE":"|TELEFON":"| ){1}((((((\+)(\[|\(|)1(\]|\)|))|(\(|\[|)1(\)|\]|)|\+)(\s|-)?)(\d(\s|-)?){10})|(\[|\(|)\d{3}(\]|\)|)(-|\s|\%20)\d{3}(-|\s)\d{3,4})(\'|\"|\)|\<|\s){1}))|((tel:|tell:|phone:|telephone:|telefon:|tel": "|tell": "|phone": "|telephone": "|telefon": "|tel":"|tell":"|phone":"|telephone": "|telefon": "|Tel:|Tell:|Phone:|Telephone:|Telefon:|Tel": "|Tell": "|Phone": "|Telephone": "|Telefon:|Tel":"|Tell":"|Phone":"|Telephone":"|Telefon":"| TEL:|TELL:|PHONE:|TELEPHONE:|TELEFON:|TEL": "|TELL": "|PHONE": "|TELEPHONE": "|TELEFON:|TEL":"|TELL":"|PHONE":"|TELEPHONE":"|TELEFON":")(\d(-|\s|%20|)){6,12}(\'|\"|\)|\<|\s|\%20)))(?! property="fb:pages")
```
Réseaux Sociaux
```regex
(?!(https\:\/\/((connect|support|developers|about|www\.(facebook|youtube)\.com\/(help|sharer|photo|recover|login|legal|hashtag|embed|settings))|((gits.|)(github.com||pinterest.com|twitter.com)\/(features|share|pin|enterprise|team|search|solutions|customer-stories|readme|topics|trending|collections|pricing|notifications|security|fluidicon))|(www\.instagram\.com\/p)|ct\.pinterest.com)))(https\:\/\/([a-z,-]+\.)?facebook\.[a-z]+(\/(?!tr\?id=)[a-zA-Z0-9:%_+.,#!?\/@&=-]+)+|https\:\/\/([a-z,-]+\.)?youtube\.[a-z]+(\/[a-zA-Z0-9:%_+.,#?!@&=-]+)+|https\:\/\/([a-z,-]+\.)?(instagram|pinterest|discord)\.[a-z]+(\/[a-zA-Z0-9_.@-]+)+|https\:\/\/github\.[a-z]+(\/[a-zA-Z0-9_.-]+)+|https\:\/\/([a-z,-]+\.)?(twitter|x)\.[a-z]+\/[a-zA-Z0-9:%_+.,#?!@&=-]+|https\:\/\/([a-z-]+\.)?linkedin\.[a-zA-Z0-9._-]+(\/[a-zA-Z0-9-_.%áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]+)+)
```
Google IDs
```regex
G\-[A-Z0-9]{10}|pub\-[0-9]{16}|UA\-[0-9-]{10,12}|GTM\-[0-9A-Z]{7}|AW\-[0-9A-Z]{16}
```
Emails
```regex
(?![a-zA-Z0-9._-]+\@(sentry.io|([a-zA-Z0-9_-]{0,})(\.(png|jpg|jpeg|pdf|ingest|\w+\.png|\w+\.jpg|\w+\.jpeg|\w+\.pdf|\w+\.ingest\.[a-z]{1,3}\.sentry\.io|newrelic\.com|datadoghq\.com|loggly\.com|wixpress\.com|googleapis\.com))+|2x\.webp))[\w.-]+(?:@|\[at\]|\(at\)|\[TheSymbolWithaA\]|\(TheSymbolWithaA\))[\w-]+(?:(?:\.|\(dot\)|\[dot\])[a-z]{2,})+
```
CDNs
```regex
([a-z\-]+\.){0,}[a-z_-]{0,}cdn\.[a-z\-]+(\.[a-z\-]+){0,}
```
APIs
```regex
(?![a-z]+\.png)((api(s|))\.[a-z]+\.[a-z]+|([a-z]+\.){0,}[a-z]+api(s|)\.[a-z]+|https:\/\/([a-z]+\.)+[a-z]+(\/[a-z]+)+\/api\/)
```
Comments
```regex
(?<!https:|http:|src="|lazyload="|ref="|mp4="|reference="|webpack:|before{ )(\/\*{1,2}[\s\S]*?\*\/|\/{2}[\s\S][^\/]*?(\r\n|\r|\n|$)|<!--[\s\S]*?-->)
```
IPs
```regex
(?<!\d)(?<![a-zA-Z. ])(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(?!\d)(?![a-zA-Z])
```