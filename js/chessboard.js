export default {
	draw,
	highlight
};

let tiles = []


// ****************************

function draw(boardEl) {
	// draw the chessboard, 8 rows (divs)
	// of 8 tiles (divs) each, inserting all DOM
	// elements into `boardEl` div

	for (let i=0; i < 8; i++) {
		let rowEl = document.createElement('div')
		let rowTiles = []
		tiles.push(rowTiles)
		for (let j=0; j< 8; j++) {
			let tileEl = document.createElement('div')
			tileEl.dataset.row = i
			tileEl.dataset.col = j
			rowEl.appendChild(tileEl)
			rowTiles.push(tileEl)
		}
		boardEl.appendChild(rowEl)
	}
}

function highlight(tileEl) {
	// clear previous highlights (if any) and
	// then find the tiles in the two diagonals
	// (major and minor) that `tileEl` belongs to,
	// to highlight them via CSS class "highlighted"

	// clear all currently highlighted tiles
	for (let row of tiles) {
		for (let el of row) {
			el.classList.remove('highlighted')
		}
	}

	if (tileEl) {
		let tileRowIdx = Number(tileEl.dataset.row)
		let tileColIdx = Number(tileEl.dataset.col)

		// highlight in the up-left direction
		for (let i = tileRowIdx, j = tileColIdx; i >=0 && j >= 0; i--, j--) {
			let el = tiles[i][j]
			el.classList.add('highlighted')
		}

		// highlight in the up-right direction
		for (let i = tileRowIdx, j = tileColIdx; i >=0 && j < 8; i--, j++) {
			let el = tiles[i][j]
			el.classList.add('highlighted')
		}

		// highlight in the down-left direction
		for (let i = tileRowIdx, j = tileColIdx; i < 8 && j >= 0; i++, j--) {
			let el = tiles[i][j]
			el.classList.add('highlighted')
		}

		// highlight in the down-right direction
		for (let i = tileRowIdx, j = tileColIdx; i < 8 && j < 8; i++, j++) {
			let el = tiles[i][j]
			el.classList.add('highlighted')
		}
	}
}