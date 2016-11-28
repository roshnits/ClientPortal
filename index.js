(function() {
  angular
    .module("contact", [])
    .controller('contactCtrl', function($scope) {
    $scope.editMode = false;
    $scope.btnClass='fa fa-edit';
    $scope.buttonText="edit";
    $scope.phone = "(312)555-888";
    $scope.fax = "(312)555-888";
    $scope.address = "1234 N Michigan Ave. Chicago, IL 60611";

    $scope.editSave = function(evt) {
      if ($scope.buttonText == "edit") {
        $scope.editMode=true;
        $scope.btnClass='fa fa-check';
        $scope.buttonText="save";
      }
      else{
        $scope.editMode = false;
        $scope.btnClass='fa fa-edit';
        $scope.buttonText="edit";
      }
    };
    });
})();
