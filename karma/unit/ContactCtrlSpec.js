describe('ContactCtrl', function() {

  beforeEach(module('EL'));

  describe('submit', function() {
    var $scope, ctrl;

    beforeEach(inject(function($rootScope, $controller, $location, $http) {
      $scope = $rootScope.$new();
      $scope.elContactForm = {};

      ctrl = $controller('ContactCtrl', {
        $scope : $scope,
        $location : $location,
        $http : $http,
        EL_API_ADDR : ''
      });
    }));

    it('should create a contact model', function() {
      expect($scope.contact).toEqual({});
    });

    it('should not submit if not valid, and when valid goto the right page', inject(function($httpBackend, $location) {
      $location.path('/home');
      $scope.$digest();

      $scope.elContactForm.$valid = false;
      $scope.submit();
      $scope.$digest();
      expect($location.path()).toBe('/home');

      $httpBackend.expect('POST', '/contact').respond('ok');
      $scope.elContactForm.$valid = true;
      $scope.submit();
      $scope.$digest();

      $httpBackend.flush();
      expect($location.path()).toBe('/');
    }));

    it('should send the correct data', inject(function($httpBackend, $location) {
      expect($scope.contact).not.toBe({});

      var postData = {
        first_name : 'my name',
        last_name : 'last name',
        email : 'matias@email.com',
        message : '123'
      };

      $httpBackend.expect('POST', '/contact', {
        contact : postData
      }).respond('ok');

      $scope.contact = postData;

      $scope.elContactForm.$valid = true;

      $scope.submit();
      $scope.$digest();
      $httpBackend.flush();
    }));
  });

});
