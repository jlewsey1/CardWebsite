var items = document.getElementsByClassName('test');
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener('click', printDetails);
}

function printDetails(e) {
  alert("Object was clicked");
}