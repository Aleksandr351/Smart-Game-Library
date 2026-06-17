import { games } from "../data/games.js";
import { renderCards } from "../js/renderCards.js";
import { applyFilters } from "../js/filterGames.js";
import { renderGenreOptions } from "../js/renderGenreOptions.js";

const gameList = document.querySelector("#gameList");
const input = document.querySelector("#searchInput");
const select = document.querySelector("#genreFilter");



input.addEventListener('input', function () {
	applyFilters(games, input, select, gameList);
})

select.addEventListener('change', function () {
	applyFilters(games, input, select, gameList);
});





renderGenreOptions(games, select);
renderCards(games, gameList);