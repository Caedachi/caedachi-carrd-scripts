(function() {
  var owo = [
     "    ,o888888o.  `8.`888b                 ,8'  ,o888888o.",
     " . 8888     `88. `8.`888b               ,8'. 8888     `88.",
     ",8 8888       `8b `8.`888b             ,8',8 8888       `8b",
     "88 8888        `8b `8.`888b     .b    ,8' 88 8888        `8b",
     "88 8888         88  `8.`888b    88b  ,8'  88 8888         88",
     "88 8888         88   `8.`888b .`888b,8'   88 8888         88",
     "88 8888        ,8P    `8.`888b8.`8888'    88 8888        ,8P",
     "`8 8888       ,8P      `8.`888`8.`88'     `8 8888       ,8P",
     " ` 8888     ,88'        `8.`8' `8,`'       ` 8888     ,88'",
     "    `8888888P'           `8.`   `8'           `8888888P'"
  ];

  var title = '• WELCOME TO THE SHARK ZONE '.replaceAll(' ', '\xa0');
  var commissionTextId = 'text09';

  function scrollTitle() {
    title = title.slice(2) + title.slice(0, 2);
    document.title = title;
  }

  function responseListener() {
    let commissionText = document.getElementById(commissionTextId);
    let response = JSON.parse(this.responseText);
    let status = response.desc.toLowerCase();
    commissionText.innerHTML = `Commissions: ${status}`;
  }

  function createRequest() {
    let req = new XMLHttpRequest();
    req.addEventListener('load', responseListener);
    req.open('GET', 'https://trello.com/card/602c0c00f788320d4df57d97/status.json');
    return req;
  }

  window.onload = function () {
    console.log(owo.join('\n'));
    console.log("what's this??");
    document.title = title;

    let req = createRequest();
    req.send();

    scrollTitle();
    setInterval(scrollTitle, 1000);
  }
})();

