(function() {
	'use strict';
	var app = angular.module('tool', ['angular.drag.resize', 'colorpicker']);
	app.controller('ToolCtrl', ['$scope', function ($scope) {
		var gUM = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

		$scope.color = '#00FF00';

		$scope.debug = function() {
			console.log('$scope.color', $scope.color);
		}

		$scope.getStyle = function() {
			var style = {background: $scope.color};
			return style;
		}
		$scope.parseColor = function() {
			//var r =
		}
		var s = Seriously();
		var target = s.target('#canvas');

		gUM.call(navigator, { video: true }, function(stream) {
			function resize() {
				target.height = video.videoHeight;
				target.width = video.videoWidth;
			}

			if (window.webkitURL) {
				video.src = window.webkitURL.createObjectURL(stream);
			} else {
				video.src = stream;
			}

			//webCamStream = stream;

			video.play();
			if (video.videoWidth) {
				resize();
			}
			video.onloadedmetadata = video.onplay = resize;
			//source.source = video;
		}, function() {
			console.log('getUserMedia failed');
		});

		// var seriously, source, target, chroma;
		// if (Seriously.incompatible('camera')) {
		// 	document.body.appendChild(document.createTextNode('Sorry, your browser does not support camera.'));
		// 	document.querySelector('canvas').style.display = 'none';
		// 	return;
		// }
		// // construct our seriously object
		// seriously = new Seriously();
		// // time to get serious
		// source = seriously.source('camera');
		// console.log('source', source);
		// target = seriously.target('#target');
		// //edge = seriously.effect('edge');
		// chroma = seriously.effect('chroma');
		// // connect all our nodes in the right order
		// chroma.source = source;
		// target.source = chroma;
		// //chroma.screen = [r, g, b, 1];
		// seriously.go();


	}]);
})();
