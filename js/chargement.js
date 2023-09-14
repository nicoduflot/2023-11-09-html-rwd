window.addEventListener('DOMContentLoaded', function(){

    function loadingGif(){
        let data = 'Le formateur aime bien les jeux de rôle ';

        return new Promise(function(resolu, echec){
            setTimeout(function(){
                if(document.querySelector('#search').value != ''){
                    resolu(data);
                }else{
                    echec('Pas de mot recherché');
                }
            }, 3000);
        });

    }

    async function startLoading(){
        let resultat = await loadingGif();
        return resultat;
    }

    document.querySelector('#btnChargement').addEventListener('click', function(){
        document.querySelector('#chargement').innerHTML = '<img src="./images/ZKZg.gif" width="200">';
        startLoading()
        .then(function(data){
            document.querySelector('#chargement').innerHTML = data;
        })
        .catch(function(erreur){
            document.querySelector('#chargement').innerHTML = erreur;
        });
    });
});