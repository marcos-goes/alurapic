angular.module('alurapic')
.controller('FotosController', function(recursoFoto){

    var self = this;

    self.fotos = [];
    self.filtro = '';
    self.mensagem = '';

    //var recursoFoto = $resource('v1/fotos/:fotoId');

    recursoFoto.query(function(data){
      self.fotos = data;
      console.log(self.fotos);
    }, function(erro){
      console.log('Falha do GET.');
      console.log(erro);
    });

/* Comentado uso do $http, substituido pelo $resource

    $http.get('v1/fotos')
    .success(function(data){
        console.log('Sucesso do GET.');
        self.fotos = data;
        console.log(self.fotos);
    })
    .error(function(erro){
        console.log('Falha do GET.');
        console.log(erro);
    });
*/

    self.remover = function(foto){

      recursoFoto.delete({fotoId : foto._id}, function(){
        self.mensagem = 'Foto [' + foto.titulo + '] foi removida com sucesso!';
        var indiceRemocao = self.fotos.indexOf(foto);
        self.fotos.splice(indiceRemocao, 1);
      }, function(erro) {
        self.mensagem = 'Foto [' + foto.titulo + '] não pôde ser removida.';
        console.log(erro);
      });

      /*
      $http.delete('v1/fotos/' + foto._id)
      .success(function(){
        self.mensagem = 'Foto [' + foto.titulo + '] foi removida com sucesso!';
        var indiceRemocao = self.fotos.indexOf(foto);
        self.fotos.splice(indiceRemocao, 1);
      })
      .error(function(erro){
        self.mensagem = 'Foto [' + foto.titulo + '] não pôde ser removida.';
        console.log(erro);
      });
      */

    };

    /*
    self.fotos = [

        {
            titulo : 'Leão',
            url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
        },
        {
            titulo : 'Leão2',
            url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
        },
        {
            titulo : 'Leão3',
            url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
        }

    ];

    console.log('Fotos dos leões');
    console.log(this.fotos);
    */
});
