//si id alors utiliser 
// let form = document.getElementById("form");
// si name alors formulaire
let form = document.formulaire;
let champs = document.getElementsByClassName("champs");
let tabErrors = [];
let tabSucces = [];
let nbErreurs = 0;
let min=16;
let max=99;
// sinon form
// let form = document.form[];

let divErreur = document.createElement("div");
divErreur.id="erreurs";
divErreur.className="error";
let body = document.body;
body.appendChild(divErreur);

let divSucess = document.createElement("div");
divSucess.id="valid";
divSucess.className="sucess";
body.append(divSucess);

let affichageError = document.getElementById("erreurs");

let affichageSucess = document.getElementById("valid");

let divs = document.querySelectorAll(".champs");

for(elm of divs){
    let messErreur = document.createElement("p");
    messErreur.classList.add("error");
    elm.append(messErreur);
}

let listeInputs = document.querySelectorAll("input, textarea");

form.addEventListener("submit", valide);
            
function valide(event){
        tabSucces = [];
        tabErrors = [];
        nbErreurs = 0;
    for(input of listeInputs){
        input.classList.remove("divError");
        input.parentNode.lastElementChild.innerText="";
        switch(input.type){
            case "text": 
                if(input.required && input.value==""){
                    input.classList.add("divError");
                    let messErreurs=input.parentNode.lastElementChild.innerText="Veuillez renseigner ce champs";
                    tabErrors.push("\n"+input.name+"->"+messErreurs);
                }
                if(input.value.length < input.minLength || input.value.length > input.maxLength){
                    input.classList.add("divError");
                    let messErreurs=input.parentNode.lastElementChild.innerText="Votre champs doit contenir 2 caractères minimum ou 25 caractères maximum";
                    nbErreurs++;
                    tabErrors.push("\n"+input.name+"->"+messErreurs);
                }
                else{
                    tabSucces.push("\n"+input.name+"->"+input.value)
                }
                // if(input.value.match("[A-Z]-[a-z]")){
                //     input.classList.remove("divError");
                //     input.parentNode.lastElementChild.innerText="";
                // }else{
                //     input.classList.add("divError");
                //     input.parentNode.lastElementChild.innerText="Votre champs doit contenir au moins une majuscule et une minuscule";
                // }
                break;
            case "textarea":
                    if(input.value==""){
                        input.classList.add("divError");
                        let messErreurs= input.parentNode.lastElementChild.innerText="Veuillez renseigner ce champs";
                        nbErreurs++;
                        tabErrors.push("\n"+input.name+" -> "+messErreurs);
                    }
                    if(input.value.length < input.minLength || input.value.length > input.maxLength){
                        input.classList.add("divError");
                        let messErreurs=input.parentNode.lastElementChild.innerText="Votre champs doit contenir 15 caractères minimum ou 500 caractères maximum";
                        nbErreurs++;
                        tabErrors.push("\n"+input.name+" -> "+messErreurs);
                    }
                    else{
                        input.classList.remove("divError");
                        input.parentNode.lastElementChild.innerText="";
                        tabSucces.push("\n"+input.name+" -> "+input.value)
                    }
                break;
            case "email":
                const regex = new RegExp("[a-zA-Z0-9]+@[a-zA-Z0-9-]+\.[a-z]");
                if(input.required && input.value==""){
                    input.classList.add("divError");
                    let messErreurs=input.parentNode.lastElementChild.innerText="Veuillez renseigner ce champs";
                    nbErreurs++;
                    tabErrors.push("\n"+input.name+" -> "+messErreurs);
                }
                if(regex.test(input.value) == false){
                    input.classList.add("divError");
                    let messErreurs = input.parentNode.lastElementChild.innerText="Votre email doit contenir un @ et un .";
                    nbErreurs++;
                    tabErrors.push("\n"+input.name+" -> "+messErreurs);
                }
                else{
                    tabSucces.push("\n"+input.name+" -> "+input.value)
                }
            break;
            case "number":
                if(input.value==""){
                    input.classList.add("divError");
                    let messErreurs = input.parentNode.lastElementChild.innerText="Veuillez renseigner ce champs";
                    nbErreurs++;
                    tabErrors.push("\n"+input.name+" -> "+messErreurs);
                }
                if(input.value < min || input.value > max){
                    input.classList.add("divError");
                    input.parentNode.lastElementChild.innerText="Votre age n'est pas correcte, vous devez avoir "+min+" ans min et max "+max+" ans";
                    let messErreurs = input.parentNode.lastElementChild.innerText="Votre age n'est pas correcte, vous devez avoir "+min+" ans min et max "+max+" ans";
                    nbErreurs++;
                    tabErrors.push("\n"+input.name+" -> "+messErreurs);
                }
                else{
                    tabSucces.push("\n"+input.name+" -> "+input.value);
                }
                break;
            case "password":
                    if(input.required && input.value==""){
                        input.classList.add("divError");
                        let messErreurs =  input.parentNode.lastElementChild.innerText="Veuillez renseigner ce champs";
                        tabErrors.push("\n"+input.name+" -> "+messErreurs);
                        nbErreurs++;
                    }
                    if(input.value != input.value.match("[a-zA-Z0-9]")&& input.value.length < input.minLength){
                        input.classList.add("divError");
                        let messErreurs =  input.parentNode.lastElementChild.innerText="Votre mot de passe doit contenir une majuscule, une minuscule, un chiffre et au moins 8 caractères";
                        tabErrors.push("\n"+input.name+" -> "+messErreurs);
                        nbErreurs++;
                    }
                    else{
                        tabSucces.push("\n"+input.name+" -> "+input.value);
                    }
                    break;
            case "radio":
                let listeGenre = document.querySelectorAll("[name=genre]");
                    if(listeGenre[0].checked == false && listeGenre[1].checked == false){
                        input.classList.add("divError");
                        input.parentNode.lastElementChild.innerText="Genre non renseigné !";
                        nbErreurs++;
                        tabErrors.push("\n"+input.value+" -> "+"Genre non renseigné !");
                    }
                    if(input.checked){
                        tabSucces.push("\n"+input.name+" -> "+input.value);
                    }
                    break;
            case "checkbox": 
                   if(input.checked==true){
                    tabSucces.push("\n"+input.value+" -> "+"OUI");
                   }
                   if(input.checked==false){
                    tabSucces.push("\n"+input.value+" -> "+"NON");
                   }
                    break;
                        default: "erreur champs non valides";
                    break;     
            }
    }
    tabErrors.unshift("Il y a "+nbErreurs+" erreurs:\n");
    affichageError.innerText="Voici vos erreurs"+"\n"+tabErrors.join("\n");
    affichageSucess.innerText="Vos informations valides sont"+"\n"+tabSucces.join("\n");
    
    if(nbErreurs){
        event.preventDefault();
    }else{
       let formValid = window.confirm("Les données que vous avez rentré sont correctes\n Voulez-vous envoyer le formulaire au serveur ? ")
        if(formValid==false){
            event.preventDefault;
        }else{
            alert("Vos données ont été envoyées au serveur");
        }
    }

}