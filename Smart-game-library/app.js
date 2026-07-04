import { games } from "../data/games.js";
import { applyFilters } from "../js/filterGames.js";
import { renderSelectOptions } from "../js/renderSelectOptions.js";

const gameList = document.querySelector("#gameList");
const input = document.querySelector("#searchInput");
const genreSelect = document.querySelector("#genreFilter");
const statusSelect = document.querySelector("#statusFilter");
const sortSelect = document.querySelector("#sortSelect");

function updateGames() {
	applyFilters(games, input, genreSelect, statusSelect,sortSelect, gameList);
}

input.addEventListener('input', 	updateGames);
genreSelect.addEventListener('change', 	updateGames);
statusSelect.addEventListener('change', 	updateGames);
sortSelect.addEventListener('change', 	updateGames);

renderSelectOptions(games, genreSelect, 'genre', 'Все жанры');
renderSelectOptions(games, statusSelect, 'status', 'Все статусы');
updateGames();