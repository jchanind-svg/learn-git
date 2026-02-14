function loadContent(id, file){
    fetch(file)
    .then(response=>response.text())
    .then(data=>{
        document.getElementById(id).innerHTML = data
    })
}

loadContent('navbar','navbar.html')
loadContent('footer','footer.html')