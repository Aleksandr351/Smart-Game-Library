function createCardElement (tag, className, text) {
	const element = document.createElement(tag);

	element.classList.add(className);
	element.textContent = text;

	return element;
}

function createStatusElement (tag, statusOfGame) {
	const element = document.createElement(tag);

	element.classList.add('game-card__status');

	if (statusOfGame === "Пройдено") {
		element.classList.add('game-card__status--completed');
	} else if (statusOfGame === "Играю") {
		element.classList.add('game-card__status--playing');
	} else {
		element.classList.add('game-card__status--planned');
	}

	element.textContent = statusOfGame;

	return element;
}

export let renderCards = function (gamesArray, gameList) {
	gameList.innerHTML = "";

	for (let i = 0; i < gamesArray.length; i++) {
	const article = document.createElement('article');

	article.classList.add('game-card');

	const gameTitle = createCardElement("h3", "game-card__title", gamesArray[i].title);

	const genre = createCardElement("p", "game-card__info", "Жанр: " + gamesArray[i].genre);

	const year = createCardElement("p", "game-card__info", "Год: " + gamesArray[i].year);

	const rating = createCardElement("p", "game-card__info", "Оценка: " + gamesArray[i].rating);

	const platform = createCardElement("p", "game-card__info", "Платформа: " + gamesArray[i].platform);

	const playTime = createCardElement("p", "game-card__info", "Время прохождения: " + gamesArray[i].playTime);

	const description = createCardElement("p", "game-card__description", "Описание: " + gamesArray[i].description);

	const status = createStatusElement('p', gamesArray[i].status);

	article.append(gameTitle);
	article.append(genre);
	article.append(year);
	article.append(rating);
	article.append(platform);
	article.append(playTime);
	article.append(description);
	article.append(status);


	gameList.append(article);
}
};
