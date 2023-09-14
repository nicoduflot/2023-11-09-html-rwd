window.addEventListener('DOMContentLoaded', function(){
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