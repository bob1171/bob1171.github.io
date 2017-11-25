var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", 'https://freegeoip.net/json/', true); // true for asynchronous 
    xmlHttp.send(null);
    document.getElementById('ip').innerHTML = xmlHttp.responseText
