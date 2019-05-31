window.onload = utilityFunction;

function utilityFunction(){
    populateApp(indexPage, "http://localhost:3000/cars")
}

var indexPage = function( data ) {
    // Empty content string
    var tableContent = '';
    userListData = data;

    // For each item in our JSON, add a table row and cells to the content string
    data.forEach(dataObj => {      
      // Stick our user data array into a userlist variable in the global object
      
      tableContent += '<article class="left">';
      tableContent += '<img src="'+ dataObj.img + '">';
      tableContent += '<p><span>' +dataObj.name+ '</span>'+ " N"+ dataObj.Price+ '</p></article>'
    });
    
    // Inject the whole content string into our existing HTML table
    console.log("ldero", tableContent);
   $('main section#home-main div.api-content').html(tableContent);
  }
