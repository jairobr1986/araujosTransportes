function toggMode() {
    const html = document.documentElement;
    html.classList.toggle("light")

    const img = document.querySelector("#profile img");

    if (html.classList.contains('light')) {
        // Caminho corrigido para assets/img/
        img.setAttribute('src', './assets/img/github-jairo.jpg') 
    } else {
        // Caminho corrigido para assets/img/
        img.setAttribute('src', './assets/img/perfil.jpg') 
    }
}