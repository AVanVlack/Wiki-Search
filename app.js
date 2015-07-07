angular.module('WikiSearch',['ngResource'])
.controller('WikiCtrl', function($scope, $resource){ 
	$scope.$watch('query', function(newValue, oldValue){
		if (newValue !== undefined){
			$scope.wiki = $resource('https://en.wikipedia.org/w/api.php' ,
				{action: 'opensearch', format: 'json', search: newValue, callback: 'JSON_CALLBACK'},
				{get: {method: 'JSONP', isArray: true, 
				transformResponse: function(data, header){
					dataSet = [];
					for(var i = 0; i <= data[1].length -1; i++){
						var d = {};
						d.name = data[1][i];
						d.snip = data[2][i];
						d.link = data[3][i];
						dataSet.push(d);
					}
					return dataSet;
				}}});
			$scope.wikiData = $scope.wiki.get()
			console.log($scope.wikiData)
		}
	})
}) 
