function displayResult(matches) {
    const popupContent = document.getElementById('seo-content');
    const titleElement = document.createElement('h2');
    titleElement.textContent = "Most used words on the page :";
    popupContent.appendChild(titleElement);
    if (matches.size === 0) {
        const noMatchesElement = document.createElement('p');
        noMatchesElement.textContent = 'No matches found.';
        popupContent.appendChild(noMatchesElement);
    } else {
        const listElement = document.createElement('ul');
        matches.forEach(match => {
            const word = match.split(':')[0].trim();
            const listItem = document.createElement('li');
            const linkElement = document.createElement('a');
            linkElement.href = 'https://www.cutestat.com/tag/' + word;
            linkElement.textContent = match;
            listItem.appendChild(linkElement);
            listElement.appendChild(listItem);
        });
        popupContent.appendChild(listElement);
    }
}

function getDomain(url) {
    try {
        const urlObj = new URL(url);
        return urlObj.hostname;
    } catch (e) {
        console.error("Invalid URL:", e);
        return null;
    }
}

function analyseDomain(urlDomain){
    const popupContent = document.getElementById('seo-content');
    const titleElement = document.createElement('h2');
    titleElement.textContent = "Referencing :";
    popupContent.appendChild(titleElement);
    const domain = getDomain(urlDomain);
    const listElement = document.createElement('ul');

    // Similar Web
    const listItemSimilar = document.createElement('li');
    const linkElementSimilar = document.createElement('a');
    url = 'https://similarweb.com/website/' + domain + '/#overview'
    linkElementSimilar.href = url;
    linkElementSimilar.textContent = url;
    listItemSimilar.appendChild(linkElementSimilar);
    listElement.appendChild(listItemSimilar)

    // Statshow
    const listItemStatshow = document.createElement('li');
    const linkElementStatshow = document.createElement('a');
    url = 'https://www.statshow.com/www/' + domain
    linkElementStatshow.href = url;
    linkElementStatshow.textContent = url;
    listItemStatshow.appendChild(linkElementStatshow);
    listElement.appendChild(listItemStatshow);
    popupContent.appendChild(listElement);

}

function backLinks(urlDomain){
    const popupContent = document.getElementById('seo-content');
    const titleElement = document.createElement('h2');
    titleElement.textContent = "Backlinks :";
    popupContent.appendChild(titleElement);
    const domain = getDomain(urlDomain);
    const listElement = document.createElement('ul');

    // Ahref
    const listItemAhref = document.createElement('li');
    const linkElementAhref = document.createElement('a');
    url = 'https://ahrefs.com/backlink-checker/?input=' + domain + '&mode=subdomains'
    linkElementAhref.href = url;
    linkElementAhref.textContent = url;
    listItemAhref.appendChild(linkElementAhref);
    listElement.appendChild(listItemAhref);
    popupContent.appendChild(listElement);
}

function seo(htmlContent, urlDomain) {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(htmlContent, 'text/html');
    const text = htmlDoc.body.textContent;
    const stopWords = [ 'the','and','a','of','in','to','is','on','for','with','as','by','at','or','if','be','are','but','from','that','which','who','whom','whose','this','these','those','there','where','when','how','why','all','any','each','few','more','most','several','some','such','no','nor','not','only','other','so','than','too','very','can','will','just','don',"don't",'should',"should've",'now','d','ll','m','re','ve','y','ain','aren',"aren't",'couldn',"couldn't",'didn',"didn't",'doesn',"doesn't",'hadn',"hadn't",'hasn',"hasn't",'haven',"haven't",'isn',"isn't",'ma','mightn',"mightn't",'mustn',"mustn't",'needn',"needn't",'shan',"shan't",'shouldn',"shouldn't",'wasn',"wasn't",'weren',"weren't",'wouldn',"wouldn't",'might','may','must','shall','should','will','would','的','是','了','和','在','到','是','上','为','与','作','于','以','为','着','或','如','可','就','会','就','现','不','从','那','哪','也','只','自','其','同','也','很','可','会','要','等','都','多','最','更','更多','一些','一样','没有','没','不是','只是','其他','所以','因为','所以','因此','而','太','再','の','が','は','を','に','と','で','が','の','を','に','と','で','が','は','が','は','を','に','と','で','か','より','も','また','し','いる','する','ある','い','いる','する','ある','い','いる','する','ある','い','いる','する','ある','い','いる','する','ある','い','いる','する','ある','い','いる','する','ある','い','いる','する','ある','い','der','die','das','und','in','zu','ist','auf','für','mit','als','von','an','oder','wenn','sein','sind','aber','von','dass','wer','welche','welcher','welches','wem','wessen','dieser','diese','dieses','das','da','wo','wann','wie','warum','alle','einige','mehr','am','meisten','ein','eine','einem','einer','eines','nicht','nur','eigene','andere','so','als','auch','sehr','kann','werden','gerade','tun','sollen','jetzt','el','la','los','las','y','en','a','para','con','como','por','de','en','o','si','es','son','pero','de','que','qué','quién','cuyo','este','estos','esta','estas','eso','aquí','no','desde','eso','qué','dónde','cuándo','cómo','por qué','todos','algunos','más','la','mayoría','un','una','unos','unas','no','sólo','propio','otro','así','que','también','muy','puede','será','justo','hacer','devrait','ahora','le','la','les','et','dans','à','est','sur','pour','avec','comme','par','de','en','ou','si','est','sont','mais','de','que','qui','dont','ce','ces','cet','cette','cela','ici','non','depuis','cela','où','quand','comment','pourquoi','tous','certains','plus','le','la','les','plusieurs','quelques','pas','seulement','propre','autre','ainsi','que','aussi','très','peut','sera','juste','faire','devrait','maintenant','twitter','facebook','instagram','linkedin','youtube','pinterest','snapchat','tiktok','reddit','tumblr','whatsapp','messenger','telegram','wechat','line','viber','skype','discord','微博','微信','qq','抖音','快手','百度贴吧','知乎','豆瓣','今日头条','小红书','陌陌','QQ空间','微博','微信','qq','抖音','快手','百度贴吧','知乎','豆瓣','今日头条','小红书','陌陌','QQ空间','ツイッター','フェイスブック','インスタグラム','リンクドイン','ユーチューブ','ピンタレスト','スナップチャット','ティックトック','レディット','タンブラー','ウェットアップ','メッセンジャー','テレグラム','ウェチャット','ライン','バイバー','スカイプ','ディスコード','left','right','wrapper','hover','body','bottom','media','screen','order','votre','heading','icon','vous','nous','notre','afin','ffffff','marque','produits','link','informations','return','product','autour','contre','link','button','span','return','product','personnes','function','type','autour','brand','tape','const','void','typeof','else','instanceof','veuillez','avez','links','cookies','peuvent','label','inherit','préférences','checkbox','string','données','textcontent','name','display','navigateur','généralement','permettent','services','publicité','datalayer','href','galement','width','checked','models','container','opacity','sticky','headline','transform','solid','kexftu','ljokvz','color','default','stripe','tfsi','mixte','inset','ensmodal','group','wltp','bank','site','pouvez','acceptez','after','center','your','nameinput','geneset','slider','open','submenu','pubmed','baseurl','your','password','account','user','icons','page','undefined','opens','after','faqpress','windowtwitter','windowinstagram','rsiw','tabw','thumbw','null','saisissez','ouvert','fermé','open','closed','config','starttime','endtime','abonne','avis','boutique','please','code','login','failed','status','contact','error','encountered','connecter','ajouter','while','error','trying','autres','identifiant','send','wordfence','var','liste','mon','des','compte','produit','total','mes','mes','eur','lin','usd','des','xcd','typetierce','aud','gbp','précédent','suivant','xaf','nzd','une','typepremière','ils','cookie','dkk','case','prix','new','reviews','inscrire','voir','tout','true','text','top','root','nos','slide','header','inject','vos','slideoverpanel','you','full','host','mobile','height','border','view','purposes','notice','preferences','xsmall','processing','toggle','title','url','buttons','box','near']
    const words=text.toLowerCase().match(/(?<=[\s\n]|^)[a-z\u4e00-\u9fa5\u3040-\u309F\u30A0-\u30FF\u0400-\u04FF\u00E0-\u00FC\u00C0-\u00DC\u00DF\u00E0-\u00FF\u0100-\u017F]{3,}(?=\s|$)/g)||[];
    const wordCounts={};
    words.forEach(word=>{ if(!stopWords.includes(word)){ wordCounts[word]=(wordCounts[word]||0)+1;}});
    const sortedWordCounts=Object.entries(wordCounts).sort((a,b)=>b[1]-a[1]);
    const filteredWordCounts=sortedWordCounts.filter(([word, count]) => count > 4);
    const uniqueMatches=filteredWordCounts.slice(0,10).map(([word, count])=>`${word} : ${count}`);
    displayResult(uniqueMatches)
    analyseDomain(urlDomain)
    backLinks(urlDomain)
}

document.querySelector('#seo-button').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const currentTab = tabs[0];
        const currentUrl = currentTab.url;
    
        chrome.tabs.executeScript({
            code: 'document.documentElement.outerHTML'
        }, (results) => {
            const htmlContent = results[0];
            document.getElementById('seo-content').innerHTML = '';
            document.getElementById('recon-content').classList.add('hidden');
            document.getElementById('seo-content').classList.remove('hidden');
            seo(htmlContent, currentUrl);
        });
    });
});
