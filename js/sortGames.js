export function sortGames (gamesArray, selectedSort) {
	if (selectedSort === 'rating') {
		gamesArray.sort(function(a, b) {
			return b.rating - a.rating;
		})
	} else if (selectedSort === 'year') {
		gamesArray.sort(function(a, b) {
			return b.year - a.year;
		})
	} else if (selectedSort === 'playTime') {
		gamesArray.sort(function(a, b){
			return b.playTime - a.playTime;
		})
	}
}