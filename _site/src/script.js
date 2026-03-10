function openModal() {
	document.body.classList.add('no-scroll'); 
	let modal = document.getElementById('downloadModal')
	modal.style.display = 'block'
	var link = document.createElement('a');
	link.setAttribute('href', '../books/resources/john_martin.jpg');
	link.setAttribute('download', 'john_martin.jpg');

	link.style.display = 'none';

      
   document.body.appendChild(link);
   // link.click();
   document.body.removeChild(link);
}

function closeModal() {
	document.body.classList.remove('no-scroll'); 
	let modal = document.getElementById('downloadModal')
	modal.style.display = 'none'
}
