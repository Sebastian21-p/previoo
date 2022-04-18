function cargarDatos() {
	//alert("Hola");
    var url = "https://sebastian21-p.github.io/jsonpalprevio/equipos.json";
    fetch(url)
        .then(response => response.json())
        .then(data => generarLaptops(data))
        .catch(error => console.log("Error: " + error.message));
}

function generarLaptops(data) {
	var res = document.querySelector("#res");
	res.innerHTML='';
	for(var i = 0; i<data.length; i++){
		res.innerHTML += `
			<tr>
				<td>${data[i].Nombre}</td>
				<td>${data[i].Champions}</td>
			</tr>`
	}
}

document.querySelector('#botonEquipos').addEventListener('click', cargarDatos);
//cargarDatos();