var imageCount = 1;
var total = 12;

function photo(x) {
	var image = document.getElementById('sl_img');
	imageCount = imageCount + x;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "slider_img/pic ("+ imageCount +").jpg";
	}
	
window.setInterval(function photoA() {
	var image = document.getElementById('sl_img');
	imageCount = imageCount + 1;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "slider_img/pics"+ imageCount +").jpg";
	},5000);
	
