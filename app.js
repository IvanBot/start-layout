// require() is used to run immediate functionalities
// define() is used to define modules for use in multiple locations.

// loading libs
require.config({
	paths: {
		// jquery: 'libs/jquery/jquery',
    	// underscore: 'libs/underscore/underscore',
    	// backbone: 'libs/backbone/backbone'
	}
});

// start app
require(['views/main'], function(app) {
	app.init();
});