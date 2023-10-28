let music= document.getElementById("music");
let disc=document.getElementById("disc")
let musicCntrl=document.getElementById("musicCntrl");
let musicDuration=document.getElementById("musicDuration");
let menu = document.getElementById("menu");
let cross = document.getElementById("cross")
let sidebar= document.getElementById("sidebar")
let tempp
let prev=document.getElementById("prev");
let next=document.getElementById("next");
let title=document.getElementById("title");
let artist=document.getElementById("artist");
let musicCurt = document.getElementById("musicCurt");
let timeLine = document.getElementById("timeLine");
timeLine.max=music.duration;
timeLine.value=0
timeLine.addEventListener("change",updatetimeline)
const ft=dll.traverse(0);
setMusic(ft)
let min= Math.floor(music.duration/60);
let sec=Math.floor(music.duration- 60*min)
 musicDuration.innerHTML=`${min}:${sec}`
let play=true;
musicCntrl.addEventListener("click",playpause)
next.addEventListener("click", () => {
   play = false;
    playpause()
    const resultObj = dll.traverse(1);
    if (resultObj != 0) {
   setMusic(resultObj)
    }
    changePrevNextColor()
  });
  prev.addEventListener("click", () => {
    play = false;
    playpause()
    const resultObj = dll.traverse(-1);
    if (resultObj != 0) {
        setMusic(resultObj)
    }
    changePrevNextColor()
  });
  menu.addEventListener("click",function(){
   sidebar.classList.add("active")
  })
  cross.addEventListener("click",function(){
    sidebar.classList.remove("active")
  })