//tabErrors.push();

// tabForm.push(inputNom, inputPrenom, inputEmail, inputAge);
// let tabForm = [];
// let inputNom = document.getElementById("nom");
// let inputPrenom = document.getElementById("prenom");
// let inputEmail = document.getElementById("email");
// let inputAge = document.getElementById("age");

// if(listeInputs[i].value == ""){
        //     let p = document.createElement("p");
        //     p.classList.add("error");
        //     p.innerText="Veuillez renseigner ce champs";
        //     listeInputs[i].parentElement.append(p);
        // }else{
        //     let p1 = document.createElement("p");
        //     p1.classList.add("error");
        //     p1.classList.remove("error");
        //     p1.classList.add("valid");
        //     p1.innerText="";
        //     listeInputs[i].parentElement.append(p1);
        // }
        // //CM: POUR AFFICHER LES INFORMATIONS ET/OU ERREURS
// let listeInfos = "Voici vos informations valides: \n"
// let bilanErreurs = "Liste des erreurs: \n"
// let listeError = []

// //CM: AJOUTER UN PARAMETRE event A LA FONCTION -> POUR stopPropagation ou preventDefault
// // function afficherInfo(){
// function afficherInfo(event){
//     // CM: AJOUTER UNE VARIABLE BOOLEENNE POUR VOIR SI ERREUR OU PAS
//     // for(let i =0; i<tabForm.length; i++){
//     for(let i =0, isError = false ; i<tabForm.length; i++, isError = false){
//         if(tabForm[i].value==""){
//             // form.stopPropagation();
//             // alert("erreur vide");
//             isError =  formatErrorMessage(i, "ce champ doit être rempli")
//         } /*test si l'indice 3 qui équivaut à age est inférieur 16 ou supérieur à 99 ce qui affiche une erreur*/

//         // CM: IL NE FAUT PAS METTRE DE else if SINON TU EXCLUS TOUS LES AUTRES TESTS QUAND ERREUR SUR AGE
//         // DE PLUS, POUR CHAQUE INPUT TU TESTES SI L'AGE EST OK A CHAQUE FOIS

//         // else if((tabForm[3].value < 16) || (tabForm[3].value > 99)){
//         if((tabForm[3].value < 16) || (tabForm[3].value > 99)){
//             // alert("erreur age");
//             isError = formatErrorMessage(3,"age interdit")
//         } /*test si l'indice 0 qui équivaut à nom est inférieur à 2 ou supérieur à 10 ce qui affiche une erreur*/
//         // else if((tabForm[0].value.length < 2) || (tabForm[0].value.length > 10)){

//         // CM: MEME REMARQUE POUR CE TEST: TU TESTES POUR CHAQUE INPUT, LA LONGUEUR DE "nom" 

//         if((tabForm[0].value.length < 2) || (tabForm[0].value.length > 10)){
//             // alert("erreur nom");
//             isError = formatErrorMessage(0,"longueur du nom")
//         }
//         // CM: SI TOUT EST OK, ON ENREGISTRE L'INPUT
//         // else{ alert(tabForm[i].value);}
//         if ( isError == false) {
//             listeInfos += tabForm[i].name + " -> " + tabForm[i].value + "\n"
//         } else {
//             listeError.push("")     // CM: POUR AFFICHER UNE LIGNE BLANCHE DANS LISTE FINALE
//         }
//     }
//     // CM: PREPARATION DE LA LISTE DES ERREURS
//     for(let errorMessage of listeError) {
//         bilanErreurs += (errorMessage + "\n")
//     }
//     // CM: AFFICHAGE FINAL DES INFOS ET DES ERREURS
//     alert(bilanErreurs + "\n\n" + listeInfos)
    
//     // CM: stopPropagation S'APPLIQUE SUR UN évènement (event) PAS SUR UN ELEMENT !
//     // form.stopPropagation();
//     // ON PEUT AUSSI UTILISER event.preventDefault
//     event.stopPropagation();
// }
// // CM: mise en forme message d'erreur
// function formatErrorMessage(index,string) {
//     listeError.push(index+": "+tabForm[index].name + " -> " + string)
//     return true
// }