export function renderStatusOptions (games, statusSelect) {
	statusSelect.innerHTML = "";

	const optionAll = document.createElement('option');
	optionAll.value = 'all';
	optionAll.textContent = 'Все статусы';
	
	statusSelect.append(optionAll);

	let filteredStatuses = [];

	for (let i = 0; i < games.length; i++) {
		if (filteredStatuses.includes(games[i].status)) {
			continue
		} else {
			filteredStatuses.push(games[i].status);
		}
	}

	for (let j = 0; j < filteredStatuses.length; j++) {
		const option = document.createElement('option');

		option.value = filteredStatuses[j];
		option.textContent = filteredStatuses[j];

		statusSelect.append(option);
	}
}