import { games } from "../data/games.js";
import { applyFilters } from "../js/filterGames.js";
import { renderGenreOptions } from "../js/renderGenreOptions.js";
import { renderStatusOptions } from "../js/renderStatusOptions.js";

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


renderStatusOptions(games, statusSelect);
renderGenreOptions(games, genreSelect);
updateGames();