function toggleModes(){
    let tema = document.getElementById("tema")
    if(tema.href.endsWith("styleLight.css")){
        tema.href = "styleDark.css"
    }
    else{
        tema.href = "styleLight.css"
    }
}