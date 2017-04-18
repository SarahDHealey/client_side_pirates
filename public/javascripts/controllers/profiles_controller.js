app.controller('ProfilesController', function($scope, ProfilesService) {
  console.log('hits controller');
  $scope.view = {};
  $scope.view.profiles = ProfilesService;
  $scope.view.all = ProfilesService.all;
  });
