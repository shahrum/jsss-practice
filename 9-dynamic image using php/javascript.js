window.onload = function(){
	var slideshow = document.getElementsByClassName('slideshow').item(0);
	var train = slideshow.getElementsByClassName('train').item(0);

	var currentslide = 0;
	go2slide = function(n){
		if(n>list.length-1) n=0;
		if(n<0) n=list.length-1;
		train.style.left=(-450*n)+"px";
		list.item(currentslide).className="";
		list.item(n).className = "active";
		currentslide = n;
	}

	nextSlide = function(){
		go2slide(currentslide + 1);
	}
	prvSlide = function(){
		go2slide(currentslide-1);
	}

	var autoPlayIv = false;
	autoPlayStart = slideshow.onmouseout = function(){
		if(autoPlayIv) return;
		autoPlayIv = setInterval(nextSlide,2000);
	}

	autoPlayStop = slideshow.onmouseover =function(){
			clearInterval(autoPlayIv);
			autoPlayIv = false;
		}

	slideshow.getElementsByClassName('next').item(0).onclick = nextSlide;
	slideshow.getElementsByClassName('previous').item(0).onclick = prvSlide;

	var list = document.getElementsByClassName('btns').item(0).getElementsByTagName('li');
	for (var i = 0; i < list.length; i++) {
		(function(j){
				list.item(j).onclick = function(){
				go2slide(j);
			}
		})(i);
	};

	autoPlayStart();

}