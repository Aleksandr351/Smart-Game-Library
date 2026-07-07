import { renderCards } from "./renderCards.js";
import { sortGames } from "./sortGames.js";
export function applyFilters(games, input, genreSelect, statusSelect,sortSelect, gamesCount, gameList) {

	const searchText = input.value.toLowerCase();
	const selectedGenre = genreSelect.value;
	const selectedStatus = statusSelect.value;
	const selectedSort = sortSelect.value;

	const filteredGames = games.filter(function (game) {

		const gameTitle = game.title.toLowerCase();
		const gameGenre = game.genre;
		const gameStatus = game.status;

		const isTitleMatch = gameTitle.includes(searchText);
		const isGenreMatch = selectedGenre === 'all' || gameGenre === selectedGenre;
		const isStatusMatch = selectedStatus === 'all' || gameStatus === selectedStatus;

		return isTitleMatch && isGenreMatch && isStatusMatch;
	})

	sortGames(filteredGames, selectedSort);
	gamesCount.textContent = 'Найдено игр: ' + filteredGames.length;
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