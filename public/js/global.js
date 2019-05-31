// DOM Ready =============================================================

window.onload=utilityglobal();

function utilityglobal(){
	updateMenu()
}

function updateMenu(){
    var menus = document.querySelectorAll("a"); 
    var menuClicked = "";
  let menuName;   		
   	for (var elem of Array.from(menus)){
   		if (elem.addEventListener){
    	      elem.addEventListener("click", (event)=>{
    		console.log(event)
    		var node = event.target
    		menuName = node.parentNode.getAttribute("data-menu") 
  	         node.parentNode.style.backgroundColor = "white";
  	         node.parentNode.style.color = "white";
             menuClicked = menuName;
			for (var elem of Array.from(menus)){
			  if (elem.parentNode.hasAttribute("data-menu")){
			      if (menuName != elem.parentNode.getAttribute("data-menu")){
			         elem.parentNode.style.backgroundColor = "green";
			         elem.parentNode.style.color = "yellow";	      	
			      } 			
			    }
			}

            event.preventDefault()
//			selectMenuUpdate(menuClicked);
   		
  	    })
    }
  }
}

function selectMenuUpdate(menuItem){
  var menus = {"register": registerBuyer(),
    "login": logBuyer(),
    "buy": function(){}, 
  	"sell": function(){},
  	"search": function(){},
  	"contact": function(){},
  	"home": function(){}
  }
  allMenus = Object.keys(menus)
  try{
   	  i = allMenus.indexOf(menuItem)
	  console.log(menuItem[i][menuItem])
	  result = menuItem[i][menuItem];
	  if (result){
	  	return result;
	  }
	  return  	
  } finally {

  }
  
}
