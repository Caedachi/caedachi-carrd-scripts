(function() {
  let title = "• WELCOME TO THE SHARK ZONE ";
  title = title.replaceAll(' ', '\xa0');

  function main() {
    title = title.slice(2) + title.slice(0, 2);
    document.title = title;
  }

  window.onload = function () {
    console.log("owo what's this??");
    document.title = title;

    main();
    setInterval(main, 750);
  }
})();
