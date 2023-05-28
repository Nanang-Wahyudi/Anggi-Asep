const myKeysValues = window.location.search;
const urlParams = new URLSearchParams(myKeysValues);

const param = urlParams.get('name');

document.getElementById('result').innerHTML = param;