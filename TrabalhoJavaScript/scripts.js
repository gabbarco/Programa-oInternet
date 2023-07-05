let btnLike = document.getElementById("mudaLike")
let foto = document.getElementById("fotoA");
let coment = document.getElementById("coment");
let txt = document.getElementById("txtComentario");
let btnEnviar = document.getElementById("btnComentar");
let btnComent = document.getElementById("comenta");
let formulario = document.getElementById("formularioA").style.visibility = "hidden";

btnLike.addEventListener("click", like);
foto.addEventListener("dblclick", like);
btnEnviar.addEventListener("click", enviaMensagem );
btnComent.addEventListener("click", exibirComent);

function like(){
    var image = document.getElementById('mudaLike');
    var valueSrc = image.getAttribute('src');
    var iconeBranco = 'icons/coracao.png';
    var iconeVermelho = 'icons/coracao_red.png';
    if(valueSrc == iconeBranco)
        image.setAttribute('src', iconeVermelho);
    else
        image.setAttribute('src', iconeBranco);
}

function enviaMensagem(){
    let msg = txt.value;
    let html = coment.innerHTML;
    coment.innerHTML = html + `     
                                    <div class="comentario">
                                    <span> Gabriel </span>
                                    <p> ${msg} </p>
                                    </div>
    `;

    
}

function exibirComent(){
    formularioA.style.visibility = "visible";
}