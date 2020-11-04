function mostrarJogo(estiloJogo) {

    let elemento = document.getElementById(estiloJogo);
    let divDinamica = document.getElementsByClassName("conteudoDinamico");

    Array.from(divDinamica).forEach(function(element)  {
        element.style.display = "none";
    });

    elemento.style.display = "block";
}