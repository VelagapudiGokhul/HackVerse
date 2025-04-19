const unsafeDomains = [
    "ucoz.com", "17ebook.co", "sapo.pt", "aladel.net", "bpwhamburgorchardpark.org",
    "clicnews.com", "amazonaws.com", "dfwdiesel.net", "divineenterprises.net", 
    "fantasticfilms.ru", "blogspot.de", "gardensrestaurantandcatering.com", 
    "ginedis.com", "gncr.org", "hdvideoforums.org", "hihanin.com", 
    "kingfamilyphotoalbum.com", "4shared.com", "likaraoke.com", "mactep.org", 
    "magic4you.nu", "sendspace.com", "marbling.pe.kr", "nacjalneg.info", 
    "pronline.ru", "purplehoodie.com", "qsng.cn", "comcast.net", "seksburada.net", 
    "sportsmansclub.net", "stock888.cn", "fc2.com", "tathli.com", "teamclouds.com", 
    "texaswhitetailfever.com", "hotfile.com", "wadefamilytree.org", "xnescat.info", 
    "mail.ru", "yt118.com", "mcafee.com"
    ];

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const url = new URL(tabs[0].url);
    const domain = url.hostname.replace("www.", "");

    const statusEl = document.getElementById("status");

    if (unsafeDomains.includes(domain)) {
        statusEl.textContent = "⚠️ Unsafe Website";
        statusEl.className = "unsafe";
    } else {
        statusEl.textContent = "✅ Safe Website";
        statusEl.className = "safe";
    }
    });
