/*Slider function*/

let image_count = 1;

let total = 3;

function slider(){

    var imageSelected = document.querySelector("#image");

    let active = 
    setInterval(function activeSlider() {
        image_count++;
		if(image_count > total){
			image_count = 1;      // formally -total-
		}
        imageSelected.src = "images/" + image_count + ".jpg";       
    }, 2000)


	let slide = function(x){
	    clearInterval(active);
		image_count = image_count + x;
		if(image_count > total){
			image_count = 1;
		} else if(image_count < 1){
			image_count = 3;
		}
		imageSelected.src = "images/" + String(image_count) + ".jpg";
	}

    let slideLeft = document.querySelector("#slide2left");
    if (slide2left.addEventListener){
	    slide2left.addEventListener("click", function(event) {
	        clearInterval(active);
	        slide(-1)
	        event.preventDefault();
	    }, false)
	}

    let slideRight = document.querySelector("#slide2right"); 
    if (slideRight.addEventListener){
	    slideRight.addEventListener("click", function(event) {
	        clearInterval(active);
    	    slide(1)
	        event.preventDefault();
	    }, false)
	}

}

window.onload =slider; 