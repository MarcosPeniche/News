//exportar a função index deixando disponivel para ser usada em outras partes do projeto
module.exports.index= function(application,req,res){
    //cria uma instancia de modelo  news que sera usada para acessar os dados da noticia
    var = newsModel = new application.src.models.news();

    //chama o metodo getlastnews do modeço news para buscar as ultimas noticias
    //esse proximo metodo recebe a funçao de callback que sera executada apos a consulta ser concluida
    newsModel.getLastNews(function(err,result){
        // se a consulta for der certo o result tera as noticias recuperadas do banco de dados
        //o metodo res.render é chamado para renderizar a view -news/index
        //passa as noticias obtidas bo result para a view ,onde sera exibida para o usuario
        req.render("news/index",{news: result});
    })
}