define([ /* modules */ ], function() {

	vat getMsg = function() {
  		var message = "Hello Friend";
  		return message;
	}

	// публичные методы и свойства
  	return {
    	init: getMsg();
  	}
});