(function() {
  let title = "WELCOME TO THE SHARK ZONE • ";

  function main() {
    title = title.slice(1) + title.slice(0, 1);
    window.title = title;
  }

  window.onload = function () {
    console.log("owo what's this??");
    window.title = title;

    main();
    setInterval(main, 1000);
  }
})();
