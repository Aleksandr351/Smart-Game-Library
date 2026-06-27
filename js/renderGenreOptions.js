export function renderGenreOptions (games, select) {
	select.innerHTML = "";

	const filteredGenres = [];
	const optionAll = document.createElement('option');

	optionAll.value = "all";
	optionAll.textContent = 'Все жанры';

	select.append(optionAll);

	for (let i = 0; i < games.length; i++) {
		if (filteredGenres.includes(games[i].genre)) {
			continue
		} else {
			filteredGenres.push(games[i].genre);
		}
	}

	for (let j = 0; j < filteredGenres.length; j++) {
		const option = document.createElement('option');

		option.value = filteredGenres[j]
		option.textContent = filteredGenres[j];
		
		select.append(option);
	}

}