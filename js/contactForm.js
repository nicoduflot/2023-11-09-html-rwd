window.addEventListener('DOMContentLoaded', function(){

    function recupValeur(elementAvecValeur){
        /* 
        attention, cette fonction est faîte pour des éléments possédant l'attribu value 
        */
       return elementAvecValeur.value;
    }

    let noteSite = document.querySelector('#noteSite');
    let colorTeam = document.querySelector('#colorTeam');
    let showPsw = document.querySelector('#showPsw');
    let selectClasse = document.querySelector('#selectClasse');
    
    document.querySelector('#affNoteSite').innerHTML = recupValeur(noteSite);
    document.querySelector('#affColorTeam').innerHTML = recupValeur(colorTeam);
    
    noteSite.addEventListener('change', function(){
        document.querySelector('#affNoteSite').innerHTML = recupValeur(noteSite);
    });
    
    colorTeam.addEventListener('change', function(){
        document.querySelector('#affColorTeam').innerHTML = recupValeur(colorTeam);
    });
    
    selectClasse.addEventListener('change', function(){
        let classe = document.querySelector('#selectClasse').value;
        console.log(classe);
        /* créer un élément directement dans le DOM permet de l'abonner à un écouteur d'évènement  */
        /* ça n'est pas possible quand on le fait en mettant du HTML dans le innerHTML d'un élément */
        let b = document.createElement('b');
        let content = document.createTextNode(classe);
        b.append(content);
        document.querySelector('#classeOptions').append(b);
        b.addEventListener('click', function(){
            console.log('l\'élément existe dans le DOM');
        });
        switch(classe){
            case 'guerrier':
            case 'moine':
            case 'epeiste':
                /* code a appliquer */
            break;
            case 'mage':
            case 'clerc':
            case 'mageguerre':
                /* code a appliquer */
            break;
            case 'voleur':
                /* code a appliquer */
            break;
            default :
            document.querySelector('#classeOptions').innerHTML = '<b>Vous n\'avez pas choisi de classe</b>';
        }
    });

    showPsw.addEventListener('click', function(){
        let target = showPsw.dataset.target;
        if(showPsw.children[0].classList.contains('bi-eye-fill')){
            document.getElementById(target).setAttribute('type', 'text');
            showPsw.children[0].classList.remove('bi-eye-fill');
            showPsw.children[0].classList.add('bi-eye-slash-fill');
        }else{
            document.getElementById(target).setAttribute('type', 'password');
            showPsw.children[0].classList.remove('bi-eye-slash-fill');
            showPsw.children[0].classList.add('bi-eye-fill');
        }
    });
    

    let contactForm = document.querySelector('#contactForm');
    let submitForm = document.querySelector('form#contactForm [type="submit"]');

    submitForm.addEventListener('click', function(evenement){
        //console.log(evenement);
        evenement.preventDefault();
        let stopForm = false;
        let inputNom = document.querySelector('#nom');
        let inputEmail = document.querySelector('#email');
        if(inputNom.value == ''){
            inputNom.style.setProperty('border', '2px solid red');
            document.querySelector('span[data-input="nom"]').innerHTML = 'Ce champ est obligatoire';
            stopForm = true;
        }
        
        if(inputEmail.value == ''){
            inputEmail.style.setProperty('border', '2px solid red');
            document.querySelector('span[data-input="email"]').innerHTML = 'Ce champ est obligatoire';
            stopForm = true;
        }else{
            tabArobase = inputEmail.value.split('@');
            if(tabArobase.length === 2){
                if(tabArobase[0] != '' && tabArobase[1] != ''){
                    tabDomaine = tabArobase[1].split('.');
                    if(tabDomaine.length >= 2){
                        for(value of tabDomaine){
                            if(value == ''){
                                stopForm = true;
                                break;
                            }
                        }
                    }else{
                        stopForm = true;
                    }
                }else{
                    stopForm = true;
                }
            }else{
                stopForm = true;
            }
        }

        if(!stopForm){
            contactForm.submit();
        }
    });
});