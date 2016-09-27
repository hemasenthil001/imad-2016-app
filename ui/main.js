console.log('Loaded!');

var text=document.getElementById('main-text');
text.innerHTML = 'new value';
var img = document.getElementById('main-img');

img.onclick = function() {
    img.style.marginLeft='150px';
};
console.log('after onclick');