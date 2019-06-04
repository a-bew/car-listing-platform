window.onload = utilityFunctionOrder;

function utilityFunctionOrder(){
	var id = localStorage.getItem("productId");
    populateApp(orderPage, `http://localhost:3000/cars/${id}`);
}

var orderPage = function(data){
	console.log(data)
}