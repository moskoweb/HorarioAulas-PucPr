App.factory('Aulas', function($http, $filter){
	return {
		get: function(){
			return $http.get('db/db.json');    
		},
		getId: function(id, cb){
			$http.get('db/db.json').success(function(data){
			var result = $filter('filter')(data,{
            		id: id
          		})[0];
			cb(result);
			});
		}
	}
});




