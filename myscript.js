var passwordsChanged = [];

document.onkeyup=function(e){
  var e = e || window.event; // for IE to cover IEs window event-object
  if(e.ctrlKey && e.shiftKey && e.which == 85) {
  	if (passwordsChanged.length == 0) {
  		passwordsChanged = document.querySelectorAll("input[type=password]")

  		passwordsChanged.forEach(function(element){ element.type='text';})
  	} else {
  		passwordsChanged.forEach(function(element){ element.type='password';})

  		passwordsChanged = [];
  	}
  }
};