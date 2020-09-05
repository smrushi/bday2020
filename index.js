function playRandomSound(){
  var sounds = ["1.mp3","2.mp3","3.mp3","4.mp3","5.mp3","6.mp3"];  
  var soundFile = sounds[Math.floor(Math.random()*sounds.length)];   
  document.getElementById("aud").setAttribute('src', soundFile);  
}
document.getElementById("sng").addEventListener("click",playRandomSound);




