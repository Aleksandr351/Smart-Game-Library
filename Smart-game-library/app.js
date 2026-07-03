import { games } from "../data/games.js";
import { renderCards } from "../js/renderCards.js";
import { applyFilters } from "../js/filterGames.js";
import { renderGenreOptions } from "../js/renderGenreOptions.js";
import { renderStatusOptions } from "../js/renderStatusOptions.js";

const gameList = document.querySelector("#gameList");
const input = document.querySelector("#searchInput");
const select = document.querySelector("#genreFilter");
const statusSelect = document.querySelector("#statusFilter");



input.addEventListener('input', function () {
	applyFilters(games, input, select, statusSelect, gameList)
})

select.addEventListener('change', function () {
	applyFilters(games, input, select, statusSelect, gameList)
});

statusSelect.addEventListener('change', function(){
	applyFilters(games, input, select, statusSelect, gameList)
})


renderStatusOptions(games, statusSelect);
renderGenreOptions(games, select);
renderCards(games, gameList);

