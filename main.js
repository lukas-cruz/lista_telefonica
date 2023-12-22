const nome = document.getElementById('nome')
const telefone = document.getElementById('telefone')
const form = document.getElementById('form-telefone')


const nomes= [];
const telefones =[];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
let linhas =''





form.addEventListener('submit' , function(e){
    e.preventDefault();


    adcionarTelefone ()

})

function adcionarTelefone (){
    if(nomes.includes(nome.value)){
        document.getElementById('demo').innerHTML = `o nome já existe`
    }
    else{

        nomes.push(nome.value);
        telefones.push(telefone.value);


        let linha = '<tr>';
        linha += `<td>${nome.value}</td>`
        linha += `<td>${telefone.value}</td>`
        linha += `</tr>`
    
        linhas += linha
    
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas

        document.getElementById('demo').innerHTML = ""
    }}
    

    
