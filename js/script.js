todolist = angular.module("todolist", []);
todolist.controller("t_con", function($scope) {
	$scope.list = ["Go Shopping", "Buy a laptop", "Go home", "Rest"];
	$scope.add_item = function() {
		$scope.error_msg = "";
		if (!$scope.get_item) {
			$scope.error_msg = "You entered a blank entry. This is not allowed."; return;
		}
		if ($scope.list.indexOf($scope.get_item) == -1) {
			$scope.list.push($scope.get_item);
		} else {
			$scope.error_msg = "You entered a duplicate entry. This is not allowed.";
		}
	}
	$scope.del_item = function(del_id) {
		$scope.error_msg = "";
		$scope.list.splice(del_id, 1);
	};
});
