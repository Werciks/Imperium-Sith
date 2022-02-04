function powitanie() {
  var padawan = prompt("Jak się nazywasz padawanie?");
  if (padawan != null) {
    document.getElementById("padawan").innerHTML =
    "Witaj padawanie " + padawan + "! To, którą ścieżkę wybierasz?";
  }
}
var songs = ["audio/Star Wars Theme.mp3","audio/The Mandalorian Theme.mp3",
	"audio/Sabine Wren.mp3","audio/Vode An.mp3","audio/Duel Of The Fates.mp3"];
	
	var song = new Audio();
	var currentSong = 0;


function music(){

	song.src = songs[currentSong];
	currentSong++;
	if(currentSong > 4){
		currentSong = 0;
	}
	song.play();

}

function pause(){
	if (song.paused) {
		song.play();
	}else{
		song.pause();
	}
}