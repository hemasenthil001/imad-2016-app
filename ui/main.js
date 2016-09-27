console.log('Loaded!');

var text=document.getElementById('main-text');
text.innerHTML = 'new value';
var img = document.getElementById('main-img');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+10;
   img.style.marginLeft=marginLeft+ 'px'; 
}

img.onclick = function() {
    var interval=setInterval(moveRight,50);
    
};

//console.log('after onclick');