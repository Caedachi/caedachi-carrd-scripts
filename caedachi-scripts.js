(function() {
  let owo = [
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

  let title = "• WELCOME TO THE SHARK ZONE ".replaceAll(' ', '\xa0');

  function main() {
    title = title.slice(2) + title.slice(0, 2);
    document.title = title;
  }

  window.onload = function () {
    console.log(owo.join('\n'));
    console.log("what's this??");
    document.title = title;

    main();
    setInterval(main, 750);
  }
})();

