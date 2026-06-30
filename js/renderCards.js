export let renderCards = function (gamesArray, gameList) {
	gameList.innerHTML = "";

	for (let i = 0; i < gamesArray.length; i++) {
	const article = document.createElement('article');
	article.classList.add('game-card');

	const gameTitle = document.createElement('h3');
	gameTitle.classList.add("game-card__title");
	gameTitle.textContent = gamesArray[i].title;

	const genre = document.createElement('p');
	genre.classList.add("game-card__info");
	genre.textContent = "Жанр: " + gamesArray[i].genre;

	const year = document.createElement('p');
	year.classList.add("game-card__info");
	year.textContent = "Год: " + gamesArray[i].year;

	const rating = document.createElement('p');
	rating.classList.add("game-card__info");
	rating.textContent = "Оценка: " + gamesArray[i].rating;

	const platform = document.createElement("p");
	platform.classList.add("game-card__info");
	platform.textContent = 'Платформа: ' + gamesArray[i].platform;

	const status = document.createElement("p");
	status.classList.add("game-card__status");
	status.textContent = 'Статус: ' + gamesArray[i].status;

	const playTime = document.createElement("p");
	playTime.classList.add("game-card__info");
	playTime.textContent = "Время прохождения: " + gamesArray[i].playTime;

	const description = document.createElement("p");
	description.classList.add("game-card__description");
	description.textContent = "Описание: " + gamesArray[i].description;

	article.append(gameTitle);
	article.append(genre);
	article.append(year);
	article.append(rating);
	article.append(platform);
	article.append(status);
	article.append(playTime);
	article.append(description);


	gameList.append(article);
}
};
