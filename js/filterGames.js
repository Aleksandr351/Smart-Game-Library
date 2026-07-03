import { renderCards } from "./renderCards.js";
import { sortGames } from "./sortGames.js";
export function applyFilters(games, input, genreSelect, statusSelect,sortSelect, gameList) {

	const searchText = input.value.toLowerCase();
	const selectedGenre = genreSelect.value;
	const selectedStatus = statusSelect.value;
	const selectedSort = sortSelect.value;

	let filteredGames = [];

	for (let i = 0; i < games.length; i++) {
		const gameTitle = games[i].title.toLowerCase();
		const gameGenre = games[i].genre;
		const gameStatus = games[i].status;

		const isTitleMatch = gameTitle.includes(searchText);
		const isGenreMatch = selectedGenre === 'all' || gameGenre === selectedGenre;
		const isStatusMatch = selectedStatus === 'all' || gameStatus === selectedStatus;

		if (isTitleMatch && isGenreMatch && isStatusMatch) {
			filteredGames.push(games[i]);
		}
	}

	sortGames(filteredGames, selectedSort);
	renderGamesResult(filteredGames, gameList);
}

function renderGamesResult (gamesArray, gameList) {
	if (gamesArray.length > 0) {
		renderCards(gamesArray, gameList);
	} else {
		gameList.innerHTML = "";

		const emptyMessage = document.createElement('p');
		emptyMessage.textContent = 'Игры не найдены';

		gameList.append(emptyMessage);
}}