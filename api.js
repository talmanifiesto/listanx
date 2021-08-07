document.getElementById('btnfecha').addEventListener('click', function () {
	document.getElementById('loading').className="loader loaderagain";
	document.getElementById('contenido').className="container contenido";

	let antesfecha = document.getElementById('idfecha').value;


let respuesta = new XMLHttpRequest();
let URLapi = 'https://script.google.com/macros/s/AKfycbz0aiJez6Xj8YOHVHh-JbP2-pAbbOzorU8HM1cuH6c5zodmzUE/exec?q=' + antesfecha;
respuesta.open('GET', URLapi, true);
respuesta.send();

respuesta.onreadystatechange = function () {
	if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
		let respuestaJson = JSON.parse(this.responseText);
		console.log(respuestaJson.data);
		let res = document.querySelector('#res');
		res.innerHTML = '';
		let textFila = '';
		let contador = 0;
		for (let item of respuestaJson.data) {
			contador++;
			//console.log(item[0]);


			textFila += '<tr><td>' + contador +


				'</td><td>' + item[5] +
				'</td><td>' + item[7] +
				'</td><td>' + item[30] +
				'</td><td><a class="waves-effect waves-teal btn-flat modal-trigger" href="#modal1"><i class="material-icons">visibility</i></a>' +
				'</td></tr>';
		
			res.innerHTML = textFila;
		}
	}
	document.getElementById('loading').className="loaderagain";
	document.getElementById('contenido').className="container";
}

})


