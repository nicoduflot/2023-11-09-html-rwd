window.addEventListener('DOMContentLoaded', function () {

        let playPause = document.querySelector('#playPause');
        let musique = document.querySelector('#musique');

        playPause.addEventListener('click', function(){
            if(playPause.children[0].classList.contains('bi-play-circle')){
                musique.play();
                playPause.children[0].classList.remove('bi-play-circle');
                playPause.children[0].classList.add('bi-pause-circle');
            }else{
                musique.pause();
                playPause.children[0].classList.remove('bi-pause-circle');
                playPause.children[0].classList.add('bi-play-circle');
            }
        });
        
        let playPauseV = document.querySelector('#playPauseV');
        let video = document.querySelector('#video');

        playPauseV.addEventListener('click', function(){
            if(playPauseV.children[0].classList.contains('bi-play-circle')){
                video.play();
                playPauseV.children[0].classList.remove('bi-play-circle');
                playPauseV.children[0].classList.add('bi-pause-circle');
            }else{
                video.pause();
                playPauseV.children[0].classList.remove('bi-pause-circle');
                playPauseV.children[0].classList.add('bi-play-circle');
            }
        });


});