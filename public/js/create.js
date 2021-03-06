window.onload = utilityFunctionC;

var userListData = {}

function utilityFunctionC(){
  populateApp(populateCreateTable, "/cars")
  showCreate();

  // Linked Edit User button Click
  // Username link click
  setTimeout(function(){delayEditBtn();}, 500)

  // Add User button click
  document.querySelector('#btnCreateCar').addEventListener('click', addCar);

// Get the image and insert it inside the modal - use its "alt" text as a caption
//  setup();
}


// const get = document.getElementById.bind(document);
// const query = document.querySelector.bind(document);	

// function setup() {  
//   let modalRoot = get('modal-root');
//   let button = get('modal-opener');
//   let modal = query('.modal');
  
//   modalRoot.addEventListener('click', rootClick);
//   button.addEventListener('click', openModal);
//   modal.addEventListener('click', modalClick);
// }

// function rootClick() {
//   let modalRoot = get('modal-root');
//     modalRoot.classList.remove('visible');
// }
  
//   function openModal() {
//   let modalRoot = get('modal-root');
//     modalRoot.classList.add('visible');
//   }
  
//   function modalClick(e) {
//     e.preventDefault();
//     e.stopPropagation();
//     e.stopImmediatePropagation();
//     return false;
//   }

var populateCreateTable = function( data ) {
  // Empty content string
  var tableContent = '';
  userListData = data;
  // Create localStorage for item


//  localStorage.setItem("id", fullname)
//  localStorage.setItem("LUsername", username)
//  localStorage.setItem("LEmail", email)


    //const person1 = localStorage.getItem('Lfullname');


    // For each item in our JSON, add a table row and cells to the content string
    data.forEach(dataObj => {      
      // Stick our user data array into a userlist variable in the global object
      tableContent += '<tr>';
      tableContent += '<td><a href="#" class="linkshowuser" rel="' + dataObj.id + '">' + dataObj.name + '</a></td>';
      tableContent += '<td>' + dataObj.make + '</td>';
      tableContent += '<td>' + dataObj.modelId + '</td>';
      tableContent += '<td>' + dataObj.Price + '</td>';
      tableContent += '<td><a href="#" class="linkedituser" rel="' + dataObj.id + '">edit</a></td>';
      tableContent += '<td><a href="#" class="linkdeleteuser" rel="' + dataObj.id + '">delete</a></td>';
      tableContent += '</tr>';
    });

    
    // Inject the whole content string into our existing HTML table
    //console.log("ldero", tableContent);
    $('#createCarList table tbody').html(tableContent);
  }

var delayEditBtn = function(){
	$('#createCarList table tbody').on('click', 'td a.linkedituser', showUserInfoComplete);
}

var showCreate = function(){
	var content = "";
	content += '<h2 class="as-margin-bottom">Create Car Form</h2>'
    content+= '<form name="order" action="#" method="post">'	                
	content += '<p class="order"><input class="" type="text" id="name-of-car" name="name-of-car" placeholder="Name Of Car"/></p>'
	content += '<p class="order"><input class="" type="type" id="make-of-car" name="make-of-car" placeholder = "Make of Car"/></p>'
	content +=  '<p class="order"><input class="" type="text" id="model-of-car" name="model-of-car" placeholder="Model of Car"/></p>'
	content += '<p class="order"><input class="" type="text" id="yr-of-production-of-car" name="yr-of-production-of-car" placeholder="Year of Car Production"/></p>'
	content += '<p class="order"><input class="" type="text" id="img-link" name="img-link" placeholder="Url Link of Car"/></p>'
	content += '<p class="order"><input class="" type="text" id="price-of-car" name="price-of-car" placeholder="Price of Create Car"/></p>'
	content += '<button class="btn btn-primary" id="btnCreateCar" >Submit</button>'
	content += '</form>'
    $('div.api-content').html(content);
}

function showUserInfoComplete(event){
  // Prevent Link from Firing
  event.preventDefault();
  // Retrieve username from link rel attribute
//  console.log("rel", this.rel)
  var thisId = this.rel;
  
  // Get Index of object based on id value
  var arrayPosition = userListData.findIndex(x => x.id === parseInt(thisId)) // map(function(arrayItem) { return arrayItem._id; }).indexOf(thisId);
//  var ob = new Object(userListData)
//  var arrayPosition = ob.map(function(arrayItem) { return arrayItem.id; }).indexOf(thisId);
  
  // Get our User Object
  
  var thisUserObject = userListData[arrayPosition];
  console.log(userListData, thisId, arrayPosition, thisUserObject)
  
  //Populate Edit Box
//  table = hash.put(thisUserObject.username, thisUserObject._id)
//  document.querySelector('#editUser fieldset input#updateUserName').value = thisUserObject.username;
//  document.querySelector('#editUser fieldset input#updateUserEmail').value = thisUserObject.email;
//  document.querySelector('#editUser fieldset input#updateUserFullname').value = thisUserObject.fullname;
//  document.querySelector('#editUser fieldset input#updateUserAge').value = thisUserObject.age;
//  document.querySelector('#editUser fieldset input#updateUserLocation').value = thisUserObject.location;
//  document.querySelector('#editUser fieldset input#updateUserGender').value = thisUserObject.gender;
//  document.querySelector('#editUser fieldset button#btnUpdateUser').rel = thisUserObject._id;
    console.log("ididid id", thisUserObject.id)

 	var content = "";
	content += '<h2 class="as-margin-bottom">Edit Car Form</h2>'
    content+= '<form name="order" action="#" method="post">'	                
	content += '<p class="order"><input class="" type="text" id="name-of-car" name="name-of-car" placeholder="Name Of Car" value ="' +thisUserObject.name+'"/></p>'
	content += '<p class="order"><input class="" type="type" id="make-of-car" name="make-of-car" placeholder = "Make of Car" value ="' +thisUserObject.make+'"/></p>'
	content +=  '<p class="order"><input class="" type="text" id="model-of-car" name="model-of-car" placeholder="Model of Car" value ="' +thisUserObject.modelId+'"/></p>'
	content += '<p class="order"><input class="" type="text" id="yr-of-production-of-car" name="yr-of-production-of-car" placeholder="Year of Car Production" value ="' +thisUserObject.productionYr+'"/></p>'
	content += '<p class="order"><input class="" type="text" id="img-link" name="img-link" placeholder="Url Link of Car" value ="' +thisUserObject.img+'"/></p>'
	content += '<p class="order"><input class="" type="text" id="price-of-car" name="price-of-car" placeholder="Price of Create Car" value ="' +thisUserObject.Price+'"/></p>'
	content += '<button class="btn btn-primary" id="btnUpdateCar" data-rel ="'+thisUserObject.id+'">Submit</button>'
	content += '</form>'
 //   return content;
    $('div.api-content').html(content);
//
    // Add Update button click
    document.querySelector('#btnUpdateCar').addEventListener('click', editCar);

}

function editCar(event){
  event.preventDefault();
  // Super basic validation - increase errorCount variable if any fields are blank  
  errorCount = userValidation2();

  // Check and make sure errorCount's still at zero
  if(errorCount === 0) {
      var thisId = document.querySelector('button#btnUpdateCar').getAttribute("data-rel");

    // If it is, compile all user info into one object
    var newUser = {
      'name': document.querySelector('input#name-of-car').value,
      'make': document.querySelector('input#make-of-car').value,
      'modelId': document.querySelector('input#model-of-car').value,
      'productionYr': document.querySelector('input#yr-of-production-of-car').value,
      'img': document.querySelector('input#img-link').value,
      'Price': document.querySelector('input#price-of-car').value
    }
    

//    return newUser;
//    var _id = hash.get(newUser.username)

    console.log("id", thisId, newUser)
    var data_file = "/cars/"+thisId;
    var http_request = new XMLHttpRequest();
    http_request = httpCrossBrowser(http_request);

    http_request.open("PUT", data_file);
    http_request.setRequestHeader('Content-Type', 'application/json');
    http_request.onload = function(){
    	if (http_request.readyState === 4 && http_request.status === 200) {
    		var json = JSON.parse(http_request.responseText);
              // Clear the form inputs
              //document.querySelectorAll('#api-content p input').forEach(function(input, index){
              //   input.value = '';
              //});
              // Update the table
//              populateCreateTable();
//              showCreate();

    	}else {
		        // If something goes wrong, alert the error message that our service returned
               alert('Error: ' + http_request.msg);
    	}
    }

    var data = JSON.stringify(newUser)

    http_request.send(data);

    (function() { 
          populateApp(populateCreateTable, "/cars")
          showCreate();
        alert('updated!'); })()

  } else {
    // If errorCount is more than 0, error out
    alert('Please fill in all fields');
    return false;
  }
}

function userValidation2(){
  var errorCount = 0;
  document.querySelectorAll('#api-content p input').forEach(function(val, index) {
    if(val.value === '') { errorCount++; }
  });
  return errorCount;
}


// Add User
function validateInput(input){
  // using regex to strip and replace white space i.e replace ' ' with '--'
  var re = /\s+/;   //select one or more ' '/space character

  return input.replace(re, function(matchingText){
  	return '--'
  })
}

function addCar(event) {
  event.preventDefault();

  // Super basic validation - increase errorCount variable if any fields are blank  
  var errorCount = carValidation();

  // Check and make sure errorCount's still at zero
  if(errorCount === 0) {    

    // If it is, compile all car info into one object
    var newUser = {
      'name': validateInput(document.querySelector('input#name-of-car').value),
      'make': validateInput(document.querySelector('input#make-of-car').value),
      'modelId': validateInput(document.querySelector('input#model-of-car').value),
      'productionYr': validateInput(document.querySelector('input#yr-of-production-of-car').value),
      'img': validateInput(document.querySelector('input#img-link').value),
      'Price': validateInput(document.querySelector('input#price-of-car').value)
    }

    // Use AJAX to post the object to our adduser service
    var data_file =  "/cars";
    var http_request = new XMLHttpRequest();
    http_request = httpCrossBrowser(http_request);

    http_request.open("POST", data_file, true);
    http_request.setRequestHeader('Content-Type', 'application/json');
    http_request.onreadystatechange = function(){
    	if (http_request.readyState === 4 && http_request.status === 200) {
//    		var json = JSON.parse(http_request.responseText);
//    		if (json.msg === ""){
              // Clear the form inputs
//              document.querySelectorAll('api-content p input').forEach(function(input, index){
//                 input.value = '';
//              });

              // Update the table
//              populateApp(populateCreateTable, "http://localhost:3000/cars")

//    		} else {
		        // If something goes wrong, alert the error message that our service returned
//               alert('Error: ' + http_request.msg);
//    		}

    	}
    }

    console.log(newUser);
    var data = JSON.stringify(newUser)

    http_request.send(data);
    (function() { 
          populateApp(populateCreateTable, "/cars")
          showCreate();
        alert('created!'); })();
	 var data = JSON.parse(http_request.responseText);
	 console.log(data);
  }
  else {
    // If errorCount is more than 0, error out
    alert('Please fill in all fields');
    return false;
  }
};


function carValidation(){
  var errorCount = 0;
  document.querySelectorAll('#api-content p input').forEach(function(val, index) {
    if(val.value === '') { errorCount++; }
  });
  return errorCount;
}

// Delete User link click
$('#createCarList table tbody').on('click', 'td a.linkdeleteuser', deleteCar);


function ajaxFunction(url, callback, httpMethod, data) {

    var xhttp = new XMLHttpRequest();
    httpCrossBrowser(xhttp)
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
	      // Update the table
          populateApp(populateCreateTable, "/cars")
          showCreate();

          var jsonParse = JSON.parse(xhttp.responseText);

          callback(jsonParse);

        }
    }
    var data = JSON.stringify(data)

    xhttp.open(httpMethod, url, true);
    xhttp.send(data);

}

// Delete User
function deleteCar(event) {
  event.preventDefault();
  // Pop up a confirmation dialog
  var confirmation = confirm('Are you sure you want to delete this user?');

  // Check and make sure the user confirmed
  if (confirmation === true) {
  	console.log("rel", this.rel);
      var httpMethod = 'DELETE';
      var url = '/cars/' + this.rel;
      var deleteCallback = function() { alert('deleted!'); }

    ajaxFunction(url, deleteCallback, httpMethod)
  }
  else {
    // If they said no to the confirm, do nothing
    return false;
  }

};


// Username link click
$('#createCarList table tbody').on('click', 'td a.linkshowuser', showUserInfo);

// Show User Info
function showUserInfo(event) {
  
  // Prevent Link from Firing
  event.preventDefault();

  // Retrieve id from link rel attribute
  var thisUserName = this.rel;

   makeModal(thisUserName);
};



function makeModal(thisId){
	  // Get Index of object based on id value
  var arrayPosition = userListData.findIndex(x => x.id === parseInt(thisId)) // map(function(arrayItem) { return arrayItem._id; }).indexOf(thisId);
  var thisUserObject = userListData[arrayPosition];
//  console.log(thisId, arrayPosition, userListData)
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
   $('#myModal div.modal-content').html(modalShowCarInfoCreated(table));
  // captionText.innerHTML = "Hi there";
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

function modalShowCarInfoCreated(table){
  var content = "";
    content += '<h2>Car Info</h2>';
    content += '<div class="floatCarInModalLeft">';
   content += '<img src="'+table.img+'" alt="'+table.name+'" width="30px" heigth="30px">'
    content += '</div>'
    content += '<div id="carInfo" class="floatCarInfoInModalRight">';

    content +='<p >'; 
    content += '<strong>Name of Car:</strong><span class = "carInfoName">'+table.name+'</span><br>';
    content += '<strong>Make of Car:</strong><span class = "carInfoMake">'+ table.make+'</span><br>';
    content += '<strong>Model of Car:</strong><span class = "carInfoModel">'+table.modelId+'</span><br>';
    content += '<strong>Year of Car Production:</strong><span class = "carInfoYrOfProduction">'+table.productionYr+'</span><br>';
    content += '<strong>Url Link of Car:</strong><span class = "carInfoUrl">'+table.img+'</span><br>';
    content +='<strong>Price of Create Car:</strong><span class = "carInfoPrice">'+table.Price+'</span><br>';    
    content +='</p>';
    content += '</div>';
    content += '<button class="btn btn-info btn-block clear-fix container btn-width" onclick="closeSpanBtn(this)">Close</button>'
  return content;
}
