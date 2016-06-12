
"use strict";

angular.module('pads.funnyClick', ['pads.eventBubbling'])
	.directive('padsFunnyClick', function ($window, $timeout, $padsEventBubbling) {
		return {
			restrict: 'E',
			template: '<div class="funny-click" ng-repeat="click in clicks" ng-style="{ left: click.offsetX, top: click.offsetY }"></div>',
			link: function ($scope, $element, attributes) {
				var imageWidth = Math.ceil(attributes.imageWidth / 2),
					imageHeight = Math.ceil(attributes.imageHeight / 2),
					distMin = Math.round(attributes.distMin),
					distMax = Math.round(attributes.distMax);

				$scope.clicks = [];

				$padsEventBubbling.on('pads.funnyClick', function ($event) {
					var angle = 2 * Math.PI * Math.random(),
						distance = distMin + distMax * Math.random(),
						offsetX = Math.sin(angle) * distance,
						offsetY = Math.cos(angle) * distance,
						width = $window.innerWidth - imageWidth,
						height = $window.innerHeight - imageHeight;

					offsetX += $event.clientX;
					offsetY += $event.clientY;

					offsetX = Math.max(imageWidth, Math.min(offsetX, width));
					offsetY = Math.max(imageHeight, Math.min(offsetY, height));

					$scope.clicks.push({
						offsetX: offsetX,
						offsetY: offsetY
					});

					$timeout(function () {
						$scope.clicks.shift();
					}, attributes.duration);

					$scope.bodyClickCallback && $scope.bodyClickCallback();
				})
			}
		};
	});