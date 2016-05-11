angular.module('alurapic')
.controller('GruposController', function($http){
  var self = this;
  self.grupos = [];

  $http.get('v1/grupos')
  .success(function(data){
      console.log('Sucesso do GET.');
      self.grupos = data;
      console.log(self.grupos);
  })
  .error(function(erro){
      console.log('Falha do GET.');
      console.log(erro);
  });

});
