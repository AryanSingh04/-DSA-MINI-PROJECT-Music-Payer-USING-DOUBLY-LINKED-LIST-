    function setMusic(result){
    title.innerHTML=result.name;
    artist.innerHTML=result.artist;
    music.src=result.path;
    disc.style.backgroundImage=`url(${result.bg})`
    music.onloadedmetadata=function(){
        timeLine.max=music.duration;
        let mint= Math.floor(music.duration/60);
        let sect= Math.floor(music.duration- 60*mint);
        
        if (sect < 10) {
            musicDuration.innerHTML=`0${mint}:0${sect}`
          } else {
            musicDuration.innerHTML=`0${mint}:${sect}`
        }
        
    }
  
timeLine.value=0
   }

   function playpause(){
    if(play){
        music.play()
        musicCntrl.classList.remove("fa-play");
        musicCntrl.classList.add("fa-pause");
       disc.classList.add("music-on")
   tempp= setInterval(() => {
            timeLine.value++;
            let cm=Math.floor(timeLine.value/60);
            let cs=Math.floor(timeLine.value- 60*cm)
            musicCurt.innerHTML=`${cm}:${cs}`
            if (cs< 10) {
                musicCurt.innerHTML=`0${cm}:0${cs}`
              } else {
                musicCurt.innerHTML=`0${cm}:${cs}`
            }
               if(timeLine.value ==Math.floor(timeLine.max)){
                    play = false;
                    playpause()
                    const resultObj = dll.traverse(1);
                    if (resultObj != 0) {
                   setMusic(resultObj)
                    }
                    changePrevNextColor()
                    musicCurt.innerHTML=`00:00`
                }
        },1000);
    }
    else{
        music.pause();
        disc.classList.remove("music-on")
        musicCntrl.classList.remove("fa-pause")
        musicCntrl.classList.add("fa-play");
        clearInterval(tempp)
    }
   play=!play
}
function updatetimeline(){
    music.currentTime=timeLine.value
    let cm=Math.floor(timeLine.value/60);
    let cs=Math.floor(timeLine.value- 60*cm)
    musicCurt.innerHTML=`${cm}:${cs}`
    if (cs< 10) {
        musicCurt.innerHTML=`0${cm}:0${cs}`
      } else {
        musicCurt.innerHTML=`0${cm}:${cs}`
    }
}
