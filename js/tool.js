(function() {
	'use strict';
	var app = angular.module('tool', ['angular.drag.resize', 'colorpicker']);
	app.controller('ToolCtrl', ['$scope', '$document', function ($scope, $document) {
		$scope.color = '#00FF00';
		$scope.getStyle = function() {
			var style = {background: $scope.color};
			return style;
		}
		$scope.parseColor = function() {
			var strColor = $scope.color;
			var r = parseInt(strColor.substring(1, 3), 16)/255;
			var g = parseInt(strColor.substring(3, 5), 16)/255;
			var b = parseInt(strColor.substring(5, 7), 16)/255;
			return {
				r: r,
				g: g,
				b: b
			};
		}

		$scope.initSizing = function() {
			console.log('initSizing');
			var canvas = $document[0].getElementById('target');
			var container = $document[0].getElementById('container');
			canvas.style.width = container.width;
			canvas.style.height = container.height;
		}
		$scope.initSizing();
		$scope.chroma = function() {
			var seriously, source, target, chroma;
			if (Seriously.incompatible('camera')) {
				document.body.appendChild(document.createTextNode('Sorry, your browser does not support camera.'));
				document.querySelector('canvas').style.display = 'none';
				return;
			}
			// construct our seriously object
			seriously = new Seriously();
			// time to get serious
			source = seriously.source('camera');
			target = seriously.target('#target');
			chroma = seriously.effect('chroma');
			// connect all our nodes in the right order
			chroma.source = source;
			target.source = chroma;
			var color = $scope.parseColor();
			console.log('color', color);
			chroma.screen = [color.r, color.g, color.b, 1];
			seriously.go();
		}

		$scope.chroma();
		$scope.apply = function() {
			$scope.chroma();
		}

		$scope.$watch('color', function(){
			$scope.chroma();
		});
	}]);
})();
