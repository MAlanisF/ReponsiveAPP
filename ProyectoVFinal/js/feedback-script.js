document.getElementById("submit-feedback").addEventListener("click",function(e){
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const usuario = document.getElementById("usuario").value;
    const comentario = document.getElementById("comentario").value;
    window.location.href = `mailto:albertoreyesbvb11@outlook.com?subject=Feedback&body=Nombre%3A${nombre}%0AUsuario%3A${usuario}%0AComentario%3A${comentario}`;
});