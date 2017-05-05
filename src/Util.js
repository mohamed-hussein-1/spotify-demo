class Util {
	static millisToMinutesAndSeconds(millis) {
	  	var minutes = Math.floor(millis / 60000);
	  	var seconds = ((millis % 60000) / 1000).toFixed(0);
	  	return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
	}
	static songArtistPrint(artists){
		return artists[0].name + (artists.length>1?"feat":"") + (artists.slice(1).map((e)=>(e.name)));
	}
}
export default Util;