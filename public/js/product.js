window.onload = utilityFunctionOrder;

function utilityFunctionOrder(){
	var id = localStorage.getItem("productId");
    populateApp(productPage, `http://localhost:3000/cars/${id}`);
}

var productPage = function(data){
	console.log(data)
    var content ="";
	var productData = data;

    content += '<section>';
	content += '<h2>'+makeReadable(productData.name)+'</h2>';
	content += '<article class="product-img left padding-to-30">';
	content += '<img src="'+productData.img+'" alt="'+productData.name+'">';       	  		
    content += '</article>';
    content += '<article>';      	     	
    content +=   '<div class="product-desc right">';       	
	    content +=   '<p><strong>Model:</strong><span>'+productData.modelId+'</span><br>'
		content +=     '<strong>Made By:</strong><span>'+productData.make+'</span><br>'
		content +=     '<strong>Price:</strong><span>'+productData.Price+'</span><br>'
	    content +=     '<strong>About phone</strong><br>'
		content +=     '<span>'
	    content +=       'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';    	
	    content +=     '</span><br>';	     			
		content +=     '<BUTTON>Back To Products</BUTTON><BUTTON>Order Now</BUTTON>';
	    content +=	  '</p>';
    content +=	  '</div>';
    content +=  '</article>';
    content +=  '</section>';

    $('div.container').html(content);
}