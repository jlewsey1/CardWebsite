var items = document.getElementsByClassName('IMG');
for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', test);
}

function printDetails(e) {
    alert("Object was clicked");
}
/*function test() {
    items[0].style.width = '300px';
    items[0].style.height = 'auto';
}*/