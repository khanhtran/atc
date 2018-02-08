(function() {
	'use strict';
  var app = angular.module('tool', ['angular.drag.resize']);
  app.run(function($rootScope) {
    var seriously, // the main object that holds the entire composition
			source, // wrapper object for source video
			edge, // edge detection effect
			target; // a wrapper object for our target canvas

		if (Seriously.incompatible('camera')) {
			document.body.appendChild(document.createTextNode('Sorry, your browser does not support getUserMedia'));
			document.querySelector('canvas').style.display = 'none';
			return;
		}

		// construct our seriously object
		seriously = new Seriously();

		// time to get serious
		source = seriously.source('camera');
		target = seriously.target('#target');
		edge = seriously.effect('edge');

		// connect all our nodes in the right order
		edge.source = source;
		target.source = edge;

		seriously.go();
  });
})();
