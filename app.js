angular.module('WikiSearch',['ngResource'])

.controller('WikiCtrl', function($scope, $resource){
	$scope.fullSearch = $resource('https://en.wikipedia.org/w/api.php' ,
		{format: 'json', action: 'query', list: 'search', srsearch: 'javascript', callback: 'JSON_CALLBACK'},
		{get: {method: 'JSONP'}});
	$scope.wikiData = $scope.fullSearch.get()
}) 




//after a few (3) letters, function is called to get opensearch query.
//open search is placed in 
//query search is requested with top open search item.



//---- User Experinece --------
//User can input a search term into box in center of page.
//Sugestion apper after a few letters.
//Pressing enter or clicking on suggestion:
	//brings up search terms.
	//places search box in header bar.
//Button in header brings random term.
