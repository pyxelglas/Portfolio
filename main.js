

  var imagear = [];
  var musicar = [];
  var namear = [];
  var i = -1;
  var player;
  var song;
  var port;
  var choose;

function GoNext()
{
 if (i < imagear.length - 1)
  {
      i++;
  }
  else{
      i = 0;
  }
  port.src = imagear[i];
}
function Choose() 
{
    if (choose.style.display === "none") {
    choose.style.display = "block";
}
else {
    choose.style.display="none";
}
}
function Play(num)
{
    if (song.src !== musicar[num])
    {
        player.setAttribute('src', musicar[num]);
        player.play();
        document.getElementById("title").innerHTML = "Song title: " + namear[num];
        console.log(song.src);
    }
        
}
function Sett() 
{
  imagear.push("Images/redgirl.png")
  imagear.push("Images/redguyport.png")
  imagear.push("Images/sunnygoldport.png")
  imagear.push("Images/naruto.gif")
  imagear.push("Images/mom.png")
  imagear.push("Images/bluehoodport.png")

  musicar.push("Audio/Don't Cry.wav");
  musicar.push("Audio/Guitar Warmth.wav");
  musicar.push("Audio/hallucinogen.wav");
  musicar.push("Audio/happybg.wav");
  musicar.push("Audio/I wait Patiently.wav");
  musicar.push("Audio/longspace1.wav");
  musicar.push("Audio/Without Hue.wav");

  namear[0] = "Don't Cry";
  namear[1] = "Guitar Warmth";
  namear[2] = "hallucinogen";
  namear[3] = "Ukelele Jingle";
  namear[4] = "I wait Patiently";
  namear[5] = "In Space";
  namear[6] = "Without Hue";
  
  player = document.getElementById("player");
  song = document.getElementById("song");
  choose = document.getElementById("music-list");
  port = document.getElementById("portrait");

  port.src="Images/bluehoodport.png";
  document.getElementById("music-list").style.display = "none";
  Play(0);
}
window.onload = Sett;