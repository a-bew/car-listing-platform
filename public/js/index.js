window.onload = utilityFunction;

function utilityFunction(){
    populateApp(indexPage, "http://localhost:3000/cars")
}

var makeReadable = function( readable ){
  return readable.replace("--", " ")
}
var indexPage = function( data ) {
    // Empty content string
    var tableContent = '';
    userListData = data;
    var dataLength = data.length
    var isEven = function(){
    	return dataLength%2 == 0
    }
    // For each item in our JSON, add a table row and cells to the content string
    index = 0
    while(index<data.length) {     
      dataObj=data[index]

      if (!isEven()){
         if (index == dataLength-1){
            console.log(index)
         	break;
         }
      } 
      // Stick our user data array into a userlist variable in the global object
      
      tableContent += '<article class="left">';
      tableContent += '<img src="'+ dataObj.img + '">';
      tableContent += '<p><span>' +makeReadable(dataObj.name)+ '</span>'+ " N"+ makeReadable(dataObj.Price)+ '</p></article>'
      index++;
    };
    
    // Inject the whole content string into our existing HTML table
    console.log("ldero", tableContent);
   $('main section#home-main div.api-content').html(tableContent);
  }
