angular.module('alurapic')
.controller('FotoController', function($scope, $routeParams, recursoFoto, cadastroDeFotos){

    var self = this;

    self.foto = {};
    self.mensagem = '';

    if($routeParams.fotoId) {

      recursoFoto.get({fotoId : $routeParams.fotoId}, function(data){
        self.foto = data;
      }, function(erro){
        self.mensagem = 'Não foi possível obter a foto de ID [' + $routeParams.fotoId + '].';
        console.log(erro);
      })
      /*
      $http.get('v1/fotos/' + $routeParams.fotoId)
      .success(function(data){
        self.foto = data;
      })
      .error(function(error){
        self.mensagem = 'Não foi possível obter a foto de ID [' + $routeParams.fotoId + '].';
        console.log(erro);
      });
      */
    }

    self.submeter = function() {
      if($scope.formulario.$valid) {

         cadastroDeFotos.cadastrar(self.foto)
         .then(function(dados){
            self.mensagem = dados.mensagem;
            if(dados.inclusao){
               self.foto = {};
            }
         })
         .catch(function(dados){
            self.mensagem = dados.mensagem;
         })
      }
    };

});
