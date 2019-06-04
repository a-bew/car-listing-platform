// DOM Ready =============================================================


function httpCrossBrowser(http_request){
  try{
    // Opera 8.0+, Firefox, Chrome, Safari
    http_request = new XMLHttpRequest();
  }catch (e) {
	// Internet Explorer Browsers
	try{
	  http_request = new ActiveXObject("Msxml2.XMLHTTP");		
	}catch (e) {	
	  try{
	    http_request = new ActiveXObject("Microsoft.XMLHTTP");
	  }catch (e) {
	    // Something went wrong
	    alert("Your browser broke!");
	    return false;
	  }				
	}
  }
  return http_request
}

function populateApp(dataSet, apiEndpoint){

   var data_file =  apiEndpoint;
   var http_request = new XMLHttpRequest();
   
   httpCrossBrowser(http_request);

   http_request.onreadystatechange = function(){
    	if (http_request.readyState == 4) {
    		// Javascript function JSON.parse to parse data
    		var jsonObj = JSON.parse(http_request.responseText);

    		// jsonObj variable now contains the data structure and can 
    		// be accessed as jsonObj.name and json.country

    		// document.getElementById("Name").textContent = jsonObj.name;
    		// document.getElementById('Country').textContent = jsonObj.country;
    		console.log(".....................er")
    		http_request.status === 200 ? console.log(http_request.responseText) : console.error('error')
//    	    dataSet(eval(http_request.responseText))
            dataSet(jsonObj);
    	}
    } 

    http_request.open("GET", data_file, true);
    http_request.send();
}