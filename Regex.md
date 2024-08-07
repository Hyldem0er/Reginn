# Regex Detail

### **Sociel network detection** : 
<div style="display: inline">(?!(https\:\/\/(connect|support|developers|about|www\.(facebook|youtube)\.com\/(help|embed|settings)|github.com\/(features|enterprise|team|solutions|customer-stories|readme|topics|trending|collections|pricing|notifications|security))))(https\:\/\/[a-z,-]{1,}\.facebook\.[a-z]{1,}(\/(?!tr\?id=)[a-zA-Z0-9:%_+.,#!?@&=-]{1,}){1,}|https\:\/\/[a-z,-]{0,}\.{0,1}youtube\.[a-z]{1,}(\/[a-zA-Z0-9:%_+.,#?!@&=-]{1,}){1,}|https\:\/\/[a-z,-]{0,}\.{0,1}(instagram|pinterest|github|discord)\.[a-z]{1,}(\/[a-zA-Z0-9_.@-]{1,}){1,}|https\:\/\/([a-z,-]{0,}\.)*(twitter|x)\.[a-z]{1,}\/[a-zA-Z0-9:%_+.,#?!@&=-]{1,}|https\:\/\/[a-z-]{1,}\.linkedin\.[a-zA-Z0-9._-]{1,}(\/[a-zA-Z0-9-_.%áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]{1,}){1,})
</div>

### **Google IDs detection** : 
<div style="display: inline">G\-[A-Z0-9]{10}|pub\-[0-9]{16}|UA\-[0-9-]{10,12}|GTM\-[0-9A-Z]{7}|AW\-[0-9A-Z]{16}</div>

### **Phone detection** : 
<div style="display: inline">(?&gt;;!viewbox=|viewBox=|values=|\d|index:|value"|SIREN|SIREN:|SIREN :|SIREN |rgb\()(?!(?:(?:\s)(?:(?:[0-9](?:\s|\-)){3,})(?:\s|)))(((\'|\"|\(|\&gt;|tel:|tell:|phone:|telephone:|telefon:|tel": "|tell": "|phone": "|telephone": "|telefon": "|tel":"|tell":"|phone":"|telephone":"|telefon":"|Tel:|Tell:|Phone:|Telephone:|Telefon:|Tel": "|Tell": "|Phone": "|Telephone": "|Telefon": "|Tel":"|Tell":"|Phone":"|Telephone":"|Telefon":"| TEL:|TELL:|PHONE:|TELEPHONE:|TELEFON:|TEL": "|TELL": "|PHONE": "|TELEPHONE": "|TELEFON": "|TEL":"|TELL":"|PHONE":"|TELEPHONE":"|TELEFON":"| ){1}((((0|\+)(\[|\()\d{1,3}(\]|\)))|0|(\+\s{0,1}\d{1,4}))(\s|-){0,1})(\d(\s|-){0,1}){9,10}(\'|\"|\)|\&lt;|\s){1})|((?!((.)((\d(\s|\-)){3,})(\s|)))((\'|\"|\(|\&gt;|\s|tel:|tell:|phone:|telephone:|telefon:|tel": "|tell": "|phone": "|telephone": "|telefon": "|tel":"|tell":"|phone":"|telephone":"|telefon":"|Tel:|Tell:|Phone:|Telephone:|Telefon:|Tel": "|Tell": "|Phone": "|Telephone": "|Telefon": "|Tel":"|Tell":"|Phone":"|Telephone":"|Telefon":"| TEL:|TELL:|PHONE:|TELEPHONE:|TELEFON:|TEL": "|TELL": "|PHONE": "|TELEPHONE": "|TELEFON": "|TEL":"|TELL":"|PHONE":"|TELEPHONE":"|TELEFON":"| ){1}((((((\+)(\[|\(|)1(\]|\)|))|(\(|\[|)1(\)|\]|)|\+)(\s|-){0,1})(\d(\s|-){0,1}){10})|(\[|\(|)\d{3}(\]|\)|)(-|\s)\d{3}(-|\s)\d{3,4})(\'|\"|\)|\&lt;|\s){1}))|((tel:|tell:|phone:|telephone:|telefon:|tel": "|tell": "|phone": "|telephone": "|telefon": "|tel":"|tell":"|phone":"|telephone":"|telefon":"|Tel:|Tell:|Phone:|Telephone:|Telefon:|Tel": "|Tell": "|Phone": "|Telephone": "|Telefon": "|Tel":"|Tell":"|Phone":"|Telephone":"|Telefon":"| TEL:|TELL:|PHONE:|TELEPHONE:|TELEFON:|TEL": "|TELL": "|PHONE": "|TELEPHONE": "|TELEFON": "|TEL":"|TELL":"|PHONE":"|TELEPHONE":"|TELEFON":")(\d(-|\s|)){6,12}(\'|\"|\)|\&lt;|\s)))</div>

### **Mail detection** : 
(?![a-zA-Z0-9._-]{1,}\@[a-zA-Z0-9_-]{1,}(?:\.(?:png|jpg|jpeg|pdf)){1,})(?![a-zA-Z0-9._-]{1,}\@([a-zA-Z0-9_-]{1,}(\.(png|jpg|jpeg|pdf)){1,}|2x\.webp))([a-zA-Z0-9._-]{1,}(\@|(\(|\[)(at|TheSymbolWithaA)(\)|\]))[a-zA-Z0-9_-]{1,}(((\.|((\(|\[)dot(\)|\]))))([a-z]{2,})){1,})

### **CDN detection** : 
<div style="display: inline">([a-z\-]{1,}\.){0,}[a-z_-]{0,}cdn\.[a-z\-]{1,}(\.[a-z\-]{1,}){0,}</div>

### **API detection** : 
<div style="display: inline">(?![a-z]{1,}\.png)(api\.[a-z]{1,}\.[a-z]{1,}|([a-z]{1,}\.){0,}[a-z]{1,}api(s|)\.[a-z]{1,}|https:\/\/([a-z]{1,}\.){1,}[a-z]{1,}(\/[a-z]{1,}){1,}\/api\/)</div>
