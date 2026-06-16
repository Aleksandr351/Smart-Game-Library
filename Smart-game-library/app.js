import { games } from "../data/games.js";
import { renderCards } from "../js/renderCards.js";

const gameList = document.querySelector("#gameList");
const input = document.querySelector("#searchInput");
const select = document.querySelector("#genreFilter");



input.addEventListener('input', function () {
	applyFilters();
})

select.addEventListener('change', function () {
	applyFilters();
});


function applyFilters() {

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

renderCards(games, gameList);