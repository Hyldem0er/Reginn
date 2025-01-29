let regexPhone = /(?<!viewbox=|viewBox=|values=|\d:"|\d\d:"|\d\d\d:"|\d\d\d\d:"|\d|index:|value"|SIREN|SIREN:|SIREN :|SIREN |rgb|bid=|background\:)(?!(?:(?:\s)(?:(?:[0-9](?:\s|%20|\-)){3,})(?:\s|%20|)))(((\'|\"|\(|\>|tel:|tell:|phone:|telephone:|telefon:|tel": "|tell": "|phone": "|telephone": "|telefon": "|tel":"|tell":"|phone":"|telephone":"|telefon":"|Tel:|Tell:|Phone:|Telephone:|Telefon:|Tel": "|Tell": "|Phone": "|Telephone": "|Telefon:|Tel":"|Tell":"|Phone":"|Telephone":"|Telefon":"| TEL:|TELL:|PHONE:|TELEPHONE:|TELEFON:|TEL": "|TELL": "|PHONE": "|TELEPHONE": "|TELEFON": "|TEL":"|TELL":"|PHONE":"|TELEPHONE":"|TELEFON":"| ){1}(?<!viewbox=|viewBox=|values=|\d:"|index:|value"|SIREN|SIREN:|SIREN :|SIREN |rgb|bid=|background\:)((((0|\+)(\d{0,3}|)( |)(\[|\()\d{1,3}(\]|\)))|0|(\+\s?\d{1,4}))(\s|-|\()?)(\d(\s|-|%20|\))?){8,10}(\'|\"|\)|\<|\s|%20){1})|((?!((.)((\d(\s|\-|%20)){3,})(\s|%20|)))((\'|\"|\(|\>|\s|%20|tel:|tell:|phone:|telephone:|telefon:|tel": "|tell": "|phone": "|telephone": "|telefon": "|tel":"|tell":"|phone":"|telephone": "|telefon": "|Tel:|Tell:|Phone:|Telephone:|Telefon:|Tel": "|Tell": "|Phone": "|Telephone": "|Telefon:|Tel":"|Tell":"|Phone":"|Telephone":"|Telefon":"| TEL:|TELL:|PHONE:|TELEPHONE:|TELEFON:|TEL": "|TELL": "|PHONE": "|TELEPHONE": "|TELEFON": "|TEL":"|TELL":"|PHONE":"|TELEPHONE":"|TELEFON":"| ){1}((((((\+)(\[|\(|)1(\]|\)|))|(\(|\[|)1(\)|\]|)|\+)(\s|-)?)(\d(\s|-)?){10})|(\[|\(|)\d{3}(\]|\)|)(-|\s|\%20)\d{3}(-|\s)\d{3,4})(\'|\"|\)|\<|\s){1}))|((tel:|tell:|phone:|telephone:|telefon:|tel": "|tell": "|phone": "|telephone": "|telefon": "|tel":"|tell":"|phone":"|telephone": "|telefon": "|Tel:|Tell:|Phone:|Telephone:|Telefon:|Tel": "|Tell": "|Phone": "|Telephone": "|Telefon:|Tel":"|Tell":"|Phone":"|Telephone":"|Telefon":"| TEL:|TELL:|PHONE:|TELEPHONE:|TELEFON:|TEL": "|TELL": "|PHONE": "|TELEPHONE": "|TELEFON:|TEL":"|TELL":"|PHONE":"|TELEPHONE":"|TELEFON":")(\d(-|\s|%20|)){6,12}(\'|\"|\)|\<|\s|\%20)))/g;
let regexSocialMedia = /(?!(https\:\/\/((connect|support|developers|about|www\.(facebook|youtube)\.com\/(help|sharer|photo|recover|login|legal|hashtag|embed|settings))|((gits.|)(github.com||pinterest.com|twitter.com)\/(features|share|pin|enterprise|team|search|solutions|customer-stories|readme|topics|trending|collections|pricing|notifications|security|fluidicon))|(www\.instagram\.com\/p)|ct\.pinterest.com)))(https\:\/\/[a-z,-]+\.facebook\.[a-z]+(\/(?!tr\?id=)[a-zA-Z0-9:%_+.,#!?@&=-]+)+|https\:\/\/[a-z,-]{0,}\.?youtube\.[a-z]+(\/[a-zA-Z0-9:%_+.,#?!@&=-]+)+|https\:\/\/[a-z,-]{0,}\.?(instagram|pinterest|discord)\.[a-z]+(\/[a-zA-Z0-9_.@-]+)+|https\:\/\/github\.[a-z]+(\/[a-zA-Z0-9_.-]+)+|https\:\/\/([a-z,-]{0,}\.)*(twitter|x)\.[a-z]+\/[a-zA-Z0-9:%_+.,#?!@&=-]+|https\:\/\/[a-z-]+\.linkedin\.[a-zA-Z0-9._-]+(\/[a-zA-Z0-9-_.%áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]+)+)/g;
let regexGoogleIds = /G\-[A-Z0-9]{10}|pub\-[0-9]{16}|UA\-[0-9-]{10,12}|GTM\-[0-9A-Z]{7}|AW\-[0-9A-Z]{16}/g;
let regexEmail = /(?![a-zA-Z0-9._-]+\@(sentry.io|([a-zA-Z0-9_-]{0,})(\.(png|jpg|jpeg|pdf|ingest|\w+\.png|\w+\.jpg|\w+\.jpeg|\w+\.pdf|\w+\.ingest\.[a-z]{1,3}\.sentry\.io|newrelic\.com|datadoghq\.com|loggly\.com|wixpress\.com|googleapis\.com))+|2x\.webp))([a-zA-Z0-9._-]+(\@|(\(|\[)(at|TheSymbolWithaA)(\)|\]))[a-zA-Z0-9_-]+(((\.|((\(|\[)dot(\)|\]))))([a-z]{2,}))+)/g;
let regexCDN = /([a-z\-]+\.){0,}[a-z_-]{0,}cdn\.[a-z\-]+(\.[a-z\-]+){0,}/g;
let regexAPI = /(?![a-z]+\.png)((api(s|))\.[a-z]+\.[a-z]+|([a-z]+\.){0,}[a-z]+api(s|)\.[a-z]+|https:\/\/([a-z]+\.)+[a-z]+(\/[a-z]+)+\/api\/)/g;
let pageUrl = '';
let fullUrl = '';

const httppattern = /http(s|)?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
const googlePattern = /https:\/\/www\.google\.com\/search\?q=([^&]+)/;

chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const urlSegments = tabs[0].url.split('/');
    pageUrl = urlSegments.slice(0, 3).join('/');
    fullUrl = tabs[0].url;
});

function githubUserFilter(socialMediaMatches) {
    const results = new Set();
    socialMediaMatches.forEach(url => {
        if (url.includes("github.com")) {
            const githubUrl = new URL(url);
            const pathParts = githubUrl.pathname.split('/').filter(part => part);
            const githubUser = pathParts[0];
            const userUrl = `https://github.com/${githubUser}`;
            results.add(userUrl);
        } else {
            results.add(url);
        }
    });

    return results;
}

function githubResultsOnly(socialMediaMatches) {
    const results = new Set();
    socialMediaMatches.forEach(url => {
        if (url.includes("github.com")) {
            const githubUrl = new URL(url);
            results.add(githubUrl)
        }
    });
    return results;
}


function findMatches(content, regex) {
    if (!content) {
        return new Set();
    }
    // Clean phone numbers before setting to avoid duplicates like tel:123456789, 123456789, with and without spaces, etc.
    const matches = Array.from(content.matchAll(regex)).map(match => match[0].replace(/[<>"'\r\n]| |%20|tel:|tell:|phone:|telephone:|telefon:|tel": "|tell": "|phone": "|telephone": "|telefon": "|tel":"|tell":"|phone":"|telephone":"|telefon":s"|Tel:|Tell:|Phone:|Telephone:|Telefon:|Tel": "|Tell": "|Phone": "|Telephone": "|Telefon:|Tel":"|Tell":"|Phone":"|Telephone":"|Telefon":"| TEL:|TELL:|PHONE:|TELEPHONE:|TELEFON:|TEL": "|TELL": "|PHONE": "|TELEPHONE": "|TELEFON": "|TEL":"|TELL":"|PHONE":"|TELEPHONE":"|TELEFON":"/g, ''));
    const filteredMatches = matches.filter(number => !/^[01]+$/.test(number)); // clean phone numbers only composed of 1 and 0
    return new Set(filteredMatches);
}

const tldToCountry = [
    { tld: '.fr', code: '+33', country: 'France' },
    { tld: '.paris', code: '+33', country: 'France' },
    { tld: '.us', code: '+1', country: 'États-Unis' },
    { tld: '.de', code: '+49', country: 'Allemagne' },
    { tld: '.uk', code: '+44', country: 'Royaume-Uni' },
    { tld: '.co.uk', code: '+44', country: 'Royaume-Uni' },
    { tld: '.ca', code: '+1', country: 'Canada' },
    { tld: '.es', code: '+34', country: 'Espagne' },
    { tld: '.it', code: '+39', country: 'Italie' },
    { tld: '.jp', code: '+81', country: 'Japon' },
    { tld: '.cn', code: '+86', country: 'Chine' },
    { tld: '.au', code: '+61', country: 'Australie' },
    { tld: '.br', code: '+55', country: 'Brésil' },
    { tld: '.in', code: '+91', country: 'Inde' },
    { tld: '.ru', code: '+7', country: 'Russie' },
    { tld: '.mx', code: '+52', country: 'Mexique' },
    { tld: '.nl', code: '+31', country: 'Pays-Bas' },
    { tld: '.se', code: '+46', country: 'Suède' },
    { tld: '.no', code: '+47', country: 'Norvège' },
    { tld: '.fi', code: '+358', country: 'Finlande' },
    { tld: '.dk', code: '+45', country: 'Danemark' },
    { tld: '.pl', code: '+48', country: 'Pologne' },
    { tld: '.pt', code: '+351', country: 'Portugal' },
    { tld: '.ch', code: '+41', country: 'Suisse' },
    { tld: '.at', code: '+43', country: 'Autriche' },
    { tld: '.be', code: '+32', country: 'Belgique' },
    { tld: '.hk', code: '+852', country: 'Hong Kong' },
    { tld: '.sg', code: '+65', country: 'Singapour' },
    { tld: '.kr', code: '+82', country: 'Corée du Sud' },
    { tld: '.za', code: '+27', country: 'Afrique du Sud' },
    { tld: '.ae', code: '+971', country: 'Émirats Arabes Unis' },
    { tld: '.cl', code: '+56', country: 'Chili' },
    { tld: '.ar', code: '+54', country: 'Argentine' },
    { tld: '.co', code: '+57', country: 'Colombie' },
    { tld: '.my', code: '+60', country: 'Malaisie' },
    { tld: '.th', code: '+66', country: 'Thaïlande' },
    { tld: '.tw', code: '+886', country: 'Taïwan' },
    { tld: '.vn', code: '+84', country: 'Vietnam' },
    { tld: '.ng', code: '+234', country: 'Nigéria' },
    { tld: '.ke', code: '+254', country: 'Kenya' },
    { tld: '.ph', code: '+63', country: 'Philippines' },
    { tld: '.ie', code: '+353', country: 'Irlande' },
    { tld: '.is', code: '+354', country: 'Islande' },
    { tld: '.lt', code: '+370', country: 'Lituanie' },
    { tld: '.lv', code: '+371', country: 'Lettonie' },
    { tld: '.ee', code: '+372', country: 'Estonie' },
    { tld: '.si', code: '+386', country: 'Slovénie' },
    { tld: '.sk', code: '+421', country: 'Slovaquie' },
    { tld: '.hr', code: '+385', country: 'Croatie' },
    { tld: '.bg', code: '+359', country: 'Bulgarie' },
    { tld: '.ro', code: '+40', country: 'Roumanie' },
    { tld: '.by', code: '+375', country: 'Biélorussie' },
    { tld: '.ua', code: '+380', country: 'Ukraine' },
    { tld: '.rs', code: '+381', country: 'Serbie' },
    { tld: '.ba', code: '+387', country: 'Bosnie-Herzégovine' },
    { tld: '.mk', code: '+389', country: 'Macédoine du Nord' },
    { tld: '.mt', code: '+356', country: 'Malte' },
    { tld: '.lu', code: '+352', country: 'Luxembourg' },
    { tld: '.cy', code: '+357', country: 'Chypre' },
    { tld: '.gl', code: '+299', country: 'Groenland' },
    { tld: '.fo', code: '+298', country: 'Îles Féroé' },
    { tld: '.as', code: '+1-684', country: 'Samoa américaines' },
    { tld: '.gu', code: '+1-671', country: 'Guam' },
    { tld: '.mp', code: '+1-670', country: 'Îles Mariannes du Nord' },
    { tld: '.pr', code: '+1-787', country: 'Porto Rico' },
    { tld: '.vi', code: '+1-340', country: 'Îles Vierges américaines' },
    { tld: '.gr', code: '+30', country: 'Grèce' },
    { tld: '.tr', code: '+90', country: 'Turquie' },
    { tld: '.il', code: '+972', country: 'Israël' },
    { tld: '.nz', code: '+64', country: 'Nouvelle-Zélande' },
    { tld: '.pe', code: '+51', country: 'Pérou' },
    { tld: '.ve', code: '+58', country: 'Venezuela' },
    { tld: '.ec', code: '+593', country: 'Équateur' },
    { tld: '.bo', code: '+591', country: 'Bolivie' },
    { tld: '.py', code: '+595', country: 'Paraguay' },
    { tld: '.uy', code: '+598', country: 'Uruguay' },
    { tld: '.cu', code: '+53', country: 'Cuba' },
    { tld: '.cr', code: '+506', country: 'Costa Rica' },
    { tld: '.pa', code: '+507', country: 'Panama' },
    { tld: '.ni', code: '+505', country: 'Nicaragua' },
    { tld: '.hn', code: '+504', country: 'Honduras' },
    { tld: '.gt', code: '+502', country: 'Guatemala' },
    { tld: '.sv', code: '+503', country: 'El Salvador' },
    { tld: '.do', code: '+1-809', country: 'République Dominicaine' },
    { tld: '.ht', code: '+509', country: 'Haïti' },
    { tld: '.jm', code: '+1-876', country: 'Jamaïque' },
    { tld: '.tt', code: '+1-868', country: 'Trinité-et-Tobago' },
    { tld: '.bs', code: '+1-242', country: 'Bahamas' },
    { tld: '.bb', code: '+1-246', country: 'Barbade' },
    { tld: '.gd', code: '+1-473', country: 'Grenade' },
    { tld: '.vc', code: '+1-784', country: 'Saint-Vincent-et-les-Grenadines' },
    { tld: '.lc', code: '+1-758', country: 'Sainte-Lucie' },
    { tld: '.dm', code: '+1-767', country: 'Dominique' },
    { tld: '.ag', code: '+1-268', country: 'Antigua-et-Barbuda' },
    { tld: '.kn', code: '+1-869', country: 'Saint-Christophe-et-Niévès' },
    { tld: '.bz', code: '+501', country: 'Belize' },
    { tld: '.gy', code: '+592', country: 'Guyana' },
    { tld: '.sr', code: '+597', country: 'Suriname' },
    { tld: '.ma', code: '+212', country: 'Maroc' },
    { tld: '.dz', code: '+213', country: 'Algérie' },
    { tld: '.tn', code: '+216', country: 'Tunisie' },
    { tld: '.eg', code: '+20', country: 'Égypte' },
    { tld: '.ly', code: '+218', country: 'Libye' },
    { tld: '.sd', code: '+249', country: 'Soudan' },
    { tld: '.et', code: '+251', country: 'Éthiopie' },
    { tld: '.kw', code: '+965', country: 'Koweït' },
    { tld: '.qa', code: '+974', country: 'Qatar' },
    { tld: '.bh', code: '+973', country: 'Bahreïn' },
    { tld: '.om', code: '+968', country: 'Oman' },
    { tld: '.ye', code: '+967', country: 'Yémen' },
    { tld: '.iq', code: '+964', country: 'Irak' },
    { tld: '.sy', code: '+963', country: 'Syrie' },
    { tld: '.jo', code: '+962', country: 'Jordanie' },
    { tld: '.lb', code: '+961', country: 'Liban' },
    { tld: '.sa', code: '+966', country: 'Arabie Saoudite' },
    { tld: '.ir', code: '+98', country: 'Iran' },
    { tld: '.pk', code: '+92', country: 'Pakistan' },
    { tld: '.bd', code: '+880', country: 'Bangladesh' },
    { tld: '.lk', code: '+94', country: 'Sri Lanka' },
    { tld: '.np', code: '+977', country: 'Népal' },
    { tld: '.bt', code: '+975', country: 'Bhoutan' },
    { tld: '.mm', code: '+95', country: 'Myanmar' },
    { tld: '.kh', code: '+855', country: 'Cambodge' },
    { tld: '.la', code: '+856', country: 'Laos' },
    { tld: '.mn', code: '+976', country: 'Mongolie' },
    { tld: '.kz', code: '+7', country: 'Kazakhstan' },
    { tld: '.uz', code: '+998', country: 'Ouzbékistan' },
    { tld: '.kg', code: '+996', country: 'Kirghizistan' },
    { tld: '.tj', code: '+992', country: 'Tadjikistan' },
    { tld: '.tm', code: '+993', country: 'Turkménistan' },
    { tld: '.az', code: '+994', country: 'Azerbaïdjan' },
    { tld: '.ge', code: '+995', country: 'Géorgie' },
    { tld: '.am', code: '+374', country: 'Arménie' },
    { tld: '.md', code: '+373', country: 'Moldavie' },
    { tld: '.al', code: '+355', country: 'Albanie' },
    { tld: '.me', code: '+382', country: 'Monténégro' },
    { tld: '.xk', code: '+383', country: 'Kosovo' },
    { tld: '.ad', code: '+376', country: 'Andorre' },
    { tld: '.mc', code: '+377', country: 'Monaco' },
    { tld: '.sm', code: '+378', country: 'Saint-Marin' },
    { tld: '.va', code: '+379', country: 'Vatican' },
    { tld: '.li', code: '+423', country: 'Liechtenstein' },
    { tld: '.mh', code: '+692', country: 'Îles Marshall' },
    { tld: '.fm', code: '+691', country: 'Micronésie' },
    { tld: '.pw', code: '+680', country: 'Palau' },
    { tld: '.nr', code: '+674', country: 'Nauru' },
    { tld: '.ki', code: '+686', country: 'Kiribati' },
    { tld: '.tv', code: '+688', country: 'Tuvalu' },
    { tld: '.ws', code: '+685', country: 'Samoa' },
    { tld: '.to', code: '+676', country: 'Tonga' },
    { tld: '.vu', code: '+678', country: 'Vanuatu' },
    { tld: '.sb', code: '+677', country: 'Îles Salomon' },
    { tld: '.pg', code: '+675', country: 'Papouasie-Nouvelle-Guinée' },
    { tld: '.fj', code: '+679', country: 'Fidji' },
    { tld: '.ck', code: '+682', country: 'Îles Cook' },
    { tld: '.nu', code: '+683', country: 'Niue' },
    { tld: '.tk', code: '+690', country: 'Tokelau' },
    { tld: '.wf', code: '+681', country: 'Wallis-et-Futuna' },
    { tld: '.nc', code: '+687', country: 'Nouvelle-Calédonie' },
    { tld: '.pf', code: '+689', country: 'Polynésie française' }
]


function parseDomain(cleanURL) {
    let tlds = ['.ba','.dabur','.kaufen','.ua','.in','.com','.net','.2000.hu','.FedEx','.Sony','.aaa','.aaa.pro','.aarp','.abarth','.abb','.abbott','.abbvie','.abc','.abc.br','.abkhazia.su','.able','.abo.pa','.abogado','.abr.it','.abruzzo.it','.abudhabi','.ac','.ac.ae','.ac.bd','.ac.bw','.ac.ci','.ac.cn','.ac.cy','.ac.im','.ac.ke','.ac.ma','.ac.mu','.ac.mw','.ac.ni','.ac.nz','.ac.rw','.ac.th','.ac.tj','.ac.tz','.ac.ug','.ac.uk','.ac.vn','.aca.pro','.academy','.accenture','.accountant','.accountants','.acct.pro','.aco','.active','.actor','.ad','.adac','.adm.br','.ads','.adult','.adult.ht','.adv.br','.adygeya.ru','.adygeya.su','.ae','.ae.com','.ae.org','.ae.si','.aeg','.aero','.aero.np','.aero.tj','.aeroport.fr','.aetna','.af','.afamilycompany','.afl','.africa','.africa.com','.ag','.ag.it','.agakhan','.agency','.agr.br','.agrar.hu','.agrigento.it','.agrinet.tn','.agro.pl','.ah.cn','.ai','.aid.pl','.aig','.aigo','.airbus','.airforce','.airport.aero','.airtel','.akdn','.akita.jp','.aktyubinsk.su','.al','.al.it','.alessandria.it','.alfaromeo','.alibaba','.alipay','.allfinanz','.allstate','.ally','.alsace','.alstom','.alt.na','.alto-adige.it','.altoadige.it','.am','.am.br','.amazon','.americanexpress','.americanfamily','.amex','.amfam','.amica','.amsterdam','.an','.an.it','.analytics','.ancona.it','.andria-barletta-trani.it','.andria-trani-barletta.it','.andriabarlettatrani.it','.andriatranibarletta.it','.android','.anquan','.anz','.ao','.ao.it','.aol','.aosta.it','.aoste.it','.ap.it','.aparecida.br','.apartments','.app','.apple','.aq','.aq.it','.aquarelle','.aquila.it','.ar','.ar.com','.ar.it','.arab','.aramco','.arc.pro','.archi','.arezzo.it','.arkhangelsk.su','.armenia.su','.army','.arpa','.arq.br','.art','.art.br','.art.do','.art.ht','.art.sn','.arte','.arts.nf','.arts.ro','.as','.ascoli-piceno.it','.ascolipiceno.it','.asda','.ashgabad.su','.asia','.asia.np','.asn.au','.asn.lv','.asso.fr','.asso.ht','.asso.mc','.asso.nc','.asso.pf','.associates','.asti.it','.at','.at.it','.at.pr','.at.si','.athleta','.atm.pl','.ato.br','.attorney','.au','.auction','.audi','.audible','.audio','.augustow.pl','.auspost','.author','.auto','.auto.pl','.autos','.auz.biz','.auz.info','.auz.net','.av.it','.av.tr','.avellino.it','.avianca','.avocat.fr','.avocat.pro','.aw','.aws','.ax','.axa','.az','.azerbaijan.su','.azure','.ba','.ba.it','.babia-gora.pl','.baby','.baidu','.balashov.su','.balsan.it','.banamex','.bananarepublic','.band','.bank','.bar','.bar.pro','.barcelona','.barclaycard','.barclays','.barefoot','.bargains','.bari.it','.barking-dagenham.sch.uk','.barletta-trani-andria.it','.barlettatraniandria.it','.barnet.sch.uk','.barnsley.sch.uk','.bas.it','.baseball','.bashkiria.ru','.bashkiria.su','.basilicata.it','.basketball','.bathnes.sch.uk','.bauhaus','.bayern','.bb','.bbc','.bbs.tr','.bbt','.bbva','.bcg','.bcn','.bd','.be','.beats','.beauty','.beds.sch.uk','.bedzin.pl','.beer','.belem.br','.belluno.it','.benevento.it','.bentley','.bergamo.it','.berlin','.beskidy.pl','.best','.bestbuy','.bet','.bexley.sch.uk','.bf','.bg','.bg.it','.bh','.bham.sch.uk','.bharti','.bhz.br','.bi','.bi.it','.bialowieza.pl','.bialystok.pl','.bible','.bid','.bielawa.pl','.biella.it','.bieszczady.pl','.bike','.bing','.bingo','.bio','.bio.br','.bir.ru','.biz','.biz.az','.biz.ck','.biz.cy','.biz.dk','.biz.et','.biz.fj','.biz.id','.biz.ki','.biz.mm','.biz.ni','.biz.np','.biz.nr','.biz.om','.biz.pk','.biz.pl','.biz.pr','.biz.ss','.biz.tj','.biz.tr','.biz.tt','.biz.ua','.biz.uz','.biz.vn','.bj','.bj.cn','.bl','.bl.it','.black','.blackburn.sch.uk','.blackfriday','.blackpool.sch.uk','.blanco','.blockbuster','.blog','.blog.br','.bloomberg','.blue','.bm','.bmd.br','.bms','.bmw','.bn','.bn.it','.bnl','.bnpparibas','.bo','.bo.it','.boats','.boavista.br','.boehringer','.bofa','.boleslawiec.pl','.bologna.it','.bolt.hu','.bolton.sch.uk','.bolzano.it','.bom','.bond','.boo','.book','.booking','.boots','.bosch','.bostik','.boston','.bot','.bournemouth.sch.uk','.boutique','.box','.bozen.it','.bq','.br','.br.com','.br.it','.bracknell-forest.sch.uk','.bradesco','.bradford.sch.uk','.brent.sch.uk','.brescia.it','.bridgestone','.brindisi.it','.broadway','.broker','.brother','.brussels','.bryansk.su','.bs','.bs.it','.bsb.br','.bt','.bt.it','.budapest','.bugatti','.build','.builders','.bukhara.su','.bus.pro','.business','.buy','.buzz','.bv','.bw','.by','.bydgoszcz.pl','.bytom.pl','.bz','.bz.it','.bzh','.ca','.ca.it','.cab','.cafe','.cagliari.it','.cal','.cal.it','.calabria.it','.call','.caltanissetta.it','.calvinklein','.cam','.cam.it','.camera','.camp','.campania.it','.campidano-medio.it','.campidanomedio.it','.campinas.br','.campobasso.it','.cancerresearch','.canon','.capetown','.capital','.capitalone','.car','.caravan','.carbonia-iglesias.it','.carboniaiglesias.it','.cards','.care','.career','.careers','.cargo.aero','.carrara-massa.it','.carraramassa.it','.cars','.cartier','.casa','.case','.caseih','.caserta.it','.cash','.casino','.casino.hu','.cat','.catania.it','.catanzaro.it','.catering','.catholic','.caxias.br','.cb.it','.cba','.cbg.ru','.cbn','.cbre','.cbs','.cc','.cd','.ce.it','.ceb','.center','.ceo','.cern','.cesena-forli.it','.cesenaforli.it','.cf','.cfa','.cfd','.cg','.ch','.ch.it','.ch.pr','.chambagri.fr','.chanel','.channel','.charity','.charter.aero','.chase','.chat','.cheap','.cherkassy.ua','.cherkasy.ua','.chernigov.ua','.chernivtsi.ua','.chernovtsy.ua','.chi.pro','.chieti.it','.chimkent.su','.chintai','.chiro.pro','.chirurgiens-dentistes.fr','.chloe','.christmas','.chrome','.chrysler','.church','.ci','.ci.it','.cieszyn.pl','.cim.br','.cipriani','.circle','.cisco','.citadel','.citi','.citic','.city','.city.hu','.cityeats','.ck','.ck.ua','.cl','.cl.it','.claims','.cleaning','.click','.clinic','.clinique','.clothing','.cloud','.club','.club.tw','.clubmed','.cm','.cn','.cn.com','.cn.it','.cn.si','.cn.ua','.cng.br','.cnt.br','.co','.co.ae','.co.ag','.co.am','.co.ao','.co.at','.co.az','.co.ba','.co.bb','.co.bi','.co.bw','.co.bz','.co.ci','.co.ck','.co.cm','.co.com','.co.cr','.co.cz','.co.de','.co.dk','.co.dm','.co.ee','.co.fk','.co.gg','.co.gl','.co.gy','.co.hu','.co.id','.co.il','.co.im','.co.in','.co.ir','.co.it','.co.je','.co.jp','.co.ke','.co.kr','.co.lc','.co.ls','.co.ma','.co.mg','.co.ms','.co.mu','.co.mw','.co.mz','.co.na','.co.net.nz','.co.ni','.co.nl','.co.no','.co.nu','.co.nz','.co.om','.co.pn','.co.pt','.co.ro','.co.rs','.co.rw','.co.si','.co.sz','.co.th','.co.tj','.co.tt','.co.tz','.co.ua','.co.ug','.co.uk','.co.uz','.co.ve','.co.vi','.co.za','.co.zm','.co.zw','.coach','.codes','.coffee','.college','.cologne','.com','.com.af','.com.ag','.com.ai','.com.al','.com.am','.com.ar','.com.au','.com.az','.com.bb','.com.bd','.com.bh','.com.bi','.com.bj','.com.bm','.com.bn','.com.bo','.com.br','.com.bs','.com.bt','.com.by','.com.bz','.com.cd','.com.ci','.com.cm','.com.cn','.com.co','.com.cu','.com.cv','.com.cw','.com.cy','.com.de','.com.dm','.com.do','.com.dz','.com.ec','.com.ee','.com.eg','.com.es','.com.et','.com.fj','.com.fr','.com.ge','.com.gh','.com.gi','.com.gl','.com.gn','.com.gp','.com.gr','.com.gt','.com.gu','.com.gy','.com.hk','.com.hn','.com.hr','.com.ht','.com.im','.com.iq','.com.jm','.com.jo','.com.kg','.com.kh','.com.ki','.com.km','.com.kn','.com.kw','.com.ky','.com.kz','.com.lb','.com.lc','.com.lk','.com.lr','.com.lv','.com.ly','.com.mg','.com.mk','.com.mm','.com.mo','.com.ms','.com.mt','.com.mu','.com.mv','.com.mw','.com.mx','.com.my','.com.na','.com.ne','.com.nf','.com.ng','.com.ni','.com.nl','.com.np','.com.nr','.com.om','.com.pa','.com.pe','.com.pf','.com.pg','.com.ph','.com.pk','.com.pl','.com.pr','.com.ps','.com.pt','.com.py','.com.qa','.com.re','.com.ro','.com.ru','.com.sa','.com.sb','.com.sc','.com.sd','.com.se','.com.sg','.com.sl','.com.sn','.com.so','.com.ss','.com.sv','.com.sy','.com.tc','.com.td','.com.tj','.com.tl','.com.tn','.com.tr','.com.tt','.com.tw','.com.ua','.com.ug','.com.uy','.com.uz','.com.vc','.com.ve','.com.vi','.com.vn','.com.vu','.com.ws','.com.ye','.com.zm','.comcast','.commbank','.community','.como.it','.company','.compare','.computer','.comsec','.condos','.conf.lv','.construction','.consulting','.contact','.contractors','.cooking','.cookingchannel','.cool','.coop','.coop.br','.coop.mw','.coop.np','.coop.py','.coop.tj','.corsica','.cosenza.it','.country','.coupon','.coupons','.courses','.cpa','.cpa.pro','.cq.cn','.cr','.cr.it','.credit','.creditcard','.creditunion','.cremona.it','.cricket','.crimea.ua','.crotone.it','.crown','.crs','.cruise','.cruises','.cs.it','.csc','.ct.it','.cu','.cuisinella','.cuneo.it','.curitiba.br','.cv','.cv.ua','.cw','.cx','.cy','.cymru','.cyou','.cz','.cz.it','.czeladz.pl','.czest.pl','.dabur','.dad','.dagestan.ru','.dagestan.su','.dance','.data','.date','.dating','.datsun','.day','.dclk','.dds','.de','.de.com','.de.pr','.de.si','.deal','.dealer','.deals','.defense.tn','.degree','.delivery','.dell','.dell-ogliastra.it','.dellogliastra.it','.deloitte','.delta','.democrat','.den.pro','.dent.pro','.dental','.dentist','.desi','.design','.dev','.dhl','.diamonds','.diet','.digital','.direct','.directory','.discount','.discover','.dish','.diy','.dj','.dk','.dlugoleka.pl','.dm','.dn.ua','.dnepropetrovsk.ua','.dnipropetrovsk.ua','.dnp','.do','.docs','.doctor','.dodge','.dog','.doha','.domains','.doncaster.sch.uk','.donetsk.ua','.doosan','.dot','.download','.dp.ua','.dr.tr','.drive','.dtv','.dubai','.duck','.dunlop','.duns','.dupont','.durban','.dvag','.dvr','.dyn.tj','.dz','.earth','.east-kazakhstan.su','.eat','.ebiz.tw','.ec','.ecn.br','.eco','.eco.br','.ed.ci','.ed.cr','.edeka','.edu','.edu.af','.edu.az','.edu.bi','.edu.bj','.edu.ci','.edu.ck','.edu.eg','.edu.es','.edu.ge','.edu.gh','.edu.gl','.edu.gr','.edu.hk','.edu.hn','.edu.ht','.edu.kh','.edu.ki','.edu.kw','.edu.lb','.edu.lk','.edu.lv','.edu.mk','.edu.mr','.edu.mw','.edu.mz','.edu.na','.edu.ng','.edu.ni','.edu.pa','.edu.pl','.edu.py','.edu.qa','.edu.rs','.edu.sa','.edu.sg','.edu.sl','.edu.sn','.edu.sv','.edu.ua','.edu.uy','.edu.vn','.education','.edunet.tn','.ee','.eg','.eh','.ekloges.cy','.elblag.pl','.elk.pl','.email','.emerck','.emilia-romagna.it','.emiliaromagna.it','.emp.br','.emr.it','.en.it','.energy','.eng.br','.eng.pro','.engineer','.engineering','.enna.it','.ens.tn','.enterprises','.epost','.epson','.equipment','.er','.ericsson','.erni','.erotica.hu','.erotika.hu','.es','.esp.br','.esq','.estate','.esurance','.et','.etc.br','.eti.br','.etisalat','.eu','.eu.com','.eu.pr','.eun.eg','.eurovision','.eus','.events','.everbank','.example','.exchange','.exnet.su','.expert','.experts-comptables.fr','.exposed','.express','.extraspace','.fage','.fail','.fairwinds','.faith','.family','.fan','.fans','.far.br','.farm','.farmers','.fashion','.fast','.fc.it','.fe.it','.fedex','.feedback','.fermo.it','.ferrara.it','.ferrari','.ferrero','.fg.it','.fhs.no','.fi','.fi.cr','.fi.it','.fiat','.fidelity','.fido','.fie.ee','.film','.film.hu','.fin.ec','.fin.tn','.final','.finance','.financial','.fire','.firenze.it','.firestone','.firm.ht','.firm.in','.firm.nf','.firm.ro','.firmdale','.fish','.fishing','.fit','.fitness','.fj','.fj.cn','.fk','.flickr','.flights','.flir','.flog.br','.florence.it','.floripa.br','.florist','.flowers','.flsmidth','.fly','.fm','.fm.br','.fm.it','.fnd.br','.fo','.foggia.it','.folkebibl.no','.foo','.food','.foodnetwork','.football','.ford','.forex','.forli-cesena.it','.forlicesena.it','.forsale','.fortal.br','.forum','.forum.hu','.fot.br','.foundation','.fox','.foz.br','.fr','.fr.it','.fr.pr','.free','.fresenius','.friuli-v-giulia.it','.friuli-ve-giulia.it','.friuli-vegiulia.it','.friuli-venezia-giulia.it','.friuli-veneziagiulia.it','.friuli-vgiulia.it','.friuliv-giulia.it','.friulive-giulia.it','.friulivegiulia.it','.friulivenezia-giulia.it','.friuliveneziagiulia.it','.friulivgiulia.it','.frl','.frogans','.frontdoor','.frontier','.frosinone.it','.fst.br','.ftr','.fujitsu','.fujixerox','.fun','.fund','.furniture','.futbol','.fvg.it','.fyi','.fylkesbibl.no','.g12.br','.ga','.gal','.gallery','.gallo','.gallup','.game','.game.tw','.games','.games.hu','.gap','.garden','.gay','.gb','.gb.com','.gb.net','.gbiz','.gd','.gd.cn','.gdn','.ge','.ge.it','.gea','.geek.nz','.gen.ck','.gen.in','.gen.nz','.gen.tr','.genoa.it','.genova.it','.gent','.genting','.geometre-expert.fr','.george','.georgia.su','.gf','.gg','.ggee','.ggf.br','.gh','.gi','.gift','.gifts','.gives','.giving','.gl','.glade','.glass','.gle','.global','.globo','.glogow.pl','.glue','.gm','.gmail','.gmbh','.gmina.pl','.gmo','.gmx','.gn','.gniezno.pl','.go.ci','.go.cr','.go.it','.go.ke','.go.kr','.go.tj','.go.ug','.gob.es','.gob.ni','.gob.pa','.gob.pe','.gob.sv','.godaddy','.gold','.goldpoint','.golf','.goo','.goodhands','.goodyear','.goog','.google','.gop','.gorizia.it','.gorlice.pl','.got','.gouv.fr','.gov','.gov.af','.gov.az','.gov.ck','.gov.eg','.gov.ge','.gov.gi','.gov.gn','.gov.hk','.gov.ki','.gov.ng','.gov.ua','.gov.uk','.gp','.gq','.gr','.gr.com','.gr.it','.gr.jp','.grainger','.grajewo.pl','.graphics','.gratis','.green','.gripe','.grocery','.grosseto.it','.group','.grozny.ru','.grozny.su','.grp.lk','.gru.br','.gs','.gs.cn','.gs.no','.gsm.pl','.gt','.gu','.guardian','.gucci','.guge','.guide','.guitars','.guru','.gw','.gx.cn','.gy','.gz.cn','.ha.cn','.hair','.hamburg','.hangout','.haus','.hb.cn','.hbo','.hdfc','.hdfcbank','.he.cn','.health','.health.vn','.healthcare','.help','.helsinki','.here','.hermes','.hgtv','.hi.cn','.hiphop','.hisamitsu','.hitachi','.hiv','.hk','.hk.cn','.hk.com','.hk.org','.hkt','.hl.cn','.hm','.hn','.hn.cn','.hockey','.holdings','.holiday','.homedepot','.homegoods','.homes','.homesense','.honda','.honeywell','.horse','.hospital','.host','.hosting','.hot','.hotel.hu','.hotel.lk','.hotel.tz','.hoteles','.hotels','.hotmail','.house','.how','.hr','.hsbc','.ht','.htc','.hu','.hu.com','.hu.net','.hughes','.hyatt','.hyundai','.i.ng','.i2p','.ibm','.icbc','.ice','.icu','.id','.id.au','.id.lv','.id.ly','.idrett.no','.idv.hk','.idv.tw','.ie','.ieee','.if.ua','.ifm','.iglesias-carbonia.it','.iglesiascarbonia.it','.iinet','.ikano','.il','.ilawa.pl','.im','.im.it','.imamat','.imb.br','.imdb','.immo','.immobilien','.imperia.it','.in','.in.ci','.in.net','.in.ni','.in.rs','.in.th','.in.ua','.inc','.inc.hk','.ind.br','.ind.gt','.ind.in','.ind.tn','.industries','.inf.br','.inf.mk','.infiniti','.info','.info.au','.info.az','.info.bi','.info.ck','.info.ec','.info.eg','.info.et','.info.fj','.info.ht','.info.hu','.info.ke','.info.ki','.info.ne','.info.nf','.info.ni','.info.np','.info.nr','.info.pl','.info.pr','.info.ro','.info.sd','.info.tj','.info.tn','.info.tr','.info.tt','.info.tz','.info.ve','.info.vn','.ing','.ing.pa','.ingatlan.hu','.ink','.institute','.institute[71]','.insurance','.insure','.int','.int.ar','.int.az','.int.ci','.int.cv','.int.mw','.int.ne','.int.ni','.int.tj','.int.vn','.intel','.international','.intl.tn','.intuit','.invalid','.investments','.io','.ipiranga','.iq','.ir','.irish','.is','.is.it','.iselect','.isernia.it','.isla.pr','.ismaili','.ist','.istanbul','.it','.it.ao','.it.pr','.itau','.itv','.ivano-frankivsk.ua','.ivanovo.su','.iveco','.iwc','.iwi.nz','.jaguar','.jambyl.su','.jampa.br','.java','.jaworzno.pl','.jcb','.jcp','.je','.jeep','.jelenia-gora.pl','.jetzt','.jewelry','.jgora.pl','.jio','.jl.cn','.jlc','.jll','.jm','.jmp','.jnj','.jo','.jobs','.jobs.tt','.joburg','.jogasz.hu','.jor.br','.jot','.joy','.jp','.jp.net','.jpmorgan','.jpn.com','.jprs','.js.cn','.juegos','.juniper','.jur.pro','.jx.cn','.kalisz.pl','.kalmykia.ru','.kalmykia.su','.kaluga.su','.karacol.su','.karaganda.su','.karelia.su','.karpacz.pl','.kartuzy.pl','.kaszuby.pl','.katowice.pl','.kaufen','.kazimierz-dolny.pl','.kddi','.ke','.kepno.pl','.kerryhotels','.kerrylogistics','.kerryproperties','.ketrzyn.pl','.kfh','.kg','.kh','.kh.ua','.khakassia.su','.kharkiv.ua','.kharkov.ua','.kherson.ua','.khmelnitskiy.ua','.ki','.kia','.kiev.ua','.kim','.kinder','.kindle','.kirovograd.ua','.kitchen','.kiwi','.kiwi.nz','.klodzko.pl','.km','.km.ua','.kn','.kobierzyce.pl','.koeln','.kolobrzeg.pl','.komatsu','.konin.pl','.konskowola.pl','.konyvelo.hu','.kosher','.kp','.kpmg','.kpn','.kr','.kr.com','.kr.it','.kr.ua','.krasnodar.su','.krd','.kred','.ks.ua','.kuokgroup','.kurgan.su','.kustanai.ru','.kustanai.su','.kutno.pl','.kw','.ky','.kyiv.ua','.kyoto','.kyoto.jp','.kz','.l.lc','.la','.la-spezia.it','.lacaixa','.ladbrokes','.lakas.hu','.lamborghini','.lamer','.lancaster','.lancia','.lancome','.land','.landrover','.lanxess','.lapy.pl','.laquila.it','.lasalle','.laspezia.it','.lat','.latina.it','.latino','.latrobe','.law','.law.pro','.lawyer','.laz.it','.lazio.it','.lb','.lc','.lc.it','.lds','.le.it','.lease','.lebork.pl','.lecce.it','.lecco.it','.leclerc','.lefrak','.legal','.legnica.pl','.lego','.lel.br','.lenug.su','.lexus','.lezajsk.pl','.lg.gov.ng','.lg.ua','.lgbt','.li','.li.it','.liaison','.lidl','.life','.lifeinsurance','.lifestyle','.lig.it','.lighting','.liguria.it','.like','.lilly','.limanowa.pl','.limited','.limo','.lincoln','.linde','.link','.lipsy','.live','.living','.livorno.it','.lixil','.lk','.llc','.llp','.ln.cn','.lo.it','.loan','.loans','.local','.localhost','.locker','.locus','.lodi.it','.loft','.lol','.lom.it','.lombardia.it','.lombardy.it','.lomza.pl','.london','.lotte','.lotto','.love','.lowicz.pl','.lpl','.lplfinancial','.lr','.ls','.lt','.lt.it','.lt.ua','.ltd','.ltd.co.im','.ltd.cy','.ltd.gi','.ltd.hk','.ltd.lk','.ltd.uk','.ltda','.lu','.lu.it','.lubin.pl','.lucania.it','.lucca.it','.lugansk.ua','.lukow.pl','.lundbeck','.lupin','.lutsk.ua','.luxe','.luxury','.lv','.lviv.ua','.ly','.ma','.macapa.br','.maceio.br','.macerata.it','.macys','.madrid','.maif','.mail.pl','.maison','.makeup','.malbork.pl','.malopolska.pl','.man','.management','.manaus.br','.mango','.mangyshlak.su','.mantova.it','.maori.nz','.map','.mar.it','.marche.it','.marine.ru','.market','.marketing','.markets','.marriott','.marshalls','.maserati','.massa-carrara.it','.massacarrara.it','.mat.br','.matera.it','.mattel','.mazowsze.pl','.mazury.pl','.mb.it','.mba','.mc','.mc.it','.mcd','.mcdonalds','.mckinsey','.md','.me','.me.it','.me.ke','.me.ss','.me.tz','.me.uk','.med','.med.br','.med.ec','.med.ee','.med.ly','.med.om','.med.pa','.med.pro','.med.sa','.medecin.fr','.media','.media.hu','.media.pl','.medio-campidano.it','.mediocampidano.it','.meet','.melbourne','.meme','.memorial','.men','.menu','.meo','.merckmsd','.messina.it','.metlife','.mex.com','.mf','.mg','.mh','.mi.it','.miami','.miasta.pl','.microsoft','.mielec.pl','.mielno.pl','.mil','.mil.az','.mil.br','.mil.ge','.mil.lv','.mil.mg','.mil.my','.mil.ni','.mil.np','.mil.om','.mil.pe','.mil.pl','.mil.py','.mil.qa','.mil.tj','.mil.tz','.milan.it','.milano.it','.min.pro','.mini','.minsk.by','.mint','.mit','.mitsubishi','.mk','.mk.ua','.ml','.mlb','.mls','.mm','.mma','.mn','.mn.it','.mo','.mo.bi','.mo.cn','.mo.it','.mobi','.mobi.gp','.mobi.ke','.mobi.ki','.mobi.ng','.mobi.np','.mobi.tt','.mobi.tz','.mobile','.mobily','.moda','.modena.it','.moe','.moi','.mol.it','.molise.it','.mom','.monash','.money','.monster','.montblanc','.monza-brianza.it','.monza-e-della-brianza.it','.monza.it','.monzabrianza.it','.monzaebrianza.it','.monzaedellabrianza.it','.mopar','.mordovia.ru','.mordovia.su','.mormon','.mortgage','.moscow','.moto','.motorcycles','.mov','.movie','.movistar','.mp','.mq','.mr','.mragowo.pl','.ms','.ms.it','.ms.kr','.msd','.msk.ru','.msk.su','.mt','.mt.it','.mtn','.mtpc','.mtr','.mu','.murmansk.su','.mus.br','.museum','.museum.no','.museum.np','.museum.om','.museum.tj','.mutual','.mutuelle','.mv','.mw','.mx','.my','.my.id','.my.tj','.mytis.ru','.mz','.na','.na.it','.nab','.nadex','.nagoya','.naklo.pl','.nalchik.ru','.nalchik.su','.name','.name.az','.name.cy','.name.eg','.name.et','.name.fj','.name.jo','.name.mk','.name.my','.name.ng','.name.np','.name.pr','.name.qa','.name.tj','.name.tr','.name.tt','.name.vn','.naples.it','.napoli.it','.nat.tn','.natal.br','.nationwide','.natura','.navoi.su','.navy','.nba','.nc','.ne','.ne.jp','.ne.ke','.ne.kr','.ne.ro','.ne.tz','.ne.ug','.nec','.net','.net.ae','.net.af','.net.ag','.net.ai','.net.al','.net.am','.net.ar','.net.au','.net.az','.net.bb','.net.bd','.net.bi','.net.bm','.net.bo','.net.br','.net.bs','.net.bw','.net.by','.net.bz','.net.cd','.net.ci','.net.ck','.net.cm','.net.cn','.net.co','.net.cv','.net.cw','.net.cy','.net.dm','.net.do','.net.ec','.net.eg','.net.et','.net.fj','.net.ge','.net.gg','.net.gl','.net.gn','.net.gp','.net.gr','.net.gt','.net.gy','.net.hk','.net.hn','.net.ht','.net.il','.net.im','.net.in','.net.je','.net.jm','.net.jo','.net.kg','.net.kh','.net.ki','.net.kw','.net.ky','.net.lb','.net.lc','.net.ls','.net.lv','.net.ly','.net.ma','.net.mg','.net.mk','.net.mm','.net.mo','.net.mt','.net.mu','.net.mw','.net.mx','.net.my','.net.mz','.net.na','.net.nf','.net.ng','.net.ni','.net.nl','.net.np','.net.nr','.net.nz','.net.om','.net.pa','.net.pe','.net.pg','.net.ph','.net.pk','.net.pl','.net.pn','.net.pr','.net.ps','.net.py','.net.qa','.net.ru','.net.rw','.net.sa','.net.sb','.net.sc','.net.sd','.net.sg','.net.sl','.net.so','.net.ss','.net.tc','.net.td','.net.tj','.net.tl','.net.tn','.net.tr','.net.tt','.net.tw','.net.ua','.net.uk','.net.uy','.net.uz','.net.vc','.net.ve','.net.vi','.net.vn','.net.vu','.net.ws','.net.ye','.net.za','.netbank','.netflix','.network','.neustar','.new','.newholland','.news','.news.hu','.next','.nextdirect','.nexus','.nf','.nfl','.ng','.ngo','.nhk','.ni','.nico','.nieruchomosci.pl','.nike','.nikolaev.ua','.nikon','.ninja','.nissan','.nissay','.nl','.nl.pr','.nm.cn','.no','.no.com','.no.it','.nokia','.nom.ag','.nom.br','.nom.ci','.nom.co','.nom.es','.nom.fr','.nom.km','.nom.mg','.nom.mu','.nom.nc','.nom.ni','.nom.pa','.nom.pe','.nom.pl','.nom.ro','.nome.cv','.north-kazakhstan.su','.north.am','.northwesternmutual','.norton','.not.br','.notaires.fr','.nov.ru','.nov.su','.novara.it','.now','.nowaruda.pl','.nowruz','.nowtv','.np','.nr','.nra','.nrw','.nt.ro','.ntr.br','.ntt','.nu','.nu.it','.nuoro.it','.nur.pro','.nurse.pro','.nv.com','.nx.cn','.nyc','.nysa.pl','.nz','.obi','.obninsk.su','.observer','.od.ua','.odesa.ua','.odessa.ua','.odo.br','.off','.off.ai','.office','.og.ao','.og.it','.ogliastra.it','.okinawa','.olawa.pl','.olayan','.olayangroup','.olbia-tempio.it','.olbiatempio.it','.oldnavy','.olecko.pl','.olkusz.pl','.ollo','.olsztyn.pl','.om','.omega','.one','.ong','.onion','.onl','.online','.onyourside','.ooo','.open','.opoczno.pl','.opole.pl','.or.at','.or.bi','.or.ci','.or.cr','.or.id','.or.it','.or.jp','.or.ke','.or.kr','.or.mu','.or.ro','.or.th','.or.tz','.or.ug','.oracle','.orange','.org','.org.ae','.org.af','.org.ag','.org.ai','.org.al','.org.am','.org.ar','.org.au','.org.az','.org.bb','.org.bd','.org.bi','.org.bm','.org.bo','.org.br','.org.bs','.org.bt','.org.bw','.org.bz','.org.cd','.org.ci','.org.ck','.org.cn','.org.cv','.org.cy','.org.dm','.org.do','.org.ec','.org.eg','.org.es','.org.et','.org.fj','.org.ge','.org.gg','.org.gh','.org.gi','.org.gl','.org.gn','.org.gp','.org.gr','.org.gt','.org.hk','.org.hn','.org.ht','.org.hu','.org.il','.org.im','.org.in','.org.je','.org.jm','.org.jo','.org.kg','.org.kh','.org.ki','.org.km','.org.kw','.org.ky','.org.kz','.org.lb','.org.lc','.org.lk','.org.lr','.org.ls','.org.lv','.org.ly','.org.ma','.org.mg','.org.mk','.org.mm','.org.mo','.org.mr','.org.ms','.org.mt','.org.mu','.org.mw','.org.mx','.org.my','.org.mz','.org.na','.org.ne','.org.nf','.org.ng','.org.ni','.org.np','.org.nr','.org.nz','.org.om','.org.pa','.org.pe','.org.pf','.org.pg','.org.ph','.org.pk','.org.pl','.org.pn','.org.pr','.org.ps','.org.pt','.org.py','.org.qa','.org.ro','.org.rs','.org.ru','.org.rw','.org.sa','.org.sb','.org.sc','.org.sg','.org.sl','.org.sn','.org.so','.org.sv','.org.sz','.org.tc','.org.td','.org.tj','.org.tl','.org.tn','.org.tr','.org.tt','.org.tw','.org.ua','.org.ug','.org.uk','.org.uy','.org.uz','.org.vc','.org.ve','.org.vi','.org.vn','.org.vu','.org.ws','.org.ye','.org.za','.org.zm','.organic','.orientexpress','.origins','.oristano.it','.osaka','.osaka.jp','.ostroda.pl','.ostroleka.pl','.ostrowiec.pl','.ostrowwlkp.pl','.ot.it','.other.nf','.otsuka','.ott','.ovh','.p.lc','.pa','.pa.it','.padova.it','.padua.it','.page','.palermo.it','.palmas.br','.pamperedchef','.panasonic','.panerai','.paris','.parliament.cy','.parma.it','.pars','.partners','.parts','.party','.passagens','.pavia.it','.pay','.pb.ao','.pc.it','.pc.pl','.pccw','.pd.it','.pe','.pe.it','.pe.kr','.penza.su','.per.mm','.per.nf','.per.sg','.per.tj','.perso.ht','.perso.mr','.perso.ne','.perso.sn','.perso.tn','.perugia.it','.pesaro-urbino.it','.pesarourbino.it','.pescara.it','.pet','.pf','.pfizer','.pg','.pg.it','.ph','.pharma.pro','.pharmacien.fr','.pharmacy','.phd','.philips','.phone','.phone.ki','.photo','.photography','.photos','.physio','.pi.it','.piacenza.it','.piaget','.pics','.pictet','.pictures','.pid','.piedmont.it','.piemonte.it','.pila.pl','.pin','.ping','.pink','.pioneer','.pisa.it','.pistoia.it','.pisz.pl','.pizza','.pk','.pl','.pl.ua','.place','.play','.playstation','.plc.co.im','.plc.ly','.plc.uk','.plumbing','.plus','.pm','.pmn.it','.pn','.pn.it','.pnc','.po.it','.poa.br','.podhale.pl','.podlasie.pl','.pohl','.poker','.pokrovsk.su','.pol.ht','.politie','.polkowice.pl','.poltava.ua','.pomorskie.pl','.pomorze.pl','.pordenone.it','.porn','.port.fr','.post','.potenza.it','.powiat.pl','.pp.az','.pp.ru','.pp.ua','.ppg.br','.pr','.pr.it','.pramerica','.prato.it','.praxi','.prd.fr','.prd.mg','.press','.press.cy','.press.ma','.presse.fr','.pri.ee','.prime','.priv.hu','.priv.no','.priv.pl','.pro','.pro.az','.pro.br','.pro.cy','.pro.ec','.pro.fj','.pro.ht','.pro.np','.pro.om','.pro.pr','.pro.tc','.pro.tj','.pro.tt','.pro.vn','.prochowice.pl','.prod','.productions','.prof','.prof.pro','.progressive','.promo','.properties','.property','.protection','.pru','.prudential','.pruszkow.pl','.prx.pro','.przeworsk.pl','.ps','.psc.br','.psi.br','.pt','.pt.it','.pty-ltd.com','.pu.it','.pub','.pub.sa','.publ.cv','.pug.it','.puglia.it','.pulawy.pl','.pv.it','.pvt.ge','.pw','.pwc','.py','.pyatigorsk.ru','.pz.it','.qa','.qc.com','.qh.cn','.qpon','.qsl.br','.quebec','.quest','.qvc','.ra.it','.racing','.radio','.radio.am','.radio.br','.radio.fm','.radom.pl','.ragusa.it','.raid','.ravenna.it','.rawa-maz.pl','.rc.it','.re','.re.it','.re.kr','.read','.realestate','.realestate.pl','.realtor','.realty','.rec.br','.rec.nf','.rec.ro','.recht.pro','.recife.br','.recipes','.red','.redstone','.redumbrella','.reggio-calabria.it','.reggio-emilia.it','.reggiocalabria.it','.reggioemilia.it','.rehab','.reise','.reisen','.reit','.reklam.hu','.rel.ht','.rel.pl','.rel.pro','.reliance','.ren','.rent','.rentals','.rep.br','.repair','.report','.republican','.rest','.restaurant','.review','.reviews','.rexroth','.rg.it','.ri.it','.rich','.richardli','.ricoh','.rieti.it','.rightathome','.ril','.rimini.it','.rio','.rio.br','.rip','.rivne.ua','.rm.it','.rmit','.rn.it','.rnrt.tn','.rns.tn','.rnu.tn','.ro','.ro.it','.rocher','.rocks','.rodeo','.rogers','.roma.it','.rome.it','.room','.rovigo.it','.rovno.ua','.rs','.rsvp','.ru','.ru.com','.ru.net','.rugby','.ruhr','.run','.rv.ua','.rw','.rwe','.rybnik.pl','.ryukyu','.rzeszow.pl','.sa','.sa.com','.sa.cr','.sa.it','.sa.ro','.saarland','.safe','.safety','.saga.jp','.sakura','.sale','.salerno.it','.salon','.salvador.br','.samsclub','.samsung','.sandvik','.sandvikcoromant','.sanofi','.sanok.pl','.sap','.sapo','.sar.it','.sardegna.it','.sardinia.it','.sarl','.sas','.sassari.it','.save','.savona.it','.saxo','.sb','.sbi','.sbs','.sc','.sc.cn','.sc.ke','.sc.tz','.sc.ug','.sca','.scb','.sch.ae','.sch.jo','.sch.ly','.sch.ng','.sch.om','.sch.qa','.sch.sa','.sch.uk','.schaeffler','.schmidt','.scholarships','.school','.school.nz','.schule','.schwarz','.science','.scjohnson','.scor','.scot','.sd','.sd.cn','.se','.se.com','.se.net','.search','.seat','.sebastopol.ua','.secure','.security','.seek','.sejny.pl','.select','.sener','.seoul.kr','.services','.ses','.seven','.sew','.sex','.sex.hu','.sex.pl','.sexy','.sfr','.sg','.sh','.sh.cn','.shangrila','.sharp','.shaw','.shell','.shia','.shiksha','.shoes','.shop','.shop.ht','.shop.hu','.shop.pl','.shopping','.shouji','.show','.showtime','.shriram','.si','.si.it','.sic.it','.sicilia.it','.sicily.it','.siena.it','.silk','.sina','.singles','.siracusa.it','.site','.sj','.sjc.br','.sk','.ski','.skin','.sklep.pl','.skoczow.pl','.sky','.skype','.sl','.slask.pl','.sld.do','.sld.pa','.slg.br','.sling','.slupsk.pl','.sm','.sm.ua','.smart','.smile','.sn','.sn.cn','.sncf','.so','.so.it','.soc.lk','.soccer','.sochi.su','.social','.softbank','.software','.sohu','.solar','.solutions','.sondrio.it','.song','.sony','.sos.pl','.sosnowiec.pl','.south.am','.soy','.sp.it','.spa','.space','.spb.ru','.spb.su','.spiegel','.sport','.sport.hu','.spot','.spreadbetting','.sr','.sr.it','.srl','.srl.ro','.srt','.srv.br','.ss','.ss.it','.st','.stada','.stalowa-wola.pl','.staples','.star','.starachowice.pl','.stargard.pl','.starhub','.statebank','.statefarm','.statoil','.stc','.stcgroup','.stockholm','.storage','.store','.store.nf','.store.ro','.stream','.studio','.study','.style','.su','.sucks','.suedtirol.it','.suli.hu','.sumy.ua','.supplies','.supply','.support','.surf','.surgery','.suwalki.pl','.suzuki','.sv','.sv.it','.swatch','.swidnica.pl','.swiebodzin.pl','.swiftcover','.swinoujscie.pl','.swiss','.sx','.sx.cn','.sy','.sydney','.symantec','.systems','.sz','.szczecin.pl','.szczytno.pl','.szex.hu','.szkola.pl','.ta.it','.taa.it','.tab','.taipei','.talk','.taobao','.taranto.it','.target','.targi.pl','.tarnobrzeg.pl','.tashkent.su','.tatamotors','.tatar','.tattoo','.tax','.taxi','.taxi.br','.tc','.tci','.td','.tdk','.te.it','.te.ua','.teach.pro','.team','.tech','.technology','.tel','.tel.ki','.tel.tr','.telecity','.telefonica','.temasek','.tempio-olbia.it','.tempioolbia.it','.tennis','.teo.br','.teramo.it','.termez.su','.terni.it','.ternopil.ua','.test','.teva','.tf','.tg','.tgory.pl','.th','.thd','.theater','.theatre','.tiaa','.tickets','.tienda','.tiffany','.tips','.tires','.tirol','.tj','.tj.cn','.tjmaxx','.tjx','.tk','.tkmaxx','.tl','.tm','.tm.cy','.tm.fr','.tm.hu','.tm.km','.tm.mc','.tm.mg','.tm.pl','.tm.ro','.tmall','.tmp.br','.tn','.tn.it','.to','.to.it','.today','.togliatti.su','.tokyo','.tokyo.jp','.tools','.top','.toray','.torino.it','.tos.it','.toscana.it','.toshiba','.total','.tourism.pl','.tourism.td','.tourism.tn','.tours','.town','.toyota','.toys','.tozsde.hu','.tp','.tp.it','.tr','.tr.it','.trade','.trading','.training','.trani-andria-barletta.it','.trani-barletta-andria.it','.traniandriabarletta.it','.tranibarlettaandria.it','.trapani.it','.travel','.travel.np','.travel.pl','.travelchannel','.travelers','.travelersinsurance','.trd.br','.trentino-a-adige.it','.trentino-aadige.it','.trentino-alto-adige.it','.trentino-altoadige.it','.trentino-s-tirol.it','.trentino-stirol.it','.trentino-sud-tirol.it','.trentino-sudtirol.it','.trentino-sued-tirol.it','.trentino-suedtirol.it','.trentino.it','.trentinoa-adige.it','.trentinoaadige.it','.trentinoalto-adige.it','.trentinoaltoadige.it','.trentinos-tirol.it','.trentinosud-tirol.it','.trentinosudtirol.it','.trentinosued-tirol.it','.trentinosuedtirol.it','.trento.it','.treviso.it','.trieste.it','.troitsk.su','.trust','.trv','.ts.it','.tselinograd.su','.tt','.tube','.tui','.tula.su','.tunes','.tur.br','.turek.pl','.turin.it','.turystyka.pl','.tuscany.it','.tushu','.tuva.su','.tv','.tv.bo','.tv.br','.tv.eg','.tv.it','.tv.tr','.tv.tz','.tvs','.tw','.tw.cn','.tychy.pl','.tz','.ua','.ubank','.ubs','.uconnect','.ud.it','.udine.it','.uenorge.no','.ug','.uk','.uk.com','.uk.net','.uk.pr','.uk.si','.um','.umb.it','.umbria.it','.unicom','.univ.sn','.university','.uno','.uol','.ups','.urbino-pesaro.it','.urbinopesaro.it','.us','.us.com','.us.org','.us.si','.ustka.pl','.utazas.hu','.uy','.uy.com','.uz','.uz.ua','.uzhgorod.ua','.va','.va.it','.vacations','.val-d-aosta.it','.val-daosta.it','.vald-aosta.it','.valdaosta.it','.valle-d-aosta.it','.valle-daosta.it','.valled-aosta.it','.valledaosta.it','.vana','.vanguard','.vao.it','.varese.it','.vb.it','.vc','.vc.it','.vda.it','.ve','.ve.it','.vegas','.ven.it','.veneto.it','.venezia.it','.venice.it','.ventures','.verbania.it','.vercelli.it','.verisign','.vermögensberater','.vermögensberatung','.verona.it','.versicherung','.vet','.vet.br','.vet.pro','.veterinaire.fr','.vg','.vgs.no','.vi','.vi.it','.viajes','.vibo-valentia.it','.vibovalentia.it','.vicenza.it','.video','.video.hu','.vig','.viking','.villas','.vin','.vinnica.ua','.vip','.virgin','.visa','.vision','.vista','.vistaprint','.viterbo.it','.viva','.vivo','.vix.br','.vlaanderen','.vladikavkaz.ru','.vladikavkaz.su','.vladimir.ru','.vladimir.su','.vlog.br','.vn','.vn.ua','.vodka','.volkswagen','.vologda.su','.volvo','.volyn.ua','.vote','.voting','.voto','.voyage','.vr.it','.vs.it','.vt.it','.vu','.vuelos','.vv.it','.walbrzych.pl','.wales','.walmart','.walter','.wang','.wanggou','.warman','.warmia.pl','.warszawa.pl','.watch','.watches','.waw.pl','.weather','.weatherchannel','.web.do','.web.id','.web.lk','.web.nf','.web.ni','.web.pk','.web.tj','.web.tr','.web.ve','.web.za','.webcam','.weber','.website','.wed','.wedding','.wegrow.pl','.weibo','.weir','.wf','.whoswho','.wielun.pl','.wien','.wiki','.wiki.br','.williamhill','.win','.windows','.wixsite.com','.wine','.winners','.wlocl.pl','.wloclawek.pl','.wme','.wodzislaw.pl','.wolomin.pl','.wolterskluwer','.woodside','.work','.works','.world','.wow','.wroclaw.pl','.ws','.wtc','.wtf','.www.ro','.xbox','.xerox','.xfinity','.xihuan','.xin','.xj.cn','.xperia','.xxx','.xyz','.xz.cn','.yachts','.yahoo','.yalta.ua','.yamaxun','.yandex','.ye','.yn.cn','.yodobashi','.yoga','.yokohama','.you','.youtube','.yt','.yun','.za','.za.bz','.za.com','.zachpomor.pl','.zagan.pl','.zaporizhzhe.ua','.zappos','.zara','.zarow.pl','.zero','.zgora.pl','.zgorzelec.pl','.zhitomir.ua','.zip','.zippo','.zj.cn','.zlg.br','.zm','.zone','.zp.ua','.zt.ua','.zuerich','.zw','.δοκιμή','.ελ','.ελ[41]','.ευ','.ак.срб','.бг','.бг[41]','.бел','.дети','.ею','.испытание','.католик','.ком','.ком.рф','.мкд','.мон','.москва','.нет.рф','.онлайн','.орг','.орг.рф','.пр.срб','.рус','.рф','.сайт','.срб','.укр','.упр.срб','.қаз','.հայ','.טעסט','.ישראל','.קום','.קום‎','.آزمایشی','.إختبار','.ابوظبي','.اتصالات','.ارامكو','.الاردن','.البحرين','.الجزائر','.السعودية','.العليان','.المغرب','.امارات','.ایران','.بارت','.بازار','.بيتك','.بھارت','.تونس','.سودان','.سورية','.شبكة','.عراق','.عرب','.عمان','.فلسطين','.قطر','.كاثوليك','.كمپنی.بھارت','.كوم','.مصر','.مليسيا','.موبايلي','.موريتانيا','.موقع','.همراه','.پاكستان','.پاکستان','.ڀارت','.कंपनी.भारत','.कॉम','.नेट','.परीक्षा','.भारत','.भारतम्','.भारोत','.संगठन','.কোম্পানি.ভারত','.বাংলা','.ভারত','.ভাৰত','.ਕੰਪਨੀ.ਭਾਰਤ','.ਭਾਰਤ','.કંપની.ભારત','.ભારત','.ଭାରତ','.இந்தியா','.இலங்கை','.சிங்கப்பூர்','.நிறுவனம்.இந்தியா','.பரிட்சை','.భారత్','.ಭಾರತ','.ഭാരതം','.ලංකා','.คอม','.ธุรกิจ.ไทย','.ไทย','.ລາວ','.გე','.みんな','.アマゾン','.クラウド','.グーグル','.コム','.ストア','.セール','.テスト','.ファッション','.ポイント','.世界','.中信','.中国','.中國','.中文网','.亚马逊','.企业','.佛山','.信息','.個人.香港','.健康','.八卦','.公司','.公司.hk','.公司.香港','.公益','.台湾','.台灣','.商城','.商店','.商标','.嘉里','.嘉里大酒店','.在线','.大众汽车','.大拿','.天主教','.娱乐','.家電','.工行','.广东','.微博','.慈善','.我爱你','.手机','.手表','.招聘','.政务','.政府','.政府.香港','.教育.香港','.新加坡','.新闻','.时尚','.書籍','.机构','.测试','.淡马锡','.測試','.游戏','.澳門','.澳门','.点看','.珠宝','.移动','.組織.香港','.網絡.香港','.组织机构','.网址','.网店','.网站','.网络','.联通','.诺基亚','.谷歌','.购物','.通販','.集团','.電訊盈科','.飞利浦','.食品','.餐厅','.香格里拉','.香港','.닷넷','.닷컴','.삼성','.테스트','.한국'];
    // Trier les TLDs par ordre de longueur décroissante
    tlds.sort((a, b) => b.length - a.length);

    let detectedTld = "";
    let domainWithSubdomains = "";

    // Parcours des TLDs pour identifier le plus long TLD correspondant
    for (let tld of tlds) {
        if (cleanURL.endsWith(tld) && cleanURL[cleanURL.length - tld.length - 1] !== '.') {
            detectedTld = tld;
            break;  // Arrête la boucle dès qu’on trouve le TLD le plus long
        }
    }

    // Supprimer le TLD pour obtenir la partie contenant le domaine et les sous-domaines
    domainWithSubdomains = cleanURL.slice(0, -detectedTld.length);

    // Séparer le domaine principal des sous-domaines en retirant tout avant le dernier point
    const lastDotIndex = domainWithSubdomains.lastIndexOf(".");
    const domain = domainWithSubdomains.slice(lastDotIndex + 1);
    const subDomain = domainWithSubdomains.slice(0, lastDotIndex);

    return domain
}

function analyzeHtml(htmlContent) {
    let phoneMatches = findMatches(htmlContent, regexPhone);
    let socialMediaMatches = findMatches(htmlContent, regexSocialMedia);
    let googleIdsMatches = findMatches(htmlContent, regexGoogleIds);
    let emailMatches = findMatches(htmlContent, regexEmail);
    let cdnMatches = findMatches(htmlContent, regexCDN);
    let apiMatches = findMatches(htmlContent, regexAPI);
    const domain = getDomain(pageUrl); // www.domain.com
    const domainName = parseDomain(domain) // domain    
    const subDomain = (domain.replace(domainName, '').slice(0,(domain.replace(domainName, '')).indexOf('.'))); // www.
    const cleanedDomain = subDomain.length <= 1 ? domain : domain.replace(subDomain + '.', ''); // domain.com
    const tld = cleanedDomain.replace(domainName, ''); // .com

    for (const match of cdnMatches) {
        if (match.includes('adsrv.eacdn.com')) {
            cdnMatches.delete(match);
        }
    }

    // Traitement numéros de téléphones
    const phoneMatchesArray = Array.from(phoneMatches);
    const logicalPhoneMatches = phoneMatchesArray
    .filter(match => {
        if (match.includes('+')) {
            return false;
        }
        const indicatif = tldToCountry.find(item => item.tld === tld);
        if (!indicatif) {
            return false;
        }
        return true;
    })
    .map(match => {

        const indicatif = tldToCountry.find(item => item.tld === tld);
        if (indicatif) {
            return indicatif.code + match.slice(1);
        }
        return match;
    });


    if (phoneMatches.size > 1){
        displayMatchesWithFurtherInvestigation('Phones (' + phoneMatches.size + ' matches) :'  , phoneMatches, 2);
    }
    else if (phoneMatches.size === 1){
        displayMatchesWithFurtherInvestigation('Phone :', phoneMatches, 2);
    }

    if (logicalPhoneMatches.length > 1){
        displayMatchesWithFurtherInvestigation('    Area code deduced from TLD (' + logicalPhoneMatches.length + ' matches) :'  , logicalPhoneMatches, 2, true);
    }
    else if (logicalPhoneMatches.length === 1){
        displayMatchesWithFurtherInvestigation('    Area code deduced from TLD :', logicalPhoneMatches, 2, true);
    }



    if (githubUserFilter(socialMediaMatches).size > 1){
        displayMatchesWithFurtherInvestigation('Social Medias (' + githubUserFilter(socialMediaMatches).size + ' matches) :', githubUserFilter(socialMediaMatches), 3);
    }
    else if (githubUserFilter(socialMediaMatches).size === 1){
        displayMatchesWithFurtherInvestigation('Social Media :', githubUserFilter(socialMediaMatches), 3);
    }

    if (emailMatches.size > 1){
        displayMatchesWithFurtherInvestigation('Emails (' + emailMatches.size + ' matches) :', emailMatches, 1);
    }
    else if (emailMatches.size === 1){
        displayMatchesWithFurtherInvestigation('Email :', emailMatches, 1);
    }

    if (googleIdsMatches.size > 1){
        displayMatches('Google IDs :', googleIdsMatches);
    }
    else if (googleIdsMatches.size === 1){
        displayMatches('Google ID :', googleIdsMatches);
    }

    if (cdnMatches.size > 1){
        displayMatches('CDNs :', cdnMatches);
    }
    else if (cdnMatches.size === 1){
        displayMatches('CDN :', cdnMatches);
    }cdnMatches

    if (apiMatches.size > 1){ 
        displayMatches('APIs :', apiMatches);
    }
    else if (apiMatches.size === 1){
        displayMatches('API :', apiMatches);
    }cdnMatches

    if (htmlContent.includes('wp-content')) {
        const wpDetect = pageUrl + '/wp-json/wp/v2/users';
        displayMatches('Site WordPress : ', [wpDetect]);
    }
    
    // // logs des différentes parties de l'URL 
    // console.log('domain : ' + domain);
    // console.log('subDomain : ' + subDomain);
    // console.log('cleanedDomain : ' + cleanedDomain);
    // console.log('domainName : ' + domainName)
    // console.log('TLD : ' + tld)

    const robots = pageUrl + '/robots.txt';
    const sitemap1 = pageUrl + '/sitemap.xml';
    const sitemap2 = pageUrl + '/sitemap_index.xml';
    displayMatches('Robots :', [robots]);
    displayMatches('Sitemaps :', [sitemap1, sitemap2]);

    const cert = 'https://crt.sh/?q=' + cleanedDomain;
    displayMatches('Certificat :', [cert]);

    const whois = 'https://www.whoxy.com/' + cleanedDomain + '#whois';
    displayMatches('Whois :', [whois]);

    const archives = 'https://web.archive.org/web/*/' + fullUrl; 
    displayMatches('Archives :', [archives]);

    const scamDomain = 'https://www.signal-arnaques.com/?q=' + cleanedDomain +'#search-container';
    const scamDomainDork = 'https://www.google.com/search?q=%22' + cleanedDomain + '%22%20%22Scam%22';
    const scamTrustPilot = 'https://www.trustpilot.com/review/' + cleanedDomain;
    displayMatches('Scam :', [scamDomainDork,scamDomain,scamTrustPilot])


    const siteDork = 'https://www.google.com/search?q=site%3A' + cleanedDomain;
    const stackoverflowDork = 'https://www.google.com/search?q=site%3Astackoverflow.com ' + '"' + cleanedDomain + '"';
    const githubSearchCommits = 'https://github.com/search?q=' + domainName + "&type=commits";
    const shodanSearch = 'https://www.shodan.io/search?query=' + cleanedDomain;
    const searchcodeSearch = 'https://searchcode.com/?q=' + domainName;
    const grepAppSearch = 'https://grep.app/search?q=' + domainName;

    // TODO ajout d'une URL pour télécharger tous les commentaires détectés dans le code ( ce qui se trouve entre : /* et */, <!-- et -->, // et retour à la ligne au format CSV)

    displayMatches('Dev Analysis :', [siteDork, stackoverflowDork, githubSearchCommits, shodanSearch, searchcodeSearch, grepAppSearch ]);

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

    if (containsKeywords(title)){
        const openallurls = document.createElement('button');
            openallurls.classList.add('open-all');
            openallurls.addEventListener('click', () => {
                const children = titleElement.querySelectorAll('*');
                children.forEach(child => {
                    console.log(child)
                if (child.tagName === 'A') {
                    const href = child.getAttribute('href');
                    if (href) {
                        setTimeout(() => {
                            browser.tabs.create({url : href});
                        }, 1000);
                    }
                }
                });
            });

            titleElement.appendChild(openallurls);
    }

    if (matches.size === 0) {
        const noMatchesElement = document.createElement('p');
        noMatchesElement.textContent = 'No matches found.';
        popupContent.appendChild(noMatchesElement);
    } else {
        const listElement = document.createElement('ul');
        matches.forEach(match => {
            const listItem = document.createElement('li');
            if (matchHTTPEndpoint(match, googlePattern)) {
                const linkElement = document.createElement('a');
                linkElement.href = match;
                linkElement.textContent = "Google : " + decodeURIComponent(match.replace("https:\/\/www\.google\.com\/search\?q=", ''));
                listItem.appendChild(linkElement);
            }
            else if (matchHTTPEndpoint(match, httppattern)) {
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
        titleElement.appendChild(listElement);
    }
}

function displayMatchesWithFurtherInvestigation(title, matches, mode, subtext = false) {
    const popupContent = document.getElementById('recon-content');
    let titleElement;

    if (subtext) {
        titleElement = document.createElement('h3');
    } else {
        titleElement = document.createElement('h2');
    }


    titleElement.textContent = title;
    popupContent.appendChild(titleElement);

    if (containsKeywords(title)){
        const openallurls = document.createElement('button');
            openallurls.classList.add('open-all');
            openallurls.addEventListener('click', () => {
                const children = titleElement.querySelectorAll('*');
                children.forEach(child => {
                    console.log(child)
                if (child.tagName === 'A') {
                    const href = child.getAttribute('href');
                    if (href) {
                        setTimeout(() => {
                            browser.tabs.create({url : href});
                        }, 1000);
                    }
                }
                });
            });

            titleElement.appendChild(openallurls);
    }


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
            }
            else{
                listItem.textContent = match;

            }
            const furtherInvestigationButton = document.createElement('button');
            furtherInvestigationButton.classList.add('further-investigation-button');
            furtherInvestigationButton.addEventListener('click', () => {
                while (popupContent.firstChild) {
                    popupContent.removeChild(popupContent.firstChild);
                }
                displayDork(match, "Further investigations on : ", mode);
            });

            listItem.appendChild(furtherInvestigationButton);
            listElement.appendChild(listItem);
        });
        titleElement.appendChild(listElement);
    }
}

function displayDork(match, title, mode){
    const popupContent = document.getElementById('recon-content');
    const titleElement = document.createElement('h1');
    titleElement.textContent = title + "\n" + match;
    const dorkElement = document.createElement('h2');

    popupContent.appendChild(titleElement);
    popupContent.appendChild(dorkElement);

    if (containsKeywords(title)){
        const openallurls = document.createElement('button');
            openallurls.classList.add('open-all');
            openallurls.addEventListener('click', () => {
                const children = titleElement.querySelectorAll('*');
                children.forEach(child => {
                    console.log(child)
                if (child.tagName === 'A') {
                    const href = child.getAttribute('href');
                    if (href) {
                        setTimeout(() => {
                            browser.tabs.create({url : href});
                        }, 1000);
                    }
                }
                });
            });

            titleElement.appendChild(openallurls);
    }

    if (mode == 1){
        const atDomain = encodeURIComponent(match.split('@')[1]); // @mail.fr
        const nameAt = encodeURIComponent(match.split('@')[0] + '@'); //john.doe@
        const simpleMail = 'https://www.google.com/search?q=%22'+ match + '%22';
        const searchMailWebsites = 'https://www.google.com/search?q=%22'+ match + '%22%20site%3Arocketreach.co%20%7C%20site%3Acontactout.com%20%7C%20site%3Aaeroleads.com';
        const epieosMail = 'https://epieos.com/?q=' + match + '&t=email';
        const noDomainMail = 'https://www.google.com/search?q=%22'+ nameAt + '%22';
        const filetypeDorkMail = 'https://www.google.com/search?q=%22%40'+ match + '%22%20filetype%3Apdf%20%7C%20filetype%3Adocx%20%7C%20filetype%3Aodt%20%7C%20filetype%3Atxt';
        const filetypeDorkDomain = 'https://www.google.com/search?q=%22%40'+ atDomain + '%22%20filetype%3Apdf%20%7C%20filetype%3Adocx%20%7C%20filetype%3Aodt%20%7C%20filetype%3Atxt';
        const dorkDomain = 'https://www.google.com/search?q=%22%40'+ atDomain + '%22';
        const searchDomainWebsites = 'https://www.google.com/search?q=%22%40'+ atDomain + '%22%20site%3Arocketreach.co%20%7C%20site%3Acontactout.com%20%7C%20site%3Aaeroleads.com';
        const altDomainMail = 'https://www.google.com/search?q=%22'+ nameAt +'gmail.com%22%20%7C%20%22'+ nameAt +'outlook.com%22%20%7C%20%22' + nameAt + 'hotmail.fr%22%20%7C%20%22'  + nameAt + 'yahoo.fr%22%20%7C%20%22' + nameAt + 'free.fr%22%20%7C%20%22' + nameAt + '%40orange.fr%22';
        const scamMailDork = 'https://www.google.com/search?q=%22' + match + '%22%20%22Scam%22';
        const githubMail = 'https://github.com/search?q=' + match + '&type=commits';

        displayMatches("Simple Mail", [simpleMail, searchMailWebsites,filetypeDorkMail,epieosMail,githubMail]);
        displayMatches("Mail without domain", [noDomainMail]);
        displayMatches("Domain only dorks", [dorkDomain, filetypeDorkDomain, searchDomainWebsites]);
        displayMatches("Alternative domains", [altDomainMail]);
        displayMatches("Scam", [scamMailDork]);
    }
    else if (mode == 2){
        const reverseDirectory = 'https://www.pagesjaunes.fr/annuaireinverse/recherche?quoiqui=' + encodeURIComponent(match) + '&univers=annuaireinverse';
        const phoneInformations = 'https://whocalld.com/search?p=' + encodeURIComponent(match);
        const phoneDork = 'https://www.google.com/search?q=%22' + encodeURIComponent(match) + '%22';

        if (match.includes('+')){
            const syncMe = 'https://sync.me/search/?number=' + encodeURIComponent(match);
            const phoneInformations = 'https://whocalld.com/search?p=' + encodeURIComponent(match);
            const epieos = 'https://epieos.com/?q=' + encodeURIComponent(match) + '&t=phone';
            

            displayMatches("Reverse directory", [reverseDirectory]);
            displayMatches("Phone informations", [phoneInformations, phoneDork, syncMe, epieos]);
        }
        else {
            displayMatches("Reverse directory", [reverseDirectory]);
            displayMatches("Phone informations", [phoneInformations, phoneDork]);
        }
    }
    else if (mode == 3){
        const regex = /(https\:\/\/[a-z,-]+\.facebook\.[a-z]+(\/(?!tr\?id=))|https\:\/\/[a-z,-]{0,}\.?youtube\.[a-z]+\/|https\:\/\/[a-z,-]{0,}\.?(instagram|pinterest|discord)\.[a-z]+\/|https\:\/\/github\.[a-z]+\/|https\:\/\/([a-z,-]{0,}\.)*(twitter|x)\.[a-z]+\/|https\:\/\/[a-z-]+\.linkedin\.[a-zA-Z0-9._-]+\/)/g;
        const noUrlMatch = match.replace(regex, '');
        const socialBlade = 'https://socialblade.com/search/search?query=' + decodeURIComponent(noUrlMatch);
        const peekYou = 'https://www.peekyou.com/username=' + decodeURIComponent(noUrlMatch);

        if (match.includes('github.com')){
            let socialMediaMatches = findMatches(htmlContent, regexSocialMedia);
            const githubUrls = githubResultsOnly(socialMediaMatches);

            displayMatches("Github links detected", (githubUrls));
            displayMatches('Username search', [socialBlade, peekYou]);
        }
        else {
            displayMatches('Username search', [socialBlade, peekYou]);
        }
    }
}

function containsKeywords(text) {

    const keywords = [
        "Social Media",
        "Social Medias",
        "Google Id",
        "Robots",
        "Sitemaps",
        "Certificat",
        "Whois",
        "Archives",
        "Scam",
        "Dev Analysis"
    ];

    const regex = new RegExp(keywords.join("|"), "i"); // "i" pour insensible à la casse

    return regex.test(text);
}


// TODO Bouton pour screenshot de la page (capture png de la page) + enregistrement du code source de la page au format html (enregistrement différé, on fait pas de zip)



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