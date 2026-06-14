const games = [
	{
		id: 1,
		title: 'The Witcher 3',
		genre: 'RPG',
		year: 2015,
		rating: 9.5
	},
	{
		id: 2,
		title: 'Cyberpunk 2077',
		genre: 'RPG',
		year: 2020,
		rating: 8.7
	},
	{
		id: 3,
		title: 'Red Dead Redemeption 2',
		genre: 'Action',
		year: 2018,
		rating: 9.7
	}
]

const gameList = document.querySelector("#gameList");
const input = document.querySelector("#searchInput");

let renderCards = function () {
	gameList.innerHTML = "";
	for (let i = 0; i < games.length; i++) {
	const article = document.createElement('article');
	article.classList.add('game-card');
	const gameTitle = document.createElement('h3');
	gameTitle.textContent = games[i].title;
	const genre = document.createElement('p')
	genre.textContent = "Жанр: " + games[i].genre;
	const year = document.createElement('p')
	year.textContent = "Год: " + games[i].year;
	const rating = document.createElement('p')
	rating.textContent = "Оценка: " + games[i].rating;
	article.append(gameTitle);
	article.append(genre);
	article.append(year);
	article.append(rating);
	gameList.append(article);
}
};

renderCards();

input.addEventListener('input', function() {
	const text = input.value;
	for ()
});

