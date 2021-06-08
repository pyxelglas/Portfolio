

  var imagear = [];
  var musicar = [];
  var namear = [];

  var portdisplayed = [];
  var portdesc = [];
  var i = 0;
  var player;
  var song;
  var port;
  var choose;
  var portcontainer;

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
        document.getElementById("title").innerHTML = "Song title: " + namear[num];
    }
        
}
function Sett() 
{
  imagear.push("Images/oneeyeguy.gif");
  imagear.push("Images/redguyport.png");
  imagear.push("Images/normguy.png");
  imagear.push("Images/sunnygoldport.png");
  imagear.push("Images/naruto.gif");
  imagear.push("Images/braidportout.gif");
  imagear.push("Images/comicgal.png");
  imagear.push("Images/elfwithprop.png");
  imagear.push("Images/bluehoodport.png");

  portdesc = ["Greyscale and Music"]

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
  portcontainer = document.getElementById("port-container");

  AddPort();
  SwitchPort();
  /*port.src="Images/oneeyeguy.gif";*/
  document.getElementById("music-list").style.display = "none";
  Play(0);
}

/*
function ShowDesc() {
    var portclicked = document.createElement("img");
    if (portcl)
    if (portdisplayed.includes(portclicked))
    {
    portdisplayed.onmouseover = function() {
        document.getElementById("desc").innerHTML = portdesc[portdisplayed.indexOf()]
    };
}
}
*/

function AddPort() {
    for (var i = 0; i < imagear.length; i++)
    {
    var port = document.createElement("img");
    port.src = imagear[i];
    port.alt = "Image Unavailable";
    document.getElementById('portraits').appendChild(port);
    portdisplayed += port;
    }
}

function SwitchPort() {
    var lastScrollTop = 0;
    document.getElementById("port-container").addEventListener("scroll", function() { 
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
     console.log("down");
   } else {
    console.log("up");
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);
}

window.onload = Sett;