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

for (let i = 0; i < games.length; i++) {
	const gameTitle = document.createElement('h3');
	gameTitle.textContent = games[i].title;
	gameList.append(gameTitle);
}

console.log(gameList);

// 123123123