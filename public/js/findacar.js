window.onload = utilityFunctionFindCar;

function utilityFunctionFindCar(){
 apiData();
}


const optionsElements = function(table) {
//    console.log("caught", table, selectClassname)
    var optionElem = '';
	table.forEach(car => {
        optionElem += '<option value="'+ car["id"] +'">'+ car["name"] +'</option>';
	});
	return optionElem
}

const displayYears = function(table){
	console.log("-------------",table, "-----------------")
	from = table["from"];
	to = table["to"];
	table = years_(from, to);
//	console.log(from, to, table, selectClassname)
	return selectYears(table);
}

const selectYears = function(table) {
    var optionElem = '';

	table.forEach((car, index) => {
        optionElem += '<option value="'+ index +'">'+ car +'</option>';
	});
	return optionElem;
}

const selectAmount = function(table) {
    var optionElem = '';
    console.log(table)
	table.forEach((car, index) => {
        optionElem += '<option value="'+ index +'">'+ car +'</option>';
	});
	return optionElem;
}

const years_ = function(from, to){
	years = [];
	start = from;
	while(from<to+1){
      years.push(from);
      from++;
	}
	return years;
}

var findCarForm = function(data){
 	var [getMakes, getYears, getPrices] = [dict["1"], dict["2"], dict["3"]]

 	var inYears = displayYears(getYears);

    content = "";
    content += '<article>';
    content += '<form class="grid">';
    content += '<div class="make">';
    content += '<label>Make</label>';
    content += '<select class="select-make">';
    content += '<option value="" disabled selected>Any Make</option>';
    content += optionsElements(getMakes);
    content += '</select>'; 
    content += '</div>';
    content += '<div class="model">';
    content += '<label>Model</label>';
    content += '<select name="model" class="select-model"><option value="" disabled selected>Any Model</option></select>';                     
    content += '</div>';
    content += '<div class="year">';
    content += '<label>Year</label>';
    content += '<div class="grid-buttom">';                      
    content += '<select name ="from" id="selectYearFrom"><option value="" disabled selected>from</option>'
    content += inYears;  // from
    content += '</select>';
    content += '<select name ="to" id="selectYearTo"><option value="" disabled selected>To</option>';
    content += inYears;  // to
    content += '</select>'
    content += '</div>';
    content += '</div>';
    content += '<div class="price">';
    content += '<label>Price</label>';
    content += '<div class="grid-buttom">';
    content += '<select name="min" class="select-price-min"><option value="" disabled selected>Min</option>'
    content += selectAmount(getPrices);
    content += '</select>';
    content += '<select name="max" class="select-price-max"><option value="" disabled selected>Max</option>'
    content += selectAmount(getPrices);
    content += '</select>';                      
    content += '</div>';
    content += '</div>'
    content += '<button name="search" >Search</button>';
    content += '</form>';
    content += '</article>';

   $('main section#section-findacar').html(content)	
 }


dict = {};
var i=1;

const obj =(param, r)=>{
	dict[String(i++)] = param;
 	if (i === r){
       findCarForm(dict);
       slider();
 	}
}

const apiData = ()=>{
    //Populate .select-make
    populateApp(obj, `http://localhost:3000/make`);    
	// Populate .select-year-from
    populateApp(obj, `http://localhost:3000/year`);
	// Populate .select-price-min
    populateApp(obj, `http://localhost:3000/Price`);
    
}




