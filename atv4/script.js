function toggleModes(){
    // Referência à tag <link> do tema pelo id
    let tema = document.getElementById("tema")
    if(tema.href.endsWith("styleLight.css")){
        tema.href = "styleDark.css"
    }
    else{
        tema.href = "styleLight.css"
    }
}