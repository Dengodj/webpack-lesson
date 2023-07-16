function createStatistics() {
	let counter = 0
	const listener = () => counter++
	document.addEventListener('click', listener)

	return {
		getClicks() {
			return counter
		}
	}
}

window.statistics = createStatistics()