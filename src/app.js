// * aqui farei a lógica do meu projeto, ou seja, a parte de adicionar os livros, deletar, etc... *//
// parte de adicionar
function newElement(){
    var li = document.createElement('li');
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue ===''){
        alert("Digite seu livro: ")
    }else{
        document.getElementById("minhaUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode(" \u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    // parte do botão pra deletar
    for(i = 0; i < close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
// adicionando botão de fechar em todos livros
var myNodeList = document.getElementsByTagName("li");
var i;
for(i=0; i< myNodeList.length; i++){
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}
// adicionando função do botão de excluir o livro
var close = document.getElementsByClassName("close");
var i;
for(i=0; i< close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none"
    }
};
// // // // // 
// // // // // 


// aqui farei o botão de informações sobre o livro, usando api da OpenLibrary
function getInfo(){
    document.getElementById("output").innerHTML = "";
    
    fetch("https://openlibrary.org/search.json?q=" + document.getElementById("myInput").value)
    .then(res => res.json())
    .then(response => {

        for(let i = 0; i < 2; i++){

            let book = response.docs[i];

            let title = book.title;
            let author = book.author_name ? book.author_name[0] : "Autor desconhecido";

            let img = book.cover_i 
                ? "https://covers.openlibrary.org/b/id/" + book.cover_i + "-M.jpg"
                : "https://via.placeholder.com/150x220?text=Sem+Capa";

            document.getElementById("output").innerHTML += `
                <h2>${title}</h2>
                <img src="${img}">
                <p>${author}</p>
                
            `;
        }
    })
}
// // // // // 
// // // // // 



