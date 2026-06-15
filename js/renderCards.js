export let renderCards = function (gamesArray, gameList) {
	gameList.innerHTML = "";

	for (let i = 0; i < gamesArray.length; i++) {
	const article = document.createElement('article');
	article.classList.add('game-card');

	const gameTitle = document.createElement('h3');
	gameTitle.textContent = gamesArray[i].title;

	const genre = document.createElement('p')
	genre.textContent = "Жанр: " + gamesArray[i].genre;

	const year = document.createElement('p')
	year.textContent = "Год: " + gamesArray[i].year;

	const rating = document.createElement('p')
	rating.textContent = "Оценка: " + gamesArray[i].rating;

	article.append(gameTitle);
	article.append(genre);
	article.append(year);
	article.append(rating);

	gameList.append(article);
}
};
