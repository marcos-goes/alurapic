angular.module('alurapic')
.controller('FotoController', function($scope, $http, $routeParams){

    var self = this;

    self.foto = {};
    self.mensagem = '';

    if($routeParams.fotoId) {
      $http.get('v1/fotos/' + $routeParams.fotoId)
      .success(function(data){
        self.foto = data;
      })
      .error(function(error){
        self.mensagem = 'Não foi possível obter a foto de ID [' + $routeParams.fotoId + '].';
        console.log(erro);
      });
    }

    self.submeter = function() {
      if($scope.formulario.$valid) {
        if(self.foto._id){
          $http.put('v1/fotos/' + self.foto._id, self.foto)
          .success(function(){
            self.foto = {};
            self.mensagem = 'Foto alterada com sucesso!';
          })
          .error(function(erro){
            self.mensagem = 'Não foi possível alterar a foto [' + self.foto.titulo + '].';
            console.log(erro);
          });
        }else{
          $http.post('v1/fotos', self.foto)
          .success(function(){
            self.foto = {};
            self.mensagem = 'Foto inserida com sucesso!';
          })
          .error(function(erro){
            self.mensagem = 'Não foi possível inserir a foto.';
            console.log(erro);
          });
        }



      }
    };

});
