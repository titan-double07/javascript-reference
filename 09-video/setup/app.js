const c=console.log.bind(console);
const video = document.querySelector('.video-container');
const switchBtn = document.querySelector('.switch-btn');

function PlayPause(){
    // let isPlaying=true
    if(video.paused){
        video.play()
        switchBtn.classList.remove('slide')
    }else{
        switchBtn.classList.add('slide')
        video.pause()
    }   
}
switchBtn.addEventListener("click",PlayPause)

const preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});

