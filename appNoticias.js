const API_KEY = '9904f8c49e6942388a8670127c765b1c';

function exibeNoticias () {
    let divNoticias = document.getElementById('api-news');
    let texto = '';

    //Montar texto HTML das noticias sobre reciclagem
    let dados = JSON.parse (this.responseText);
    for (i=0; i < dados.articles.length; i++) {
        let noticias = dados.articles[i];

        //Concatenar o código do Card com os dados do JSON
        texto += `<div class="col-12 col-sm-6 col-lg-4 col-xl-3  d-flex align-items-stretch justify-content-center mb-4">
                    <div class="card card-principal shadow" style="width: 18rem;">
                        <img src="${noticias.urlToImage}" class="card-img-top" alt="">
                        <div class="card-body d-flex flex-column justify-content-between">
                        <h5 class="card-title">${noticias.title}</h5>
                        <a href="${noticias.url}" class="btn btn-primary botao">Ler Mais</a>
                        </div>
                    </div>
                </div>`
    }

    //Preencher a DIV com o texto HTML
    divNoticias.innerHTML = texto

}

function executaPesquisaReciclagem (){
    let query = 'reciclagem';

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticias;
    xhr.open ('GET',`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
    xhr.send ();
}

$(document).ready(function() {
    executaPesquisaReciclagem();
})