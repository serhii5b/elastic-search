document.querySelector('#elastic').addEventListener('input', (event) => {
			let val = event.target.value.trim();

			let listItems = document.querySelectorAll('#elastic-list li');
			if(val != ''){
				listItems.forEach(elem => {
					if (elem.innerText.search(val) == -1){
						elem.classList.add('hide');
						elem.innerHTML = elem.innerText;
					} else {
						elem.classList.remove('hide');
						let str = elem.innerText;
						elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length)
					}
				})
			} else {
				listItems.forEach(elem => {
					elem.classList.remove('hide');
					elem.innerHTML = elem.innerText;
				})
			}
			// console.log(listItems);

			function insertMark(str, pos, len){
				// return str.slice(0, pos) + '<span class="mark">' + str.slice(pos, pos + len) + '</span>' + str.slice(pos + len);
				return `${str.slice(0, pos)}<span class="mark">${str.slice(pos, pos + len)}</span>${str.slice(pos + len)}`
			}
		})