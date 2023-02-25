export default {
	draw,
	highlight
};

let diagonals = []
let highlighted = []
let tileDiagonals = new Map()


// ****************************

function draw(boardEl) {
	// draw the chessboard, 8 rows (divs)
	// of 8 tiles (divs) each, inserting all DOM
	// elements into `boardEl` div
	for (let i =0; i < 30; i++) {
		 diagonals.push([])
	}

	for (let i=0; i < 8; i++) {
		let rowEl = document.createElement('div')
		for (let j=0; j< 8; j++) {
			let tileEl = document.createElement('div')
			rowEl.appendChild(tileEl)

			let majorDiag = diagonals[7 - (i -j)]
			let minorDiag = diagonals[15 + (i + j)]

			majorDiag.push(tileEl)
			minorDiag.push(tileEl)

			// save a reference to each of a tile's two diagonal
			// collections
			tileDiagonals.set(tileEl,[ majorDiag, minorDiag ])

			rowEl.appendChild(tileEl)
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
	for (let diagonal of highlighted) {
		for (let el of diagonal) {
			el.classList.remove("highlighted");
		}
	}

	if (tileEl) {
		// retrieve the clicked tile's two diagonal collections
		highlighted = tileDiagonals.get(tileEl)

		// highlight all tiles in both diagonal collections
		for (let diagonal of highlighted) {
			for (let el of diagonal) {
				el.classList.add('highlighted')
			}
		}
	}
}