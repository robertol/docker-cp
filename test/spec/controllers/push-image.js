'use strict';

describe('Controller: PushImageCtrl', function () {

  // load the controller's module
  beforeEach(module('dockerUiApp'));

  var PushImageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PushImageCtrl = $controller('PushImageCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
