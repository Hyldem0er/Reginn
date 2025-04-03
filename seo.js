const languageCountryMap = [
    { code: 'en-US', language: 'English', country: 'United States', tld: '.us' },
    { code: 'en', language: 'English', country: 'United States', tld: '.us' },
    { code: 'en-UK', language: 'English', country: 'United Kingdom', tld: '.uk' },
    { code: 'fr-CA', language: 'French', country: 'Canada', tld: '.ca' },
    { code: 'fr-FR', language: 'French', country: 'France', tld: '.fr' },
    { code: 'fr', language: 'French', country: 'France', tld: '.fr' },
    { code: 'es-ES', language: 'Spanish', country: 'Spain', tld: '.es' },
    { code: 'es', language: 'Spanish', country: 'Spain', tld: '.es' },
    { code: 'es-MX', language: 'Spanish', country: 'Mexico', tld: '.mx' },
    { code: 'de-DE', language: 'German', country: 'Germany', tld: '.de' },
    { code: 'de', language: 'German', country: 'Germany', tld: '.de' },
    { code: 'it-IT', language: 'Italian', country: 'Italy', tld: '.it' },
    { code: 'it', language: 'Italian', country: 'Italy', tld: '.it' },
    { code: 'pt-BR', language: 'Portuguese', country: 'Brazil', tld: '.br' },
    { code: 'pt', language: 'Portuguese', country: 'Portugal', tld: '.pt' },
    { code: 'pt-PT', language: 'Portuguese', country: 'Portugal', tld: '.pt' },
    { code: 'nl-NL', language: 'Dutch', country: 'Netherlands', tld: '.nl' },
    { code: 'nl', language: 'Dutch', country: 'Netherlands', tld: '.nl' },
    { code: 'ru-RU', language: 'Russian', country: 'Russia', tld: '.ru' },
    { code: 'ru', language: 'Russian', country: 'Russia', tld: '.ru' },
    { code: 'zh-CN', language: 'Chinese', country: 'China', tld: '.cn' },
    { code: 'zh', language: 'Chinese', country: 'China', tld: '.cn' },
    { code: 'ja-JP', language: 'Japanese', country: 'Japan', tld: '.jp' },
    { code: 'ja', language: 'Japanese', country: 'Japan', tld: '.jp' },
    { code: 'ko-KR', language: 'Korean', country: 'South Korea', tld: '.kr' },
    { code: 'ko', language: 'Korean', country: 'South Korea', tld: '.kr' },
    { code: 'ar-SA', language: 'Arabic', country: 'Saudi Arabia', tld: '.sa' },
    { code: 'ar', language: 'Arabic', country: 'Saudi Arabia', tld: '.sa' },
    { code: 'hi-IN', language: 'Hindi', country: 'India', tld: '.in' },
    { code: 'hi', language: 'Hindi', country: 'India', tld: '.in' },
    { code: 'tr-TR', language: 'Turkish', country: 'Turkey', tld: '.tr' },
    { code: 'tr', language: 'Turkish', country: 'Turkey', tld: '.tr' },
    { code: 'sv-SE', language: 'Swedish', country: 'Sweden', tld: '.se' },
    { code: 'sv', language: 'Swedish', country: 'Sweden', tld: '.se' },
    { code: 'no-NO', language: 'Norwegian', country: 'Norway', tld: '.no' },
    { code: 'no', language: 'Norwegian', country: 'Norway', tld: '.no' },
    { code: 'da-DK', language: 'Danish', country: 'Denmark', tld: '.dk' },
    { code: 'da', language: 'Danish', country: 'Denmark', tld: '.dk' },
    { code: 'fi-FI', language: 'Finnish', country: 'Finland', tld: '.fi' },
    { code: 'fi', language: 'Finnish', country: 'Finland', tld: '.fi' },
    { code: 'pl-PL', language: 'Polish', country: 'Poland', tld: '.pl' },
    { code: 'pl', language: 'Polish', country: 'Poland', tld: '.pl' },
    { code: 'cs-CZ', language: 'Czech', country: 'Czech Republic', tld: '.cz' },
    { code: 'cs', language: 'Czech', country: 'Czech Republic', tld: '.cz' },
    { code: 'hu-HU', language: 'Hungarian', country: 'Hungary', tld: '.hu' },
    { code: 'hu', language: 'Hungarian', country: 'Hungary', tld: '.hu' },
    { code: 'ro-RO', language: 'Romanian', country: 'Romania', tld: '.ro' },
    { code: 'ro', language: 'Romanian', country: 'Romania', tld: '.ro' },
    { code: 'el-GR', language: 'Greek', country: 'Greece', tld: '.gr' },
    { code: 'el', language: 'Greek', country: 'Greece', tld: '.gr' },
    { code: 'bg-BG', language: 'Bulgarian', country: 'Bulgaria', tld: '.bg' },
    { code: 'bg', language: 'Bulgarian', country: 'Bulgaria', tld: '.bg' },
    { code: 'hr-HR', language: 'Croatian', country: 'Croatia', tld: '.hr' },
    { code: 'hr', language: 'Croatian', country: 'Croatia', tld: '.hr' },
    { code: 'sr-RS', language: 'Serbian', country: 'Serbia', tld: '.rs' },
    { code: 'sr', language: 'Serbian', country: 'Serbia', tld: '.rs' },
    { code: 'sk-SK', language: 'Slovak', country: 'Slovakia', tld: '.sk' },
    { code: 'sk', language: 'Slovak', country: 'Slovakia', tld: '.sk' },
    { code: 'sl-SI', language: 'Slovenian', country: 'Slovenia', tld: '.si' },
    { code: 'sl', language: 'Slovenian', country: 'Slovenia', tld: '.si' },
    { code: 'lt-LT', language: 'Lithuanian', country: 'Lithuania', tld: '.lt' },
    { code: 'lt', language: 'Lithuanian', country: 'Lithuania', tld: '.lt' },
    { code: 'lv-LV', language: 'Latvian', country: 'Latvia', tld: '.lv' },
    { code: 'lv', language: 'Latvian', country: 'Latvia', tld: '.lv' },
    { code: 'et-EE', language: 'Estonian', country: 'Estonia', tld: '.ee' },
    { code: 'et', language: 'Estonian', country: 'Estonia', tld: '.ee' },
    { code: 'uk-UA', language: 'Ukrainian', country: 'Ukraine', tld: '.ua' },
    { code: 'uk', language: 'Ukrainian', country: 'Ukraine', tld: '.ua' },
    { code: 'he-IL', language: 'Hebrew', country: 'Israel', tld: '.il' },
    { code: 'he', language: 'Hebrew', country: 'Israel', tld: '.il' },
    { code: 'th-TH', language: 'Thai', country: 'Thailand', tld: '.th' },
    { code: 'th', language: 'Thai', country: 'Thailand', tld: '.th' },
    { code: 'vi-VN', language: 'Vietnamese', country: 'Vietnam', tld: '.vn' },
    { code: 'vi', language: 'Vietnamese', country: 'Vietnam', tld: '.vn' },
    { code: 'id-ID', language: 'Indonesian', country: 'Indonesia', tld: '.id' },
    { code: 'id', language: 'Indonesian', country: 'Indonesia', tld: '.id' },
    { code: 'ms-MY', language: 'Malay', country: 'Malaysia', tld: '.my' },
    { code: 'ms', language: 'Malay', country: 'Malaysia', tld: '.my' },
    { code: 'tl-PH', language: 'Tagalog', country: 'Philippines', tld: '.ph' },
    { code: 'tl', language: 'Tagalog', country: 'Philippines', tld: '.ph' },
    { code: 'af-ZA', language: 'Afrikaans', country: 'South Africa', tld: '.za' },
    { code: 'af', language: 'Afrikaans', country: 'South Africa', tld: '.za' },
    { code: 'sw-KE', language: 'Swahili', country: 'Kenya', tld: '.ke' },
    { code: 'sw', language: 'Swahili', country: 'Kenya', tld: '.ke' },
    { code: 'zu-ZA', language: 'Zulu', country: 'South Africa', tld: '.za' },
    { code: 'zu', language: 'Zulu', country: 'South Africa', tld: '.za' },
    { code: 'am-ET', language: 'Amharic', country: 'Ethiopia', tld: '.et' },
    { code: 'am', language: 'Amharic', country: 'Ethiopia', tld: '.et' },
    { code: 'fa-IR', language: 'Persian', country: 'Iran', tld: '.ir' },
    { code: 'fa', language: 'Persian', country: 'Iran', tld: '.ir' },
    { code: 'ur-PK', language: 'Urdu', country: 'Pakistan', tld: '.pk' },
    { code: 'ur', language: 'Urdu', country: 'Pakistan', tld: '.pk' },
    { code: 'bn-BD', language: 'Bengali', country: 'Bangladesh', tld: '.bd' },
    { code: 'bn', language: 'Bengali', country: 'Bangladesh', tld: '.bd' },
    { code: 'ne-NP', language: 'Nepali', country: 'Nepal', tld: '.np' },
    { code: 'ne', language: 'Nepali', country: 'Nepal', tld: '.np' },
    { code: 'si-LK', language: 'Sinhala', country: 'Sri Lanka', tld: '.lk' },
    { code: 'si', language: 'Sinhala', country: 'Sri Lanka', tld: '.lk' },
    { code: 'my-MM', language: 'Burmese', country: 'Myanmar', tld: '.mm' },
    { code: 'my', language: 'Burmese', country: 'Myanmar', tld: '.mm' },
    { code: 'km-KH', language: 'Khmer', country: 'Cambodia', tld: '.kh' },
    { code: 'km', language: 'Khmer', country: 'Cambodia', tld: '.kh' },
    { code: 'lo-LA', language: 'Lao', country: 'Laos', tld: '.la' },
    { code: 'lo', language: 'Lao', country: 'Laos', tld: '.la' },
    { code: 'mn-MN', language: 'Mongolian', country: 'Mongolia', tld: '.mn' },
    { code: 'mn', language: 'Mongolian', country: 'Mongolia', tld: '.mn' },
    { code: 'ka-GE', language: 'Georgian', country: 'Georgia', tld: '.ge' },
    { code: 'ka', language: 'Georgian', country: 'Georgia', tld: '.ge' },
    { code: 'az-AZ', language: 'Azerbaijani', country: 'Azerbaijan', tld: '.az' },
    { code: 'az', language: 'Azerbaijani', country: 'Azerbaijan', tld: '.az' },
    { code: 'hy-AM', language: 'Armenian', country: 'Armenia', tld: '.am' },
    { code: 'hy', language: 'Armenian', country: 'Armenia', tld: '.am' },
    { code: 'kk-KZ', language: 'Kazakh', country: 'Kazakhstan', tld: '.kz' },
    { code: 'kk', language: 'Kazakh', country: 'Kazakhstan', tld: '.kz' },
    { code: 'uz-UZ', language: 'Uzbek', country: 'Uzbekistan', tld: '.uz' },
    { code: 'uz', language: 'Uzbek', country: 'Uzbekistan', tld: '.uz' },
    { code: 'tk-TM', language: 'Turkmen', country: 'Turkmenistan', tld: '.tm' },
    { code: 'tk', language: 'Turkmen', country: 'Turkmenistan', tld: '.tm' },
    { code: 'ky-KG', language: 'Kyrgyz', country: 'Kyrgyzstan', tld: '.kg' },
    { code: 'ky', language: 'Kyrgyz', country: 'Kyrgyzstan', tld: '.kg' },
    { code: 'tg-TJ', language: 'Tajik', country: 'Tajikistan', tld: '.tj' },
    { code: 'tg', language: 'Tajik', country: 'Tajikistan', tld: '.tj' },
    { code: 'pa-IN', language: 'Punjabi', country: 'India', tld: '.in' },
    { code: 'pa', language: 'Punjabi', country: 'India', tld: '.in' },
    { code: 'gu-IN', language: 'Gujarati', country: 'India', tld: '.in' },
    { code: 'gu', language: 'Gujarati', country: 'India', tld: '.in' },
    { code: 'mr-IN', language: 'Marathi', country: 'India', tld: '.in' },
    { code: 'mr', language: 'Marathi', country: 'India', tld: '.in' },
    { code: 'ta-IN', language: 'Tamil', country: 'India', tld: '.in' },
    { code: 'ta', language: 'Tamil', country: 'India', tld: '.in' },
    { code: 'te-IN', language: 'Telugu', country: 'India', tld: '.in' },
    { code: 'te', language: 'Telugu', country: 'India', tld: '.in' },
    { code: 'kn-IN', language: 'Kannada', country: 'India', tld: '.in' },
    { code: 'kn', language: 'Kannada', country: 'India', tld: '.in' },
    { code: 'ml-IN', language: 'Malayalam', country: 'India', tld: '.in' },
    { code: 'ml', language: 'Malayalam', country: 'India', tld: '.in' },
    { code: 'as-IN', language: 'Assamese', country: 'India', tld: '.in' },
    { code: 'as', language: 'Assamese', country: 'India', tld: '.in' },
    { code: 'or-IN', language: 'Oriya', country: 'India', tld: '.in' },
    { code: 'or', language: 'Oriya', country: 'India', tld: '.in' },
    { code: 'ps-AF', language: 'Pashto', country: 'Afghanistan', tld: '.af' },
    { code: 'ps', language: 'Pashto', country: 'Afghanistan', tld: '.af' },
    { code: 'ku-IQ', language: 'Kurdish', country: 'Iraq', tld: '.iq' },
    { code: 'ku', language: 'Kurdish', country: 'Iraq', tld: '.iq' },
    { code: 'sd-PK', language: 'Sindhi', country: 'Pakistan', tld: '.pk' },
    { code: 'sd', language: 'Sindhi', country: 'Pakistan', tld: '.pk' },
    { code: 'eu-ES', language: 'Basque', country: 'Spain', tld: '.es' },
    { code: 'eu', language: 'Basque', country: 'Spain', tld: '.es' },
    { code: 'gl-ES', language: 'Galician', country: 'Spain', tld: '.es' },
    { code: 'gl', language: 'Galician', country: 'Spain', tld: '.es' },
    { code: 'ca-ES', language: 'Catalan', country: 'Spain', tld: '.es' },
    { code: 'ca', language: 'Catalan', country: 'Spain', tld: '.es' },
    { code: 'cy-GB', language: 'Welsh', country: 'United Kingdom', tld: '.uk' },
    { code: 'cy', language: 'Welsh', country: 'United Kingdom', tld: '.uk' },
    { code: 'ga-IE', language: 'Irish', country: 'Ireland', tld: '.ie' },
    { code: 'ga', language: 'Irish', country: 'Ireland', tld: '.ie' },
    { code: 'gd-GB', language: 'Scottish Gaelic', country: 'United Kingdom', tld: '.uk' },
    { code: 'gd', language: 'Scottish Gaelic', country: 'United Kingdom', tld: '.uk' },
    { code: 'mt-MT', language: 'Maltese', country: 'Malta', tld: '.mt' },
    { code: 'mt', language: 'Maltese', country: 'Malta', tld: '.mt' },
    { code: 'is-IS', language: 'Icelandic', country: 'Iceland', tld: '.is' },
    { code: 'is', language: 'Icelandic', country: 'Iceland', tld: '.is' },
    { code: 'fo-FO', language: 'Faroese', country: 'Faroe Islands', tld: '.fo' },
    { code: 'fo', language: 'Faroese', country: 'Faroe Islands', tld: '.fo' },
    { code: 'fy-NL', language: 'Frisian', country: 'Netherlands', tld: '.nl' },
    { code: 'fy', language: 'Frisian', country: 'Netherlands', tld: '.nl' },
    { code: 'lb-LU', language: 'Luxembourgish', country: 'Luxembourg', tld: '.lu' },
    { code: 'lb', language: 'Luxembourgish', country: 'Luxembourg', tld: '.lu' },
    { code: 'rm-CH', language: 'Romansh', country: 'Switzerland', tld: '.ch' },
    { code: 'rm', language: 'Romansh', country: 'Switzerland', tld: '.ch' },
    { code: 'sq-AL', language: 'Albanian', country: 'Albania', tld: '.al' },
    { code: 'sq', language: 'Albanian', country: 'Albania', tld: '.al' },
    { code: 'mk-MK', language: 'Macedonian', country: 'North Macedonia', tld: '.mk' },
    { code: 'mk', language: 'Macedonian', country: 'North Macedonia', tld: '.mk' },
    { code: 'bs-BA', language: 'Bosnian', country: 'Bosnia and Herzegovina', tld: '.ba' },
    { code: 'bs', language: 'Bosnian', country: 'Bosnia and Herzegovina', tld: '.ba' },
    { code: 'eo-XX', language: 'Esperanto', country: 'International', tld: '.xx' },
    { code: 'eo', language: 'Esperanto', country: 'International', tld: '.xx' },
    { code: 'ia-XX', language: 'Interlingua', country: 'International', tld: '.xx' },
    { code: 'ia', language: 'Interlingua', country: 'International', tld: '.xx' },
    { code: 'jv-ID', language: 'Javanese', country: 'Indonesia', tld: '.id' },
    { code: 'jv', language: 'Javanese', country: 'Indonesia', tld: '.id' },
    { code: 'su-ID', language: 'Sundanese', country: 'Indonesia', tld: '.id' },
    { code: 'su', language: 'Sundanese', country: 'Indonesia', tld: '.id' },
    { code: 'mg-MG', language: 'Malagasy', country: 'Madagascar', tld: '.mg' },
    { code: 'mg', language: 'Malagasy', country: 'Madagascar', tld: '.mg' },
    { code: 'ht-HT', language: 'Haitian Creole', country: 'Haiti', tld: '.ht' },
    { code: 'ht', language: 'Haitian Creole', country: 'Haiti', tld: '.ht' },
    { code: 'yo-NG', language: 'Yoruba', country: 'Nigeria', tld: '.ng' },
    { code: 'yo', language: 'Yoruba', country: 'Nigeria', tld: '.ng' },
    { code: 'ig-NG', language: 'Igbo', country: 'Nigeria', tld: '.ng' },
    { code: 'ig', language: 'Igbo', country: 'Nigeria', tld: '.ng' },
    { code: 'ha-NG', language: 'Hausa', country: 'Nigeria', tld: '.ng' },
    { code: 'ha', language: 'Hausa', country: 'Nigeria', tld: '.ng' },
    { code: 'xh-ZA', language: 'Xhosa', country: 'South Africa', tld: '.za' },
    { code: 'xh', language: 'Xhosa', country: 'South Africa', tld: '.za' },
    { code: 'tn-ZA', language: 'Tswana', country: 'South Africa', tld: '.za' },
    { code: 'tn', language: 'Tswana', country: 'South Africa', tld: '.za' },
    { code: 'st-ZA', language: 'Southern Sotho', country: 'South Africa', tld: '.za' },
    { code: 'st', language: 'Southern Sotho', country: 'South Africa', tld: '.za' },
    { code: 'ts-ZA', language: 'Tsonga', country: 'South Africa', tld: '.za' },
    { code: 'ts', language: 'Tsonga', country: 'South Africa', tld: '.za' },
    { code: 've-ZA', language: 'Venda', country: 'South Africa', tld: '.za' },
    { code: 've', language: 'Venda', country: 'South Africa', tld: '.za' },
    { code: 'nr-ZA', language: 'Southern Ndebele', country: 'South Africa', tld: '.za' },
    { code: 'nr', language: 'Southern Ndebele', country: 'South Africa', tld: '.za' },
    { code: 'ss-ZA', language: 'Swati', country: 'South Africa', tld: '.za' },
    { code: 'ss', language: 'Swati', country: 'South Africa', tld: '.za' },
    { code: 'ny-MW', language: 'Nyanja', country: 'Malawi', tld: '.mw' },
    { code: 'ny', language: 'Nyanja', country: 'Malawi', tld: '.mw' },
    { code: 'sn-ZW', language: 'Shona', country: 'Zimbabwe', tld: '.zw' },
    { code: 'sn', language: 'Shona', country: 'Zimbabwe', tld: '.zw' },
    { code: 'nd-ZW', language: 'Northern Ndebele', country: 'Zimbabwe', tld: '.zw' },
    { code: 'nd', language: 'Northern Ndebele', country: 'Zimbabwe', tld: '.zw' },
    { code: 'rw-RW', language: 'Kinyarwanda', country: 'Rwanda', tld: '.rw' },
    { code: 'rw', language: 'Kinyarwanda', country: 'Rwanda', tld: '.rw' },
    { code: 'rn-BI', language: 'Kirundi', country: 'Burundi', tld: '.bi' },
    { code: 'rn', language: 'Kirundi', country: 'Burundi', tld: '.bi' },
    { code: 'lu-CD', language: 'Luba-Katanga', country: 'Democratic Republic of the Congo', tld: '.cd' },
    { code: 'lu', language: 'Luba-Katanga', country: 'Democratic Republic of the Congo', tld: '.cd' },
    { code: 'lg-UG', language: 'Ganda', country: 'Uganda', tld: '.ug' },
    { code: 'lg', language: 'Ganda', country: 'Uganda', tld: '.ug' },
    { code: 'kea-CV', language: 'Cape Verdean Creole', country: 'Cape Verde', tld: '.cv' },
    { code: 'kea', language: 'Cape Verdean Creole', country: 'Cape Verde', tld: '.cv' },
    { code: 'crs-SC', language: 'Seychellois Creole', country: 'Seychelles', tld: '.sc' },
    { code: 'crs', language: 'Seychellois Creole', country: 'Seychelles', tld: '.sc' },
    { code: 'mfe-MU', language: 'Mauritian Creole', country: 'Mauritius', tld: '.mu' },
    { code: 'mfe', language: 'Mauritian Creole', country: 'Mauritius', tld: '.mu' }
];

function languageDetection(htmlContent) {
    const regex = /lang="\w{1,3}(\-\w{1,3}|)"/g;
    const matches = [...htmlContent.matchAll(regex)];
    const uniqueLanguages = new Set();
    const domain = getDomain(pageUrl); // www.domain.com
    const domainName = parseDomain(domain) // domain    
    const subDomain = (domain.replace(domainName, '').slice(0,(domain.replace(domainName, '')).indexOf('.'))); // www.
    const cleanedDomain = subDomain.length <= 1 ? domain : domain.replace(subDomain + '.', ''); // domain.com
    const tld = cleanedDomain.replace(domainName, ''); // .com

    matches.forEach(match => {
        const langValue = match[0].split('=')[1].replace(/"/g, '');
        uniqueLanguages.add(langValue);
    });

    const uniqueLanguagesArray = [...uniqueLanguages];
    const languageCountryArray = uniqueLanguagesArray.map(langCode => {
    const countryInfo = languageCountryMap.find(item => item.code === langCode);
        return languageCountryMap.find(item => item.code === langCode);
    }).filter(countryInfo => countryInfo !== undefined);


    const popupContent = document.getElementById('seo-content');
    const titleElement = document.createElement('h2');
    popupContent.appendChild(titleElement);

    if (languageCountryArray.length > 0) {
        titleElement.textContent = "Languages detected :";
        const listElement = document.createElement('ul');
        const uniqueCountries = new Set();
        languageCountryArray.forEach(countryInfo => {
            uniqueCountries.add(`${countryInfo.language} (${countryInfo.country})`);
        });        
        uniqueCountries.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            listElement.appendChild(listItem);
        });
        popupContent.appendChild(listElement);
    }

    const tldSet = new Set();

    if (languageCountryArray.length >= 1 && languageCountryArray !== 'Unknown') {
        const tldTitleElement = document.createElement('h3');
        popupContent.appendChild(tldTitleElement);
    
        const tldListElement = document.createElement('ul');
    
        languageCountryArray.forEach(countryInfo => {
            const fullDomain = subDomain ? `${subDomain}.${domainName}${countryInfo.tld}` : `${domainName}${countryInfo.tld}`;
            if (fullDomain !== domain && !tldSet.has(fullDomain)) {
                tldSet.add(fullDomain);
                tldTitleElement.textContent = "Suggested mirror websites :";
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = 'http://' + fullDomain;
                link.textContent = fullDomain;
                listItem.appendChild(link);
                tldListElement.appendChild(listItem);
            }
        });
        tldTitleElement.appendChild(tldListElement);
    }
    
}

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

// function getDomain(url) {
//     try {
//         const urlObj = new URL(url);
//         return urlObj.hostname;
//     } catch (e) {
//         console.error("Invalid URL:", e);
//         return null;
//     }
// }

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

    // Spyfu
    const listItemSpyfu = document.createElement('li');
    const linkElementSpyfu = document.createElement('a');
    url = 'https://www.spyfu.com/overview/domain?query=' + domain
    linkElementSpyfu.href = url;
    linkElementSpyfu.textContent = url;
    listItemSpyfu.appendChild(linkElementSpyfu);
    listElement.appendChild(listItemSpyfu);
    popupContent.appendChild(listElement);

    // Statshow
    const listItemStatshow = document.createElement('li');
    const linkElementStatshow = document.createElement('a');
    url = 'https://www.statshow.com/www/' + domain
    linkElementStatshow.href = url;
    linkElementStatshow.textContent = url;
    listItemStatshow.appendChild(linkElementStatshow);
    listElement.appendChild(listItemStatshow);
    popupContent.appendChild(listElement);

    //SEO Optimer 
    const listItemSEOOptimer = document.createElement('li');
    const linkElementSEOOptimer = document.createElement('a');
    url = 'https://www.seoptimer.com/' + domain
    linkElementSEOOptimer.href = url;
    linkElementSEOOptimer.textContent = url;
    listItemSEOOptimer.appendChild(linkElementSEOOptimer);
    listElement.appendChild(listItemSEOOptimer);
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

function domainCopied(urlDomain){
    const popupContent = document.getElementById('seo-content');
    const titleElement = document.createElement('h2');
    titleElement.textContent = "Copies of the actual page :";
    popupContent.appendChild(titleElement);
    const domain = getDomain(urlDomain);
    const listElement = document.createElement('ul');

    // Copyscape
    const listItemAhref = document.createElement('li');
    const linkElementAhref = document.createElement('a');
    url = 'https://www.copyscape.com/?q=' + urlDomain;
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
    const stopWords = [ 'the','and','a','of','in','to','is','on','for','with','as','yrhkldcu','zrhkldcv','fdnz','mmmm','by','at','or','if','be','are','but','from','that','which','who','whom','whose','this','these','those','there','where','when','how','why','all','any','each','few','more','most','several','some','such','no','nor','not','only','other','so','than','too','very','can','will','just','don',"don't",'should',"should've",'now','d','ll','m','re','ve','y','ain','aren',"aren't",'couldn',"couldn't",'didn',"didn't",'doesn',"doesn't",'hadn',"hadn't",'hasn',"hasn't",'haven',"haven't",'isn',"isn't",'ma','mightn',"mightn't",'mustn',"mustn't",'needn',"needn't",'shan',"shan't",'shouldn',"shouldn't",'wasn',"wasn't",'weren',"weren't",'wouldn',"wouldn't",'might','may','must','shall','should','will','would','的','是','了','和','在','到','是','上','为','与','作','于','以','为','着','或','如','可','就','会','就','现','不','从','那','哪','也','只','自','其','同','也','很','可','会','要','等','都','多','最','更','更多','一些','一样','没有','没','不是','只是','其他','所以','因为','所以','因此','而','太','再','の','が','は','を','に','と','で','が','の','を','に','と','で','が','は','が','は','を','に','と','で','か','より','も','また','し','いる','する','ある','い','いる','する','ある','い','いる','する','ある','い','いる','する','ある','い','いる','する','ある','い','いる','する','ある','い','いる','する','ある','い','いる','する','ある','い','der','die','das','und','in','zu','ist','auf','für','mit','als','von','an','oder','wenn','sein','sind','aber','von','dass','wer','welche','welcher','welches','wem','wessen','dieser','diese','dieses','das','da','wo','wann','wie','warum','alle','einige','mehr','am','meisten','ein','eine','einem','einer','eines','nicht','nur','eigene','andere','so','als','auch','sehr','kann','werden','gerade','tun','sollen','jetzt','el','la','los','las','y','en','a','para','con','como','por','de','en','o','si','es','son','pero','de','que','qué','quién','cuyo','este','estos','esta','estas','eso','aquí','no','desde','eso','qué','dónde','cuándo','cómo','por qué','todos','algunos','más','la','mayoría','un','una','unos','unas','no','sólo','propio','otro','así','que','también','muy','puede','será','justo','hacer','devrait','ahora','le','la','les','et','dans','à','est','sur','pour','avec','comme','par','de','en','ou','si','est','sont','mais','de','que','qui','dont','ce','ces','cet','cette','cela','ici','non','depuis','cela','où','quand','comment','pourquoi','tous','certains','plus','le','la','les','plusieurs','quelques','pas','seulement','propre','autre','ainsi','que','aussi','très','peut','sera','juste','faire','devrait','maintenant','twitter','facebook','instagram','linkedin','youtube','pinterest','snapchat','tiktok','reddit','tumblr','whatsapp','messenger','telegram','wechat','line','viber','skype','discord','微博','微信','qq','抖音','快手','百度贴吧','知乎','豆瓣','今日头条','小红书','陌陌','QQ空间','微博','微信','qq','抖音','快手','百度贴吧','知乎','豆瓣','今日头条','小红书','陌陌','QQ空间','ツイッター','フェイスブック','インスタグラム','リンクドイン','ユーチューブ','ピンタレスト','スナップチャット','ティックトック','レディット','タンブラー','ウェットアップ','メッセンジャー','テレグラム','ウェチャット','ライン','バイバー','スカイプ','ディスコード','left','right','wrapper','hover','body','bottom','media','screen','order','votre','heading','icon','vous','nous','notre','afin','ffffff','marque','produits','link','informations','return','product','autour','contre','link','button','span','return','product','personnes','function','type','autour','brand','tape','const','void','typeof','else','instanceof','veuillez','avez','links','cookies','peuvent','label','inherit','préférences','checkbox','string','données','textcontent','name','display','navigateur','généralement','permettent','services','publicité','datalayer','href','galement','width','checked','models','container','opacity','sticky','headline','transform','solid','kexftu','ljokvz','color','default','stripe','tfsi','mixte','inset','ensmodal','group','wltp','bank','site','pouvez','acceptez','after','center','your','nameinput','geneset','slider','open','submenu','pubmed','baseurl','your','password','account','user','icons','page','undefined','opens','after','faqpress','windowtwitter','windowinstagram','rsiw','tabw','thumbw','null','saisissez','ouvert','fermé','open','closed','config','starttime','endtime','abonne','avis','boutique','please','code','login','failed','status','contact','error','encountered','connecter','ajouter','while','error','trying','autres','identifiant','send','wordfence','var','liste','mon','des','compte','produit','total','mes','mes','eur','lin','usd','des','xcd','typetierce','aud','gbp','précédent','suivant','xaf','nzd','une','typepremière','ils','cookie','dkk','case','prix','new','reviews','inscrire','voir','tout','true','text','top','root','nos','slide','header','inject','vos','slideoverpanel','you','full','host','mobile','height','border','view','purposes','notice','preferences','xsmall','processing','toggle','title','url','buttons','box','near']
    const words=text.toLowerCase().match(/(?<=[\s\n]|^)[a-z\u4e00-\u9fa5\u3040-\u309F\u30A0-\u30FF\u0400-\u04FF\u00E0-\u00FC\u00C0-\u00DC\u00DF\u00E0-\u00FF\u0100-\u017F]{3,}(?=\s|$)/g)||[];
    const wordCounts={};
    words.forEach(word=>{ if(!stopWords.includes(word)){ wordCounts[word]=(wordCounts[word]||0)+1;}});
    const sortedWordCounts=Object.entries(wordCounts).sort((a,b)=>b[1]-a[1]);
    const filteredWordCounts=sortedWordCounts.filter(([word, count]) => count > 4);
    const uniqueMatches=filteredWordCounts.slice(0,10).map(([word, count])=>`${word} : ${count}`);
    
    displayResult(uniqueMatches);
    languageDetection(htmlContent);
    analyseDomain(pageUrl);
    backLinks(pageUrl);
    domainCopied(pageUrl);
}

document.getElementById('seo-checkbox').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('recon-checkbox').checked = false;
        document.getElementById('recon-content').classList.add('hidden');
        document.getElementById('seo-content').classList.remove('hidden');
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const currentTab = tabs[0];
            const currentUrl = currentTab.url;
            chrome.tabs.executeScript({ code: 'document.documentElement.outerHTML' }, (results) => {
                const htmlContent = results[0];
                seo(htmlContent, currentUrl);
            });
        });
    }
    location.reload
    document.getElementById('seo-checkbox').checked = true;
});