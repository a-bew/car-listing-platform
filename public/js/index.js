var userListData = {};
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
    var style = "";
    var inCart = true;
    var disabled=(inCart?true:false);

    while(index<data.length) {     
      dataObj=data[index]

      if (!isEven()){
         if (index == dataLength-1){
            console.log(index)
         	break;
         }
      } 

      if ((index+1)%2 != 0){
        style = "left";
      } else {
        style ="right";
      }

      // Stick our user data array into a userlist variable in the global object
      
      tableContent += '<article class="'+style+' padding-to-30">';
      tableContent += '<a href="#" class="show-car-info-index" rel= "'+ dataObj.id+'"><img src="'+ dataObj.img +'"></a>';      
      tableContent += '<a href="#" class="show-car-info-modal" id= "usereww" rel ="'+ dataObj.id+'">'+(inCart ? '<span class="text-capitalize mb-0 card-img-top" disabled>in cart</span>' : '<i class = "fa fa-shopping-cart" />') + '</a>';
      tableContent += '<p><span>' +makeReadable(dataObj.name)+ '</span>'+ " N"+ makeReadable(dataObj.Price)+ '</p></article>'

      index++;
    };
    
    // Inject the whole content string into our existing HTML table
    console.log("ldero", tableContent);
   $('main section#home-main div.api-content').html(tableContent);
}

//var showCarInfoIndex = document.querySelectorAll("a.show-car-info-index");
$('main section#home-main div.api-content').on('click', 'article a.show-car-info-index', showCarInfoIndex);

function showCarInfoIndex(event) {
  console.log("================welcome======================")
  // Prevent Link from Firing
  event.preventDefault();

  // Retrieve id from link rel attribute
  var thisUserName = this.rel;
  console.log(this.rel)
   makeModal(thisUserName);
};

$('main section#home-main div.api-content').on('click', 'article a.show-car-info-modal', cartModal);

function cartModal(event){
  console.log("================welcome======================")
  // Prevent Link from Firing
  //event.preventDefault();

  // Retrieve id from link rel attribute
  var thisUserName = this.rel;
  console.log(thisUserName, "get")
}
