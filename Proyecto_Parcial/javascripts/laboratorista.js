var main = function(){
	var url = "json/laboratoristas.json";

	//$.getJSON(url, funcion);
	//var url = "test.json";
	
	$.getJSON(url, function(respuesta){
		console.log(respuesta);
		var cont = 0;
		$("#muestra").show();
		$("#user").text(respuesta.laboratoristas[0].nombre);

		respuesta.laboratoristas[0].pacientes.forEach(function(item){

			var $tr = $("<tr></tr>");
			var $td1 = $("<td></td>");
			var $td2 = $("<td></td>");
			var $td3 = $("<td></td>");
			$td1.text(respuesta.laboratoristas[0].pacientes[cont]);
			$td2.text(respuesta.laboratoristas[0].centros_medicos[cont]);
			$td3.text(respuesta.laboratoristas[0].examenes[cont]);
			cont = cont + 1;
			$tr.append($td1);
			$tr.append($td2);
			$tr.append($td3);
			$tr.append('<td><select class="form-control" id="centro-medico"><option selected="selected">Éxito</option><option>Pendiente</option></select></td>');
			$tr.append('<td><a href="">Ingresar</a></td>');
			$(".table-striped tbody").append($tr);
			/*$div.append($a);
			$("#centromedico .row").append($div);
			//$img.fadeIn();
			$img.click(function(){
				$("#centromedico").hide();
				$("#detalles").show();
				//var $h2 = $("<h2></h2>");
				//$h2.text(item.nombre);
				$("#nombre_hospital h2").text(item.nombre);
				$("#detalles .row div:nth-child(3) label:nth-child(1)").text(item.direccion);
				$("#detalles .row div:nth-child(3) label:nth-child(2)").text(item.horarios);
				$("#detalles .row div:nth-child(4) iframe").attr("src", item.ruta);
		    	//console.log(nombre);
	        });*/
		})
	});


}

$(document).ready(main);
