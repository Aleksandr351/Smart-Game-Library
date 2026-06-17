import { renderCards } from "./renderCards.js";
export function applyFilters(games, input, select, gameList) {

	const searchText = input.value.toLowerCase();
	const selectedGenre = select.value;

	let filteredGames = [];

	for (let i = 0; i < games.length; i++) {
		const gameTitle = games[i].title.toLowerCase();
		const gameGenre = games[i].genre;

		const isTitleMatch = gameTitle.includes(searchText);
		const isGenreMatch = selectedGenre === 'all' || gameGenre === selectedGenre;

		if (isTitleMatch && isGenreMatch) {
			filteredGames.push(games[i]);
		}
	}

	if (filteredGames.length > 0) {
		renderCards(filteredGames, gameList);
	} else {
		gameList.innerHTML = "";

		const emptyMessage = document.createElement('p');
		emptyMessage.textContent = 'Игры не найдены';

		gameList.append(emptyMessage);
}}