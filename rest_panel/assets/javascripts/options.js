function OptionsCtrl($scope) {
  $scope.editor = localStorage.getItem("panel.editor");

  $scope.$watch('editor', function(value) {
    localStorage.setItem("panel.editor", value);
	});

	$scope.is_win32 = (navigator.platform == 'Win32');

}
