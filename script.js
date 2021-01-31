
let inputcep = document.getElementById('cep');
let btncep = document.getElementById('btncep');
let resultrua = document.querySelector('.resultadocep');

btncep.addEventListener('click', eventoclick);

function eventoclick(event){
    event.preventDefault();
    let cep = inputcep.value;
    buscacep(cep);

}

function buscacep(cep){
   fetch(`https://viacep.com.br/ws/${cep}/json/`)
   .then(response => response.text())
   .then(body => {
        
        resultrua.innerText = body;
        
   });
}



 
    

