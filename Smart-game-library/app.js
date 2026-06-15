import { games } from "../data/games.js";
import { renderCards } from "../js/renderCards.js";

const gameList = document.querySelector("#gameList");
const input = document.querySelector("#searchInput");
const select = document.querySelector("#genreFilter");



input.addEventListener('input', function () {
	const textInput = input.value;
	let filteredGames = [];
	for (let i = 0; i < games.length; i++) {
		if (games[i].title.toLowerCase().includes(textInput.toLowerCase())) {
			filteredGames.push(games[i]);
		}
	}
	if (filteredGames.length > 0) {
		renderCards(filteredGames, gameList);
	} else {
		gameList.innerHTML = "";
		const emptyMessage=document.createElement('p');
		emptyMessage.textContent = "Игры не найдены";
		gameList.append(emptyMessage);
	}
})

select.addEventListener('change', function () {
	let filteredGames = [];

	for (let i = 0; i < games.length; i++) {
		if (select.value === 'all' || select.value === games[i].genre) {
			filteredGames.push(games[i]);
		}
	}
	renderCards(filteredGames, gameList);
});

renderCards(games, gameList);