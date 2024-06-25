# Regex Detail

### **Sociel network detection** : 
https\:\/\/[a-z,-]{1,}\.facebook\.[a-z]{1,}(?:\/(?!tr\?id=)[a-zA-Z0-9:%_+.,#!?@&=-]{1,}){1,}|https\:\/\/[a-z,-]{0,}\.{0,1}youtube\.[a-z]{1,}(?:\/[a-zA-Z0-9:%_+.,#?!@&=-]{1,}){1,}|https\:\/\/[a-z,-]{0,}\.{0,1}instagram\.[a-z]{1,}\/[a-zA-Z0-9:%_+.,#?!@&=-]{1,}|https\:\/\/([a-z,-]{0,}\.)*twitter\.[a-z]{1,}\/[a-zA-Z0-9:%_+.,#?!@&=-]{1,}|https\:\/\/[a-z-]{1,}\.linkedin\.[a-zA-Z0-9._-]{1,}(?:\/[a-zA-Z0-9-_.]{1,}){1,}|https\:\/\/[a-z-]{1,}\.tiktok\.[a-zA-Z0-9._-]{1,}(?:\/[a-zA-Z0-9-_.@]{1,}){1,}|https\:\/\/([a-z,-]\.){0,}github\.[a-z]{1,}(?:\/[a-zA-Z0-9]{1,})

### **Google IDs detection** : 
G\-[A-Z0-9]{10}|pub\-[0-9]{16}|UA\-[0-9-]{10,12}|GTM\-[0-9A-Z]{7}|AW\-[0-9A-Z]{16}

### **Phone detection** : 
(((\'|\"|\(|\>|tel:|tell:|phone:|telephone:|telefon:|PHONE:){1}((((0|\+)(\[|\()\d{1,3}(\]|\)))|0|(\+\s{0,1}\d{1,4}))(\s|-){0,1})(\d(\s|-){0,1}){9,10}(\'|\"|\)|\<|\s){1})|((?!((.)((\d(\s|\-)){3,})(\s|)))((\'|\"|\(|\>|\s|tel:|tell:|phone:|telephone:|telefon:|TEL:|TELL:|PHONE:|TELEPHONE:|TELEFON:){1}((((((\+)(\[|\(|)1(\]|\)|))|(\(|\[|)1(\)|\]|)|\+)(\s|-){0,1})(\d(\s|-){0,1}){10})|(\[|\(|)\d{3}(\]|\)|)(-|\s)\d{3}(-|\s)\d{3,4})(\'|\"|\)|\<|\s){1}))|((tel:|tell:|phone:|telephone:|telefon:|TEL:|TELL:|PHONE:|TELEPHONE:|TELEFON:)(\d(-|\s|)){6,12}(\'|\"|\)|\<|\s)))

### **Mail detection** : 
(?:(?![a-zA-Z0-9._-]{1,}\@[a-zA-Z0-9_-]{1,}(?:\.(?:png|jpg|jpeg|pdf)){1,})[a-zA-Z0-9._-]{1,}\@[a-zA-Z0-9_-]{1,}(?:\.(?:[a-z]{1,})){1,})

### **CDN detection** : 
<div style="display: inline">https\:\/\/cdn\.[a-z.]{1,}\/</div>
