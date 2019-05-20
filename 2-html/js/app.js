var ans = document.getElementById('answer');
var qns = prompt('Cual es su Nombre?');

if(qns == 'alec' || qns == 'Alec' || qns == 'ALEC') {
	ans.innerHTML = "Bienvenido Administrador: "+qns;
} else {
	ans.innerHTML = "Bienvenido Visitante: "+qns;
}