javascript:(function() {
    var currentPage = window.location.href,
        url = new URL(currentPage),
        params = new URLSearchParams(url.search),
        isPageReloaded = params.get('reloaded');

    if (currentPage.includes("instagram.com") && !isPageReloaded) {
        url.searchParams.set('reloaded', 'true');
        window.location.href = url.toString();
        return;
    }

    try {
        var platform = "",
            userId = "Not Found",
            displayName = "Not Found",
            username = "Not Found";

        if (currentPage.includes("twitter.com") || currentPage.includes("x.com")) {
            platform = "Twitter/X";
            var t = document.evaluate(
                '//script[@type="application/ld+json"]',
                document,
                null,
                XPathResult.ANY_TYPE,
                null
            ).iterateNext()?.textContent;

            if (t) {
                var n = JSON.parse(t);
                displayName = n.mainEntity?.name || "Not Found";
                userId = n.mainEntity?.identifier || "Not Found";
                username = n.mainEntity?.additionalName || "Not Found";
            }
        }

        else if (currentPage.includes("facebook.com")) {
            platform = "Facebook";
            var displayNameElement = document.querySelector('.x14qwyeo');
            if (displayNameElement) {
                var clone = displayNameElement.cloneNode(true);
                var unwantedElement = clone.querySelector('.xad227w');
                if (unwantedElement) {
                    unwantedElement.remove();
                }
                displayName = clone.textContent.trim();
            } else {
                displayName = "Not Found";
            }

            var pathParts = window.location.pathname.split('/');
            if (pathParts.length > 1) {
                var potentialUsername = pathParts[1];
                if (potentialUsername !== "profile.php") {
                    username = potentialUsername;
                } else {
                    username = "Not Found";
                }
            } else {
                username = "Not Found";
            }

            var o = document.documentElement.innerHTML,
                r = o.match(/"userID":"(\d+)"/);
            userId = r ? r[1] : "Not Found";
        }

        else if (currentPage.includes("instagram.com")) {
            platform = "Instagram";
            var a = document.documentElement.innerHTML,
                ids = [],
                regex = /"id":"(\d+)"/g,
                match;
            while ((match = regex.exec(a)) !== null) {
                ids.push(match[1]);
            }
            userId = ids.length >= 4 ? ids[3] : "Not Found";
            displayName = document.querySelector('div.x1e56ztr:nth-child(2) > span:nth-child(1)')?.textContent.trim() || "Not Found";
            username = document.querySelector('h2.x1lliihq > span:nth-child(1)')?.textContent.trim() || "Not Found";
        }

        else if (currentPage.includes("tiktok.com")) {
            platform = "TikTok";
            displayName = document.querySelector('h2[class*="H2ShareSubTitle"]')?.textContent.trim() ||
                        document.querySelector('h2[class*="ShareSubTitle"]')?.textContent.trim() ||
                        "Not Found";
            username = document.querySelector('h1[class*="H1ShareTitle"]')?.textContent.trim() ||
                    document.querySelector('h1[class*="ShareTitle"]')?.textContent.trim() ||
                    document.querySelector('div[class*="DivUserTextWrapper"] h1')?.textContent.trim() ||
                    "Not Found";
            var userIdElement = document.querySelector('#ProfilePage');
            if (userIdElement) {
                var userIdMatch = userIdElement.textContent.match(/userId=(\d+)/);
                userId = userIdMatch ? userIdMatch[1] : "Not Found";
            } else {
                var scriptContent = document.documentElement.innerHTML;
                var userIdMatch = scriptContent.match(/"user":{"id":"(\d+)"/);
                userId = userIdMatch ? userIdMatch[1] : "Not Found";
            }
        }

        else if (currentPage.includes("github.com")) {
            platform = "GitHub";
            var pathParts = url.pathname.split('/');
            username = pathParts[1] || "Not Found";
            displayName = document.querySelector('.vcard-fullname')?.textContent.trim() ||
                          document.querySelector('.vcard-names .vcard-name')?.textContent.trim() ||
                          username;
            userId = "";
        }

        else if (currentPage.includes("vk.com")) {
            platform = "VKontakte";
            var ownerPageNameElement = document.querySelector('h2.OwnerPageName');
            if (ownerPageNameElement) {
                displayName = ownerPageNameElement.textContent.trim();
                displayName = displayName.replace(/\s*last seen.*$/, '').trim();
            } else {
                displayName = document.querySelector('.page_name')?.textContent.trim() ||
                            document.querySelector('.page_header')?.textContent.trim() ||
                            document.querySelector('.page_title')?.textContent.trim() ||
                            "Not Found";
            }

            var potentialUserId = "Not Found";
            var pathParts = window.location.pathname.split('/');
            if (pathParts.length > 1) {
                var idFromUrl = pathParts[1];
                if (/^(id|club)?[^-]?\d+$/.test(idFromUrl)) {
                    potentialUserId = idFromUrl;
                }
            }
            if (potentialUserId === "Not Found") {
                var profileAvatarElement = document.querySelector('[id^="profile_avatar_"]');
                if (profileAvatarElement && profileAvatarElement.id) {
                    potentialUserId = profileAvatarElement.id.replace('profile_avatar_', '');
                }
            }
            if (potentialUserId === "Not Found") {
                var metaOgUrl = document.querySelector('meta[property="og:url"]');
                if (metaOgUrl) {
                    var content = metaOgUrl.getAttribute('content');
                    var idMatch = content.match(/\/((?:id|club)?[^-]?\d+)/);
                    if (idMatch) {
                        potentialUserId = idMatch[1];
                    }
                }
            }
            if (potentialUserId !== "Not Found" && !potentialUserId.startsWith('id') && !potentialUserId.startsWith('club')) {
                userId = 'id' + potentialUserId;
            } else {
                userId = potentialUserId;
            }

            var scriptElement = document.querySelector('body > script:nth-child(15)');
            if (scriptElement) {
                var scriptContent = scriptElement.textContent;
                var screenNameMatch = scriptContent.match(/"screen_name":"([^"]+)"/);
                if (screenNameMatch && screenNameMatch[1]) {
                    username = screenNameMatch[1];
                } else {
                    username = "Not Found";
                }
            } else {
                username = "Not Found";
            }
            if (username === userId) {
                username = "Not Found";
            }
        }

        else if (currentPage.includes("snapchat.com")) {
            platform = "Snapchat";
            displayName = document.querySelector('.Header_displayNameText__SpYqK')?.textContent.trim() ||
                          document.querySelector('.Heading_h400Emphasis__SQXxl > span:nth-child(1)')?.textContent.trim() ||
                          "Not Found";
            username = document.querySelector('span.Header_desktopSubscriberTextOnMedia__QEFdN:nth-child(1)')?.textContent.trim() ||
                       document.querySelector('.Heading_h500__7V1g9 > span:nth-child(1)')?.textContent.trim() ||
                       "Not Found";
            userId = "Not Available";
        }

        else if (currentPage.includes("youtube.com")) {
            platform = "YouTube";
            if (currentPage.includes("/@") || currentPage.includes("/c/") || currentPage.includes("/user/") || currentPage.includes("/channel/")) {
                displayName = document.querySelector('.dynamicTextViewModelH1 > span:nth-child(1)')?.textContent.trim() || "Not Found";
                username = document.querySelector('div.yt-content-metadata-view-model__metadata-row:nth-child(1) > span:nth-child(1) > span:nth-child(1)')?.textContent.trim() || "Not Found";
                var metaTag = document.querySelector('meta[itemprop="channelId"]');
                if (metaTag) {
                    userId = metaTag.getAttribute('content');
                } else {
                    var scriptContent = document.documentElement.innerHTML;
                    var channelIdMatch = scriptContent.match(/"channelId":"([^"]+)"/) ||
                                        scriptContent.match(/"externalId":"([^"]+)"/) ||
                                        scriptContent.match(/"UC[0-9A-Za-z_-]{22}"/);
                    userId = channelIdMatch ? channelIdMatch[1] : "Not Found";
                }
            } else {
                showModal("Error", "Not a YouTube profile page", "Not Found", "Not Found", currentPage);
                return;
            }
        }

        else if (currentPage.includes("t.me") || currentPage.includes("telegram.me")) {
            platform = "Telegram";
            var pathParts = url.pathname.split('/');
            username = pathParts[1] || "Not Found";
            displayName = document.querySelector('.tgme_page_title')?.textContent.trim() ||
                          document.querySelector('.tgme_header_user_name')?.textContent.trim() ||
                          username;
            userId = username;
        }

        else if (currentPage.includes("douyin.com")) {
            platform = "Douyin";
            var pathParts = url.pathname.split('/');
            username = pathParts[1] || "Not Found";
            displayName = document.querySelector('h1')?.textContent.trim() || "Not Found";
            var html = document.documentElement.innerHTML;
            var userIdMatch = html.match(/"user_id":\s*"(\d+)"/);
            userId = userIdMatch ? userIdMatch[1] : "Not Found";
        }

        else if (currentPage.includes("qq.com")) {
            platform = "QQ";
            var pathParts = url.pathname.split('/');
            username = pathParts[1] || "Not Found";
            displayName = document.querySelector('h1')?.textContent.trim() || "Not Found";
            var html = document.documentElement.innerHTML;
            var userIdMatch = html.match(/"uin":\s*(\d+)/);
            userId = userIdMatch ? userIdMatch[1] : "Not Found";
        }

        else if (currentPage.includes("ok.ru")) {
            platform = "OK.ru";
            displayName = document.querySelector('h1')?.textContent.trim() || "Not Found";
            var loginLink = document.querySelector('a[data-module="AuthLoginPopup"]');
            if (loginLink) {
                var stateParams = loginLink.getAttribute('data-state-params');
                var idMatch = stateParams.match(/"st-prm_friendId":"(\d+)"/);
                userId = idMatch ? idMatch[1] : "Not Found";
            } else {
                userId = "Not Found";
            }
        }

        else if (currentPage.includes("my.mail.ru")) {
            platform = "Mail.ru";
            var canonicalLink = document.querySelector('link[rel="canonical"]');
            if (canonicalLink) {
                var href = canonicalLink.getAttribute('href');
                var usernameMatch = href.match(/\/mail\/([^\/]+)\/?$/);
                username = usernameMatch ? usernameMatch[1] : "Not Found";
            }
            displayName = document.querySelector('h1')?.textContent.trim() || "Not Found";
            userId = "Not Available";
        }
        else {
            showModal("Error", "Not Found", "Not Found", "Not Found", currentPage);
            return;
        }

        if (currentPage.includes("instagram.com") && !isPageReloaded) {
            url.searchParams.set('reloaded', 'true');
            history.replaceState(null, null, url.toString());
        }

        showModal(platform, displayName, userId, username, currentPage);
    }
    
    catch (err) {
        showModal("Error", "Error fetching data", "Not Found", "Not Found", currentPage);
    }

function showModal(platform, displayName, userId, username, url) {

    var modalBackdrop = document.createElement('div');
    Object.assign(modalBackdrop.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.8)',
        zIndex: '99999',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif'
    });

    var modal = document.createElement('div');
    Object.assign(modal.style, {
        backgroundColor: '#242933',
        color: '#FFF',
        padding: '0',
        borderRadius: '10px',
        width: '90%',
        maxWidth: '500px',
        maxHeight: '90vh',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        display: 'flex',
        flexDirection: 'column'
    });

    var header = document.createElement('div');
    Object.assign(header.style, {
        backgroundColor: '#7c2929',
        padding: '12px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '10px 10px 0 0'
    });

    var title = document.createElement('h2');
    title.textContent = platform + ' User Details';
    Object.assign(title.style, {
        margin: '0',
        color: '#FFF',
        fontSize: '18px',
        fontWeight: '600'
    });

    var closeBtn = document.createElement('button');
    closeBtn.textContent = '×';
    Object.assign(closeBtn.style, {
        background: 'none',
        border: 'none',
        color: '#FFF',
        fontSize: '22px',
        cursor: 'pointer',
        padding: '0 5px 2px 5px',
        lineHeight: '1'
    });

    closeBtn.onclick = function() {
        document.body.removeChild(modalBackdrop);
    };

    header.appendChild(title);
    header.appendChild(closeBtn);
    modal.appendChild(header);

    var content = document.createElement('div');
    Object.assign(content.style, {
        padding: '20px',
        overflowY: 'auto',
        flex: '1'
    });

    var infoContainer = document.createElement('div');
    var displayNameDiv = document.createElement('div');
    displayNameDiv.style.marginBottom = '15px';

    var displayNameLabel = document.createElement('div');
    displayNameLabel.textContent = 'Display Name';
    Object.assign(displayNameLabel.style, {
        color: '#ccc',
        fontSize: '14px',
        marginBottom: '5px'
    });

    var displayNameValue = document.createElement('div');
    displayNameValue.textContent = displayName;
    Object.assign(displayNameValue.style, {
        background: '#343a47',
        padding: '10px',
        borderRadius: '5px',
        fontFamily: 'monospace',
        wordBreak: 'break-all',
        color: '#fff'
    });

    displayNameDiv.appendChild(displayNameLabel);
    displayNameDiv.appendChild(displayNameValue);
    infoContainer.appendChild(displayNameDiv);

    if (username !== "Not Found" && username !== displayName) {
        var usernameDiv = document.createElement('div');
        usernameDiv.style.marginBottom = '15px';

        var usernameLabel = document.createElement('div');
        usernameLabel.textContent = 'Username';
        Object.assign(usernameLabel.style, {
            color: '#ccc',
            fontSize: '14px',
            marginBottom: '5px'
        });

        var usernameValue = document.createElement('div');
        usernameValue.textContent = platform === "Twitter/X" ? "@" + username : username;
        Object.assign(usernameValue.style, {
            background: '#343a47',
            padding: '10px',
            borderRadius: '5px',
            fontFamily: 'monospace',
            wordBreak: 'break-all',
            color: '#fff'
        });

        usernameDiv.appendChild(usernameLabel);
        usernameDiv.appendChild(usernameValue);
        infoContainer.appendChild(usernameDiv);
    } else {
        var usernameDiv = document.createElement('div');
        usernameDiv.style.marginBottom = '15px';

        var usernameLabel = document.createElement('div');
        usernameLabel.textContent = 'Username';
        Object.assign(usernameLabel.style, {
            color: '#ccc',
            fontSize: '14px',
            marginBottom: '5px'
        });

        var usernameValue = document.createElement('div');
        usernameValue.textContent = '';
        Object.assign(usernameValue.style, {
            background: '#343a47',
            padding: '10px',
            borderRadius: '5px',
            fontFamily: 'monospace',
            wordBreak: 'break-all',
            color: '#fff'
        });

        usernameDiv.appendChild(usernameLabel);
        usernameDiv.appendChild(usernameValue);
        infoContainer.appendChild(usernameDiv);
    }

    if (platform !== "GitHub" && userId !== "Not Available" && userId !== "Not Found") {
        var userIdDiv = document.createElement('div');
        userIdDiv.style.marginBottom = '15px';

        var userIdLabel = document.createElement('div');
        userIdLabel.textContent = 'User ID';
        Object.assign(userIdLabel.style, {
            color: '#ccc',
            fontSize: '14px',
            marginBottom: '5px'
        });

        var userIdValue = document.createElement('div');
        userIdValue.textContent = userId;
        Object.assign(userIdValue.style, {
            background: '#343a47',
            padding: '10px',
            borderRadius: '5px',
            fontFamily: 'monospace',
            wordBreak: 'break-all',
            color: '#fff'
        });

        userIdDiv.appendChild(userIdLabel);
        userIdDiv.appendChild(userIdValue);
        infoContainer.appendChild(userIdDiv);
    } else {
        var userIdDiv = document.createElement('div');
        userIdDiv.style.marginBottom = '15px';

        var userIdLabel = document.createElement('div');
        userIdLabel.textContent = 'User ID';
        Object.assign(userIdLabel.style, {
            color: '#ccc',
            fontSize: '14px',
            marginBottom: '5px'
        });

        var userIdValue = document.createElement('div');
        userIdValue.textContent = '';
        Object.assign(userIdValue.style, {
            background: '#343a47',
            padding: '10px',
            borderRadius: '5px',
            fontFamily: 'monospace',
            wordBreak: 'break-all',
            color: '#fff'
        });

        userIdDiv.appendChild(userIdLabel);
        userIdDiv.appendChild(userIdValue);
        infoContainer.appendChild(userIdDiv);
    }

    var displayUrl = url.replace(/[?&]reloaded=true(&|$)/, '');
    var urlDiv = document.createElement('div');
    urlDiv.style.marginBottom = '15px';

    var urlLabel = document.createElement('div');
    urlLabel.textContent = 'URL';
    Object.assign(urlLabel.style, {
        color: '#ccc',
        fontSize: '14px',
        marginBottom: '5px'
    });

    var urlValue = document.createElement('div');
    Object.assign(urlValue.style, {
        background: '#343a47',
        padding: '10px',
        borderRadius: '5px',
        fontFamily: 'monospace',
        wordBreak: 'break-all'
    });

    var urlLink = document.createElement('a');
    urlLink.href = url;
    urlLink.target = '_blank';
    urlLink.textContent = displayUrl;
    Object.assign(urlLink.style, {
        color: '#4da6ff',
        textDecoration: 'none'
    });

    urlValue.appendChild(urlLink);
    urlDiv.appendChild(urlLabel);
    urlDiv.appendChild(urlValue);
    infoContainer.appendChild(urlDiv);

    var platformDiv = document.createElement('div');
    platformDiv.style.marginBottom = '15px';

    var platformLabel = document.createElement('div');
    platformLabel.textContent = 'Platform';
    Object.assign(platformLabel.style, {
        color: '#ccc',
        fontSize: '14px',
        marginBottom: '5px'
    });

    var platformValue = document.createElement('div');
    platformValue.textContent = platform;
    Object.assign(platformValue.style, {
        background: '#343a47',
        padding: '10px',
        borderRadius: '5px',
        fontFamily: 'monospace',
        wordBreak: 'break-all',
        color: '#fff'
    });

    platformDiv.appendChild(platformLabel);
    platformDiv.appendChild(platformValue);
    infoContainer.appendChild(platformDiv);
    content.appendChild(infoContainer);
    modal.appendChild(content);

    var footer = document.createElement('div');
    Object.assign(footer.style, {
        backgroundColor: '#242933',
        padding: '15px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid #343a47'
    });

    var credits = document.createElement('div');
    var creditsText = document.createElement('small');
    creditsText.style.color = '#999';
    creditsText.textContent = 'inspired by ';

    var creditsLink = document.createElement('a');
    creditsLink.href = 'https://tools.myosint.training/';
    creditsLink.target = '_blank';
    creditsLink.textContent = 'tools.myosint.training';
    Object.assign(creditsLink.style, {
        color: '#4da6ff',
        textDecoration: 'none'
    });

    creditsText.appendChild(creditsLink);
    credits.appendChild(creditsText);

    var buttonContainer = document.createElement('div');
    var copyBtn = document.createElement('button');
    copyBtn.textContent = 'Copy Data';
    Object.assign(copyBtn.style, {
        backgroundColor: '#7c2929',
        color: '#FFF',
        border: 'none',
        padding: '8px 15px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '14px',
        transition: 'background-color 0.2s'
    });

    copyBtn.onmouseover = function() {
        this.style.backgroundColor = '#9a3a3a';
    };

    copyBtn.onmouseout = function() {
        this.style.backgroundColor = '#7c2929';
    };

    copyBtn.onclick = function() {
        var textToCopy = displayName;
        if (username !== "Not Found" && username !== displayName) {
            textToCopy += "\t" + (platform === "Twitter/X" ? "@" + username : username);
        } else {
            textToCopy += "\t";
        }
        if (platform !== "GitHub" && userId !== "Not Available" && userId !== "Not Found") {
            textToCopy += "\t" + userId;
        } else {
            textToCopy += "\t";
        }
        textToCopy += "\t" + displayUrl.replace(/[?&]reloaded=true(&|$)/, '');
        textToCopy += "\t" + platform;

        navigator.clipboard.writeText(textToCopy).then(function() {
            copyBtn.textContent = '✓ Copied!';
            setTimeout(function() {
                copyBtn.textContent = 'Copy Data';
            }, 2000);
        }).catch(function() {
            var textarea = document.createElement('textarea');
            textarea.value = textToCopy;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            copyBtn.textContent = '✓ Copied!';
            setTimeout(function() {
                copyBtn.textContent = 'Copy Data';
            }, 2000);
        });
    };

    buttonContainer.appendChild(copyBtn);
    footer.appendChild(credits);
    footer.appendChild(buttonContainer);
    modal.appendChild(footer);

    modalBackdrop.appendChild(modal);
    document.body.appendChild(modalBackdrop);
}
})();
