function responseListener() {
  // get required dom elements
  let statusElement = document.getElementById('text37');
  let commissionFormContainer = document.getElementById('container03');
  let commissionClosedContainer = document.getElementById('container04');

  let response = JSON.parse(this.responseText);
  let description = response.desc.toLowerCase();
  statusElement.innerHTML = `Status: ${description}`;

  // show/hide commission form container based on status
  let commissionsOpen = description.includes('open');
  commissionFormContainer.style.display = commissionsOpen ? 'inline' : 'none';
  commissionClosedContainer.style.display = !commissionsOpen ? 'inline' : 'none';
}

function createRequest() {
  let req = new XMLHttpRequest();
  req.addEventListener('load', responseListener);
  // if for some reason i change the trello status card name, i'll have to update this endpoint here
  req.open('GET', 'https://trello.com/card/602c0c00f788320d4df57d97/status.json');
  return req;
}

function main() {
  let req = createRequest();
  req.send();
}

window.onload = function() {
  // owo
  console.log("owo what's this??");

  // get element references to commission form containers
  let commissionFormContainer = document.getElementById('container03');
  let commissionClosedContainer = document.getElementById('container04');

  // initially hide commission form containers onload
  commissionFormContainer.style.display = 'none';
  commissionClosedContainer.style.display = 'none';

  // get commission status and fetch status every 60 seconds
  main();
  setInterval(main, 60000);
}