'use strict'
window.addEventListener('load',function(){
	var formulario = document.querySelector('#formulario');
	formulario.addEventListener('submit',function(){
		var numComlum = parseInt(document.getElementById("columnas").value);
		var fechaInicio = document.querySelector('#fechaInicio').value;
		var fechaFinal = document.querySelector('#fechaFinal').value;
		serieFechas(convertirFecha(fechaInicio),convertirFecha(fechaFinal),numComlum);
	});
});
/*
* Verifica los campos (void) 
*/
function verificarCampos(fechaFinal,fechaInicio){
	if(fechaInicio.trim() == null || fechaInicio.trim().length == 0 || fechaFinal.trim() == null || fechaFinal.trim().length == 0){
      	alert("Verica los campos!!!");
      	return false;
    }
}
/*
*convierte el campos de texto a numero (void)
*/
function convertirFecha(fecha){
	var mes = "";
	var anio = "";
	var arreglo = [2];
	for (var i = 0; i < fecha.length; i++) {
    	if(i <= 1){
    		mes = mes.concat(fecha[i]);
    	}
    	if (i >= 3){
    		anio = anio.concat(fecha[i]);
    	}		
    }
    arreglo[0] = parseInt(mes);
    arreglo[1] = parseInt(anio);
    if(arreglo[0] <= 12 && typeof arreglo[0] == 'number' && typeof arreglo[1] == 'number'){
    	return arreglo; 
    }else{
    	alert("Verica los campos!!!");
    	return false;
    }	
}
/*
* obtiene las fechas que estan dentro del fecha de inicio y la fecha final  
*/
function serieFechas(arrayInicio,arrayFinal,numComlum){
	var index = 0;
	if(arrayFinal[1] >= arrayInicio[1]){
		for(var i = arrayInicio[1];i <= arrayFinal[1];i++){
			for(var j = 1; j <= 12 ;j++){
				index++;
				console.log('*'); //aqui va renglon
				if(i == arrayInicio[1]){
					j = arrayInicio[0];
					mostarCalendario(j,i,numComlum,index); //valores para (j)mes y (i)año | numColum index
				}else if(j == arrayFinal[0] && i == arrayFinal[1]){
					mostarCalendario(j,i,numComlum,index);
					break;
				}else{
					mostarCalendario(j,i,numComlum,index);
				}
			}
		}
	}else{
		alert("Verica las fechas!!!");
    	return false;
	}
}
/*
* muestra las fechas ya en formato visual (void)
*/
function mostarCalendario(mes,anio,columna,renglon){ 
	let elementoRenglon = document.createElement('tr'); //renglon PRIMERO
	let elementoColumna = document.createElement('td'); //columna SEGUNDO
	let indexColumna = "Col";
	let indexRenglon = "Ren"+renglon;
	console.log(indexColumna+" "+indexRenglon);
	elementoColumna.setAttribute("id",indexColumna);
	elementoRenglon.setAttribute("id",indexRenglon);
	let template;
	var mesNombre;
	switch(mes){
		case 1:
			mesNombre = 'Enero';
		break;
		case 2:
			mesNombre = 'Febrero';
		break;	 
		case 3:
			mesNombre = 'Marzo';
		break;	 
		case 4:
			mesNombre = 'Abril';
		break;	 
		case 5:
			mesNombre = 'Mayo';
		break;
		case 6:
			mesNombre = 'Junio';
		break;
		case 7:
			mesNombre = 'Julio';
		break;	 
		case 8:
			mesNombre = 'Agosto';
		break;	 
		case 9:
			mesNombre = 'Septiembre';
		break;	 
		case 10:
			mesNombre = 'Octubre';
		break;
		case 11:
			mesNombre = 'Noviembre';
		break;	 
		case 12:
			mesNombre = 'Diciembre';
		break;	 	 
	}
	document.getElementById('tabla').appendChild(elementoRenglon);
	elementoRenglon.appendChild(elementoColumna);
	elementoColumna.innerHTML = `<h4>${mesNombre} ${anio}</h4>
					<ul>
						<li class="day-name">Lun</li>
						<li class="day-name">Mar</li>
						<li class="day-name">Mie</li> 
						<li class="day-name">Jue</li> 
						<li class="day-name">Vie</li> 
						<li class="day-name">Sab</li> 
						<li class="day-name">Dom</li>
						<li>1</li> <li>2</li> <li>3</li> <li>4</li> <li>5</li> <li>6</li> <li>7</li>
						<li>8</li> <li>9</li> <li>10</li> <li>11</li> <li>12</li> <li>13</li> <li>14</li>
						<li>15</li> <li>16</li> <li>17</li> <li>18</li> <li>19</li> <li>20</li> <li>21</li>
						<li>22</li> <li>23</li> <li>24</li> <li>25</li> <li>25</li> <li>26</li> <li>27</li>
						<li>28</li> <li>29</li> <li>30</li> <li>31</li>
					</ul>
	`;
}



