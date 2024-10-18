/* chamado contedo para poder testar */
//upContent();
//console.log(buscaId("titulo-post"));

/*fetch('http://localhost:3000/index3', {method: 'GET'}.then(
    function(response){
        if(response.ok){
            console.log(response.status);
        }
    }
))*/
/*console.log("TESTE");
fetch('http://localhost:3000/index3', {method: 'GET'}.then(
    function(res){
        console.log("response?" + res);
    }
))*/

/*async function getData() {
    const url = "http://localhost:3000/index3";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log("ERRRO");
    }
  }
getData();*/

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

fetch("http://localhost:3000/index3")
  .then((response) => response.json())
  .then((json) => console.log(json));

/*const response = fetch("http://localhost:3000/index3", {
  method: "GET",
  body: JSON.stringify({ titulo: "example" }),
  headers: myHeaders,
});*/
//console.log(response);


/* functions */
function showPreviewOfPost(){ //DONE Funcional
    const dataAtual = new Date();
    const options = { timeZone: 'America/Sao_Paulo' };
    const dataHoraBrasil = dataAtual.toLocaleString('pt-BR', options);
    const titulo = document.getElementById("titulo-post").value;
    const data = document.getElementById("date-post").value;
    const text = document.getElementById("conteudo").value;

    document.getElementById("preview-title").innerHTML = titulo;
    document.getElementById("preview-date").innerHTML = dataHoraBrasil;
    document.getElementById("preview-text").innerHTML = text;
    console.log(titulo);
    console.log(data);
    console.log(text);
    console.log(dataHoraBrasil);

    localStorage.setItem("titulo", titulo);
    localStorage.setItem("data", dataHoraBrasil);
    localStorage.setItem("text", text);
} 

function buscaId(id){
    let variable = document.getElementById(id).value;
    //localStorage.setItem("variavel", variable);
    //let variavelobj = variable;
    //console.log(variable);
    return variable;
}

function doPublicar(){
    console.log(buscaId("titulo-post"));
    //let feed = document.getElementById("feed");
    //console.log(feed);
    //upContent();
    //let divPost = document.createElement("div")
    //divPost.setAttribute("class", "post");
    //console.log(divPost.outerHTML);
    //feed.innerHTML = divPost.outerHTML;
    //console.log(feed)


    /*<div class="post">
        <h1></h1>
        <h4></h4>
        <p></p> 
        <p>ass: falcon</p>
    </div> */
}


function upContent(){ /* A ideia é subir o feed da home primeiro e poder acessar */
    
    let feed = document.getElementById("feed-home");
    let post = document.getElementById("post-home");
    let titulo = document.getElementById("titulo-post-home");
    let data = document.getElementById("data-post-home");
    let conteudo = document.getElementById("content-post-home");
    localStorage.setItem("feed-home", feed); /* aqui eu tenho o htmlELEMENT */
    localStorage.setItem("post-home", post); /* aqui eu tenho o htmlELEMENT */
    localStorage.setItem("titulo-post-home", titulo); /* aqui eu tenho o htmlELEMENT */
    localStorage.setItem("data-post-home", data); /* aqui eu tenho o htmlELEMENT */
    localStorage.setItem("content-post-home", conteudo); /* aqui eu tenho o htmlELEMENT */
    let feedobject = feed;
    let postobject = post;
    let tituloobj = titulo;
    let dataobj = data;
    let conteudobj = conteudo;
    //console.log(feedobject.outerHTML);
    //console.log(postobject.outerHTML);
    console.log(tituloobj.outerHTML);
    console.log(tituloobj.innerHTML);
    //console.log(dataobj.outerHTML);
    //console.log(conteudobj.outerHTML);

    tituloobj.innerHTML = 'meu pau na sua mão'
    //dataobj.innerHTML = '05/Outubro/2024 - 03:01'
    //conteudobj.innerHTML = 'Eu sabia que tinha uma coisa errada'

    postobject.innerHTML = ' ';
    postobject.innerHTML += tituloobj.outerHTML;
    postobject.innerHTML += dataobj.outerHTML;
    postobject.innerHTML += conteudobj.outerHTML;
    console.log(postobject);
    //provavelmente adicionar um lisciner para quando botão de post for clicado atualizar a pagina
    //resultado final colocar um post novo com conteudo postado
    feedobject.innerHTML += postobject.outerHTML;

}