 let sliderElement= document.querySelector("#slider");
 let buttonElement= document.querySelector("#button");

 let sizePassaword= document.querySelector("#valor");
 let passaword= document.querySelector("#passaword");

 let containerPassaword=document.querySelector("#container-passaword");

 let charset="abcdefghijklmnopqrstuvwyxzABCDEFGHIJKLMNOPQRSTUV!1234567890@"
 let novaSenha="";

sizePassaword.innerHTML= sliderElement.value;

slider.oninput=function(){
    sizePassaword.innerHTML=this.value;
}

function generatePassaword(){
    let pass="";

    for(let i=0, n= charset.length; i< sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n ));        
    }

    containerPassaword.classList.remove("hide");
    passaword.innerHTML=pass;
    novaSenha=pass;

}
function copyPassaword(){
    alert("Senha copiada com sucesso");
    navigator.clipboard.writeText(novaSenha)
}