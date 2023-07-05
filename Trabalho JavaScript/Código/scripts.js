let foto = document.getElementById("fotoEx");
let btnLike = document.getElementById("clicaLike")
let btnComent = document.getElementById("clicaComentar");
let comentarios = document.getElementById("comentarios");
let txt = document.getElementById("comentarioEx");
let btnComentar = document.getElementById("comentar");
let formulario = document.getElementById("formularioEx").style.visibility = "hidden";

btnLike.addEventListener("click", like);
foto.addEventListener("dblclick", like);
btnComentar.addEventListener("click", postaComentario );
btnComent.addEventListener("click", exibeComentario);

function like(){
    var image = document.getElementById('clicaLike');
    var valueSrc = image.getAttribute('src');
    var iconeBranco = 'icones/coracao.png';
    var iconeVermelho = 'icones/coracao_red.png';
    if(valueSrc == iconeBranco)
        image.setAttribute('src', iconeVermelho);
    else
        image.setAttribute('src', iconeBranco);
}

function postaComentario(){
    let msg = txt.value;
    let html = comentarios.innerHTML;
    comentarios.innerHTML = html + `     
                                    <div class="comentario">
                                    <span> Gabriel </span>
                                    <p> ${msg} </p>
                                    </div>
    `;

}
function exibeComentario(){
    formularioEx.style.visibility = "visible";
}