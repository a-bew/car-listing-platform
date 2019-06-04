window.onload = utilityFunctionOrder;

function utilityFunctionOrder(){
	var id = localStorage.getItem("productId");
    populateApp(productPage, `http://localhost:3000/cars/${id}`);
}

var productPage = function(data){
	console.log(data)
}