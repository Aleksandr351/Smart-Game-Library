export function sortGames (gamesArray, selectedSort) {
	if (selectedSort === 'default') {
		return;
	}

	gamesArray.sort(function (a, b) {
		return b[selectedSort] - a[selectedSort];
	});
}

