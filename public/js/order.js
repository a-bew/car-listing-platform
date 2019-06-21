window.onload = utilityFunctionOrder;

function utilityFunctionOrder(){
	var id = localStorage.getItem("productId");
    populateApp(orderPage, `/cars/${id}`);
}

var orderPage = function(data){
	console.log(data)
}