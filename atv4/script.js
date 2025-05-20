function toggleModes(){
    let tema = getElementById("tema")
    if(link.href.endsWith("styleLight.css")){
        tema.href = "styleDark.css"
    }
    else{
        tema.href = "styleLight.css"
    }
}