var userListData = {};
window.onload = utilityFunction;

function utilityFunction(){
    populateApp(indexPage, "/cars")
}


var indexPage = function( data ) {
    // Empty content string
    var tableContent = '';
    userListData = data;
    var dataLength = data.length
    var isEven = function(){
    	return dataLength%2 == 0;
    }
    // For each item in our JSON, add a table row and cells to the content string
    index = 0
    var style = "";
    var inCart = false;
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
      tableContent += '<a href="#" class="show-car-info-modal" id= "usereww" rel ="'+ dataObj.id+'">'+(inCart ? '<button disabled>in cart</button>' : '<i class = "fa fa-shopping-cart" />') + '</a>';
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
  var id = this.rel;
  console.log(this.rel)
//   makeModal(thisUserName);
   row = resolveItem(userListData, id);
   window.localStorage.setItem("productId", row.id);
   window.location.href = "/product.html?description:product_name=" + String(row.name)+"&"+"product_id=" + String(row.id);
};

$('main section#home-main div.api-content').on('click', 'article a.show-car-info-modal', cartModal);

function cartModal(event){
  // Prevent Link from Firing
  event.preventDefault();

  // Retrieve id from link rel attribute
  var thisCarId= this.rel;
  makeModal(thisCarId);
}

function resolveItem(data, selectedId){
  var id = selectedId
	  // Get Index of object based on id value
  var arrayPosition = data.findIndex(x => x.id === parseInt(id)) // map(function(arrayItem) { return arrayItem._id; }).indexOf(thisId);
  return data[arrayPosition];
}

function makeModal(thisId){
  var data = userListData; selectedId = thisId;
  var thisUserObject = resolveItem(data, selectedId)
  var span = document.getElementsByClassName("close")[0];

  openModal(thisUserObject);
  var modal = document.getElementById("myModal");
  var keepOpen = document.getElementById("keepOpen");
  var span = document.getElementsByClassName("close")[0];

  modal.addEventListener('click', rootClick);
  span.addEventListener('click', closeSpanBtn);
  keepOpen.addEventListener('click', modalClick);
}

function openModal(table) {
  var modal = document.getElementById("myModal");
  var white = document.getElementById("white");
  // var captionText = document.getElementById("caption");
  modal.style.display = "block";
  white.style.backgroundColor = 'white';
  // var g = document.querySelector('#myModal div.modal-content');
   $('#myModal div.modal-content').html(modalShowCarInfoOnSales(table));
  // captionText.innerHTML = "Hi there";
   
//     setTimeout(function(){delayEditBtn();}, 500)
    //$('#myModal div.modal-content').on('click', 'article a.gotoorder', linkToOrder);
   document.querySelector("a#gotoorder").addEventListener('click', linkToOrder);
}


function rootClick() {
  var modal = document.getElementById("myModal");
  //modalRoot.classList.remove('visible');
  modal.style.display = "none";
}

function closeSpanBtn(){
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}  

function modalClick(e) {
	e.preventDefault();
	e.stopPropagation();
	e.stopImmediatePropagation();
	return false;
}

function modalShowCarInfoOnSales(table){
  var content = "";
      content += '<article class="padding-to-30 set-modal">';
      content += '<a href="#" class=""><img src="'+ table.img +'" alt='+makeReadable(table.name)+'></a>';      
      content += '<a class="show-car-info-modal0">on Sale</a>';
      content += '<p><span>' +makeReadable(table.name)+ '</span>'+ " N"+ makeReadable(table.Price)+ '</p></article>'
      content += '<div class="clear-fix"></div>'
      content += '<a href="" class="full-width go-to-order" id="gotoorder" rel = "'+table.id+'">Go to Order Page</a>';
      content += '<a href="" class="full-width" role="button" onclick = "closeSpanBtn(this)">Back to Product</a>';
  return content;
}

// var delayEditBtn = function(){

// }

//"/Order.html/?product_Id="' + table.id + '"

function linkToOrder(event){
   event.preventDefault()
   id = this.rel;
   //console.log("------------",id)

   row = resolveItem(userListData, id);
   window.localStorage.setItem("productId", row.id);
   window.location.href = "/order.html?product_name=" + String(row.name)+"&"+"product_id=" + String(row.id);
   
}
