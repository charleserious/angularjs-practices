define(function () {
  const app = angular.module('normalization', []);
  app.controller('Controller', ['$scope', function ($scope) {
    $scope.name = 'Max Karl Ernst Ludwig Planck (April 23. 1858 - October 4, 1947)';
  }]);

  app.bootstrap = function () {
    angular.bootstrap(document, ['normalization']);
  };
  return app;
});
