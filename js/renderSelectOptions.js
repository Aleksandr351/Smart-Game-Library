export function renderSelectOptions (games, select, fieldName, defaultText) {
	select.innerHTML = "";

	const uniqueValues = new Set();

	const optionAll = createOption('all', defaultText);

	select.append(optionAll);

	for (let i = 0; i < games.length; i++) {
			uniqueValues.add(games[i][fieldName]);
		}

		
	for (const value of uniqueValues) {
		const option = createOption(value, value);

		select.append(option);
	}

}

function createOption (value, text) {
	const option = document.createElement('option');

	option.value = value;
	option.textContent = text;

	return option;
}