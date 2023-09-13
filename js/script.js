window.addEventListener('DOMContentLoaded', function(){
    /* 
    on surveille le navigateur sur l'évènement "page chargée", 
    quand la page est charger, le navigateur peut éxécuter 
    les commandes suivantes  
    */
    console.log('Page chargée');
    console.log(window);
    console.log(document);
    console.log(document.querySelector('body > nav ul'));
    let navigation = document.querySelector('body > nav ul');
    console.log(navigation);
    console.log(navigation.children);

    let btnClick = document.querySelector('#btnClick');

    btnClick.addEventListener('click', function(){
        console.log('On a cliqué sur le bouton btnClick');
    });

    /*
    querySelector() ne permet de récupérer qu'un seul élément

    Pour récupérer une collection d'élément, on utilise querySelectorAll

    */

    let toutesLesTd = document.querySelectorAll('#tabTdClick td');
    console.log(toutesLesTd);

    toutesLesTd.forEach(function(element){
        element.addEventListener('click', function(){
            console.log(element.innerHTML);
            element.classList.toggle('fond-rouge-transparent');
            element.classList.add('rouge-gras');
            element.classList.remove('majuscule');
            element.style.setProperty('font-style', 'italic');
        });

        element.addEventListener('mouseenter', function(){
            element.style.setProperty('background-color', 'lightblue');
        });
        
        element.addEventListener('mouseleave', function(){
            element.style.removeProperty('background-color');
        });
    });

    /*
    on surveille le clic sur le bouton btnInput, quand il est cliqué,
    on va vérifier que l'élément textInput n'est pas vide, s'il n'est pas vide,
    on l'affiche dans l'élément spanInput
    */

    let btnInput = document.querySelector('#btnInput');
    let textInput = document.querySelector('#textInput');
    let spanInput = document.querySelector('#spanInput');

    /* comme le comportement est appelé deux fois, au lieu de l'écrire deux fois, on le met dans une fonction qui sera appelée à laplace d'écrire deux fois le même code */

    function afficherSpan(valeur){
        textInput.style.removeProperty('border-color');
        /* valeur est le contenu du champ texte transmis dans la fonction */
        /* controler si le champs n'est pas vide */
        if(valeur!= ''){
            //console.log('input n\'est pas vide');
            /* remplir le html du span de la valeur du champs */
            spanInput.innerHTML = valeur;
            textInput.value = '';
        }
        else{
            //console.log('input est vide');
            textInput.style.setProperty('border-color', 'red');
        }
    }

    /* surveiller le clic */
    btnInput.addEventListener('click', function(){
        /* le comportement a lancer si un clic sur le bouton est fait */
        afficherSpan(textInput.value);
    });

    textInput.addEventListener('keyup', function(evenement){
        /* contrôler si la touche relachée est bien la touche "entrée" du clavier */
        if(evenement.key === 'Enter'){
            //console.log(evenement);
            /* le comportement a lancer si la condition est respectée */
            afficherSpan(textInput.value);
        }
    });


});