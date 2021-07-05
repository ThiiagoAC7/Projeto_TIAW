const API_KEY = '061d4dda20f54f0d901f42d44b26a8ec';
//const API_KEY = 'dc487279af6359e6e4c1ee68c33b4426';

function exibeNoticiasReciclagem () {
    let divNoticias = document.getElementById('api-news-reciclagem');
    let texto = '';

    //Montar texto HTML das noticias sobre reciclagem
    let dados = JSON.parse (this.responseText);
    for (i=0; i < 8; i++) {
        let noticias = dados.articles[i];

        //Concatenar o código do Card com os dados do JSON
        texto += `<div class="col-12 col-sm-6 col-lg-4 col-xl-3  d-flex align-items-stretch justify-content-center mb-4">
                    <div class="card card-principal shadow" style="width: 18rem;">
                        <img src="${noticias.image}" class="card-img-top" alt="">
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
    let query = 'coleta de lixo';

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticiasReciclagem;
    xhr.open ('GET',`https://gnews.io/api/v4/search?q=${query}&token=${API_KEY}`);
    xhr.send ();
}

function exibeNoticiasColeta () {
    let divNoticias = document.getElementById('api-news-coleta');
    let texto = '';

    //Montar texto HTML das noticias sobre reciclagem
    let dados = JSON.parse (this.responseText);
    for (i=0; i < 8; i++) {
        let noticias = dados.articles[i];

        //Concatenar o código do Card com os dados do JSON
        texto += `<div class="col-12 col-sm-6 col-lg-4 col-xl-3  d-flex align-items-stretch justify-content-center mb-4">
                    <div class="card card-principal shadow" style="width: 18rem;">
                        <img src="${noticias.image}" class="card-img-top" alt="">
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

function executaPesquisaColeta (){
    let query = 'reciclagem';

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticiasColeta;
    xhr.open ('GET',`https://gnews.io/api/v4/search?q=${query}&token=${API_KEY}`);
    xhr.send ();
}



$(document).ready(function() {
    executaPesquisaReciclagem();
    executaPesquisaColeta();
})