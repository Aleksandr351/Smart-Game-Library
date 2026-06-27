export let renderCards = function (gamesArray, gameList) {
	gameList.innerHTML = "";

	for (let i = 0; i < gamesArray.length; i++) {
	const article = document.createElement('article');
	article.classList.add('game-card');

	const gameTitle = document.createElement('h3');
	gameTitle.textContent = gamesArray[i].title;

	const genre = document.createElement('p');
	genre.textContent = "Жанр: " + gamesArray[i].genre;

	const year = document.createElement('p');
	year.textContent = "Год: " + gamesArray[i].year;

	const rating = document.createElement('p');
	rating.textContent = "Оценка: " + gamesArray[i].rating;

	const platform = document.createElement("p");
	platform.textContent = 'Платформа: ' + gamesArray[i].platform;

	const status = document.createElement("p");
	status.textContent = 'Статус: ' + gamesArray[i].status;

	const playTime = document.createElement("p");
	playTime.textContent = "Время прохождения: " + gamesArray[i].playTime;

	const description = document.createElement("p");
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
