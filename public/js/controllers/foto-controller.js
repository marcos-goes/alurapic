angular.module('alurapic')
.controller('FotoController', function($scope, $routeParams, recursoFoto){

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
        if(self.foto._id){
          recursoFoto.update({fotoId : self.foto._id}, self.foto, function(){
            self.foto = {};
            self.mensagem = 'Foto alterada com sucesso!';
          }, function(erro){
            self.mensagem = 'Não foi possível alterar a foto [' + self.foto.titulo + '].';
            console.log(erro);
          });

          /*
          $http.put('v1/fotos/' + self.foto._id, self.foto)
          .success(function(){
            self.foto = {};
            self.mensagem = 'Foto alterada com sucesso!';
          })
          .error(function(erro){
            self.mensagem = 'Não foi possível alterar a foto [' + self.foto.titulo + '].';
            console.log(erro);
          });
          */

        }else{
          recursoFoto.save(self.foto, function(){
            self.foto = {};
            self.mensagem = 'Foto inserida com sucesso!';
          }, function(erro){
            self.mensagem = 'Não foi possível inserir a foto.';
            console.log(erro);
          });
          /*
          $http.post('v1/fotos', self.foto)
          .success(function(){
            self.foto = {};
            self.mensagem = 'Foto inserida com sucesso!';
          })
          .error(function(erro){
            self.mensagem = 'Não foi possível inserir a foto.';
            console.log(erro);
          });
          */
        }



      }
    };

});
