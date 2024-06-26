# Reginn
- Create a bookmark called "Reginn" (or whatever you want but it'd be nice) in your browser.
- Copy this code in the URL field :
```javascript=
javascript:(function(){var regex=/https%5C%3A%5C%2F%5C%2F%5Ba-z%2C-%5D%7B1%2C%7D%5C.facebook%5C.%5Ba-z%5D%7B1%2C%7D%28%3F%3A%5C%2F%28%3F%21tr%5C%3Fid%3D%29%5Ba-zA-Z0-9%3A%25_%2B.%2C%23%21%3F%40%26%3D-%5D%7B1%2C%7D%29%7B1%2C%7D%7Chttps%5C%3A%5C%2F%5C%2F%5Ba-z%2C-%5D%7B0%2C%7D%5C.%7B0%2C1%7Dyoutube%5C.%5Ba-z%5D%7B1%2C%7D%28%3F%3A%5C%2F%5Ba-zA-Z0-9%3A%25_%2B.%2C%23%3F%21%40%26%3D-%5D%7B1%2C%7D%29%7B1%2C%7D%7Chttps%5C%3A%5C%2F%5C%2F%5Ba-z%2C-%5D%7B0%2C%7D%5C.%7B0%2C1%7Dinstagram%5C.%5Ba-z%5D%7B1%2C%7D%5C%2F%5Ba-zA-Z0-9%3A%25_%2B.%2C%23%3F%21%40%26%3D-%5D%7B1%2C%7D%7Chttps%5C%3A%5C%2F%5C%2F%28%5Ba-z%2C-%5D%7B0%2C%7D%5C.%29%2Atwitter%5C.%5Ba-z%5D%7B1%2C%7D%5C%2F%5Ba-zA-Z0-9%3A%25_%2B.%2C%23%3F%21%40%26%3D-%5D%7B1%2C%7D%7Chttps%5C%3A%5C%2F%5C%2F%5Ba-z-%5D%7B1%2C%7D%5C.linkedin%5C.%5Ba-zA-Z0-9._-%5D%7B1%2C%7D%28%3F%3A%5C%2F%5Ba-zA-Z0-9-_.%5D%7B1%2C%7D%29%7B1%2C%7D%7Chttps%5C%3A%5C%2F%5C%2F%5Ba-z-%5D%7B1%2C%7D%5C.tiktok%5C.%5Ba-zA-Z0-9._-%5D%7B1%2C%7D%28%3F%3A%5C%2F%5Ba-zA-Z0-9-_.%40%5D%7B1%2C%7D%29%7B1%2C%7D%7Chttps%5C%3A%5C%2F%5C%2F%28%5Ba-z%2C-%5D%5C.%29%7B0%2C%7Dgithub%5C.%5Ba-z%5D%7B1%2C%7D%28%3F%3A%5C%2F%5Ba-zA-Z0-9%5D%7B1%2C%7D%29%7CG%5C-%5BA-Z0-9%5D%7B10%7D%7Cpub%5C-%5B0-9%5D%7B16%7D%7CUA%5C-%5B0-9-%5D%7B10%2C12%7D%7CGTM%5C-%5B0-9A-Z%5D%7B7%7D%7CAW%5C-%5B0-9A-Z%5D%7B16%7D%7C%28%3F%3C%21viewbox%3D%7CviewBox%3D%7C%5Cd%29%28%3F%21%28%3F%3A%28%3F%3A%5Cs%29%28%3F%3A%28%3F%3A%5B0-9%5D%28%3F%3A%5Cs%7C%5C-%29%29%7B3%2C%7D%29%28%3F%3A%5Cs%7C%29%29%29%28%28%28%5C%27%7C%5C%22%7C%5C%28%7C%5C%3E%7Ctel%3A%7Ctell%3A%7Cphone%3A%7Ctelephone%3A%7Ctelefon%3A%7CPHONE%3A%7CTELEPHONE%3A%7CTELEFON%29%7B1%7D%28%28%28%280%7C%5C%2B%29%28%5C%5B%7C%5C%28%29%5Cd%7B1%2C3%7D%28%5C%5D%7C%5C%29%29%29%7C0%7C%28%5C%2B%5Cs%7B0%2C1%7D%5Cd%7B1%2C4%7D%29%29%28%5Cs%7C-%29%7B0%2C1%7D%29%28%5Cd%28%5Cs%7C-%29%7B0%2C1%7D%29%7B9%2C10%7D%28%5C%27%7C%5C%22%7C%5C%29%7C%5C%3C%7C%5Cs%29%7B1%7D%29%7C%28%28%3F%21%28%28.%29%28%28%5Cd%28%5Cs%7C%5C-%29%29%7B3%2C%7D%29%28%5Cs%7C%29%29%29%28%28%5C%27%7C%5C%22%7C%5C%28%7C%5C%3E%7C%5Cs%7Ctel%3A%7Ctell%3A%7Cphone%3A%7Ctelephone%3A%7Ctelefon%3A%7CTEL%3A%7CTELL%3A%7CPHONE%3A%7CTELEPHONE%3A%7CTELEFON%3A%29%7B1%7D%28%28%28%28%28%28%5C%2B%29%28%5C%5B%7C%5C%28%7C%291%28%5C%5D%7C%5C%29%7C%29%29%7C%28%5C%28%7C%5C%5B%7C%291%28%5C%29%7C%5C%5D%7C%29%7C%5C%2B%29%28%5Cs%7C-%29%7B0%2C1%7D%29%28%5Cd%28%5Cs%7C-%29%7B0%2C1%7D%29%7B10%7D%29%7C%28%5C%5B%7C%5C%28%7C%29%5Cd%7B3%7D%28%5C%5D%7C%5C%29%7C%29%28-%7C%5Cs%29%5Cd%7B3%7D%28-%7C%5Cs%29%5Cd%7B3%2C4%7D%29%28%5C%27%7C%5C%22%7C%5C%29%7C%5C%3C%7C%5Cs%29%7B1%7D%29%29%7C%28%28tel%3A%7Ctell%3A%7Cphone%3A%7Ctelephone%3A%7Ctelefon%3A%7CTEL%3A%7CTELL%3A%7CPHONE%3A%7CTELEPHONE%3A%7CTELEFON%3A%29%28%5Cd%28-%7C%5Cs%7C%29%29%7B6%2C12%7D%28%5C%27%7C%5C%22%7C%5C%29%7C%5C%3C%7C%5Cs%29%29%29%7C%28%3F%3A%28%3F%21%5Ba-zA-Z0-9._-%5D%7B1%2C%7D%5C%40%5Ba-zA-Z0-9_-%5D%7B1%2C%7D%28%3F%3A%5C.%28%3F%3Apng%7Cjpg%7Cjpeg%7Cpdf%29%29%7B1%2C%7D%29%5Ba-zA-Z0-9._-%5D%7B1%2C%7D%5C%40%5Ba-zA-Z0-9_-%5D%7B1%2C%7D%28%3F%3A%5C.%28%3F%3A%5Ba-z%5D%7B1%2C%7D%29%29%7B1%2C%7D%29%7Chttps%5C%3A%5C%2F%5C%2Fcdn%5C.%5Ba-z.%5D%7B1%2C%7D%5C%2F/g;var matches=Array.from(document.body.innerHTML.matchAll(regex));var uniqueMatches=[];matches.forEach(function(match){var cleanedMatch=match[0].replace(/[<>"'()]/g,'');if(!uniqueMatches.includes(cleanedMatch)){uniqueMatches.push(cleanedMatch);}});if(document.body.innerHTML.includes("wp-content")){var url=window.location.href;var domain=url.match(/https?:\/\/([^\/]+)/)[1];var tld=domain.match(/\.[^\.]+$/)[0];var domainWithoutTld=domain.replace(tld,"");uniqueMatches.push("SITE WORDPRESS : https://"+domainWithoutTld+tld+"/wp-json/wp/v2/users");}if(uniqueMatches.length>0){alert(uniqueMatches.join("\n"));}else{alert("No interesting datas found.");}})();
```
- save the bookmark.
- click on the bookmark when you are on your beloved website.


Thanks to [OSINT Newsletter](https://github.com/The-OSINT-Newsletter) and its "bouncer" tool for the bookmark idea.
