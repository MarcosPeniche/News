//importa o modulo file system do node.js para trabalhar com arquivo(seja qual for)
var fs= require('fs');

//define a funçao construtora news,que sera usada para criar instancias do modelo
function news() {}

//define o metodo getlastnews dentro do prototipo de news que é a funçao vazia
//este metodo ira buscar as ultimas noticias de um arquivo json
news.prototype.getlastnews = function(callback){

    //usa o metodo redline do modulo  file system para ler o arquivo noticias.json
    //o arquivo esta localizado na pasta 'data' e o conteudo é lido com uma string(patrao UTF-8)
    fs.readFile('.data/noticia.json','utf8', function(err,result){
        var data = [];

        if (!err){

            var obj = JSON.parse(resulta);
            //determina quantas noticias serao selecionadas
            //se houver mais de 4 noticias ,define'i' como 4 (selecionar as ultimas 5 noticias)
            // caso contrario define 'i' como indice da ultima noticia disponivel
            if(obj.noticias.legth >4){
                 var i=4;

            }else {
                var i = (obj.noticias.length - 1);}
                obj.noticias.forEach(function(noticia){
                    //se 'i' for maior ou igual a 0 , aramazena  a noticia no array 'data'
                    if(i >= 0) {
                        data[i] = noticia; //armazena a noticia no indice 'i'
                    i--; //decrementa 'i' para armazenar as as noticias em ordem inversa

                    }
                });
             }
             //executa o callback passado para getlastnews,passando os dados (ou erro)como parametro
             callback(err, data);
    });
};

//exporta o modelo 'news' como funçao
//quando invocado, retona a funçao construtora news  do inicio do codigo,liberando a criçao de novas instancias do modelo
module.exports = function(){
     return news;
}


