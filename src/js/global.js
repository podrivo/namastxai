var bodyArr = document.getElementsByTagName('body');
var headerArr = document.getElementsByTagName('header');

var body = bodyArr[0];
var header = headerArr[0];

header.onclick = function() {
  body.classList.toggle('teste');
};
