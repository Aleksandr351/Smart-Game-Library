import { games } from "../data/games.js";
import { applyFilters } from "../js/filterGames.js";
import { renderSelectOptions } from "../js/renderSelectOptions.js";

const gameList = document.querySelector("#gameList");
const input = document.querySelector("#searchInput");
const genreSelect = document.querySelector("#genreFilter");
const statusSelect = document.querySelector("#statusFilter");
const sortSelect = document.querySelector("#sortSelect");
const gamesCount = document.querySelector('#gamesCount');
const resetFilterButton = document.querySelector("#resetFilterButton");

function updateGames() {
	applyFilters(games, input, genreSelect, statusSelect,sortSelect, gamesCount, gameList);
}

input.addEventListener('input', 	updateGames);
genreSelect.addEventListener('change', 	updateGames);
statusSelect.addEventListener('change', 	updateGames);
sortSelect.addEventListener('change', 	updateGames);
resetFilterButton.addEventListener('click', resetFilters)


renderSelectOptions(games, genreSelect, 'genre', 'Все жанры');
renderSelectOptions(games, statusSelect, 'status', 'Все статусы');
updateGames();

function resetFilters () {
	input.value = "";
	genreSelect.value = 'all';
	statusSelect.value = "all";
	sortSelect.value = 'default';

	updateGames();
}