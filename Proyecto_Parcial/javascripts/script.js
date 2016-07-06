var main = function(){
	var url = "json/centros_medicos.json";
	var url2 = "json/examenes.json";
	var url3 = "json/pacientes.json";

	//$.getJSON(url, funcion);
	//var url = "test.json";
	$(".tabs a span").click(function(e) {
			e.preventDefault(); 
			$(".tabs a span").removeClass("active");
			$(this).addClass("active");
			if ($(".active").text()=="Centros Médicos"){
				$("#centromedico").show();
				$("#detalles").hide();
				$("#examenes").hide();
				$("#datos").hide();
			}
			else if ($(".active").text()=="Mis Exámenes"){
				$("#centromedico").hide();
				$("#detalles").hide();
				$("#examenes").show();
				$("#datos").hide();			
			}
			else if ($(".active").text()=="Mis Datos"){
				$("#centromedico").hide();
				$("#detalles").hide();
				$("#examenes").hide();
				$("#datos").show();
			}
		}
	);

	//Carga de centros médicos desde archivo Json
	$.getJSON(url, function(respuesta){
		console.log(respuesta);
		
		respuesta.centros_medicos.forEach(function(item){
			$("#detalles").hide();
			$("#examenes").hide();
			$("#datos").hide();
			var $div = $("<div></div>");
			var $a = $("<a></a>");
			var $img = $("<img>");
			var $h5 =$("<h5></h5>");
			$h5.text(item.nombre);
			$h5.addClass("nombresCentrosMedicos");
			$div.addClass("col-lg-3 col-md-4 col-xs-6 thumb");
			$a.addClass("thumbnail");
			$a.attr("href", "#");
			$img.attr("src", item.imagen);
			$img.addClass("img-responsive");
			$a.append($img);
			$a.append($h5);
			$div.append($a);
			$("#centromedico .row").append($div);
			//$img.fadeIn();
			$a.click(function(){
				$("#centromedico").hide();
				$("#detalles").show();
				//var $h2 = $("<h2></h2>");
				//$h2.text(item.nombre);
				$("#nombre_hospital h2").text(item.nombre);
				$("#detalles .row div:nth-child(3) label:nth-child(1)").text(item.direccion);
				$("#detalles .row div:nth-child(3) label:nth-child(2)").text(item.horarios);
				$("#detalles .row div:nth-child(4) iframe").attr("src", item.ruta);
		    	//console.log(nombre);
	        });
		})
	});

	//Carga de examenes desde archivo Json
	$.getJSON(url2, function(respuesta){
		console.log(respuesta);
		
		respuesta.examenes.forEach(function(item){
			$("#detalles").hide();
			var $tr = $("<tr></tr>");
			var $td1 = $("<td></td>");
			var $td2 = $("<td></td>");
			var $td3 = $("<td></td>");
			var $a = $("<a></a>");
			$a.attr("href", "#");
			$td1.text(item.tipo);
			$td2.text(item.fecha);
			$td3.text(item.estado);
			$tr.append($td1);
			$tr.append($td2);
			if ($td3.text()=="Ver resultados del examen"){
				$td3.css("color", "#428bca");
				$tr.append($td3);
				/*$a.append($td3);
				$tr.append($a);*/
			}
			else{
				$tr.append($td3);
			}	
			$("#examenes table").append($tr);

		})
	});

	//Carga de datos del paciente desde archivo Json
	$.getJSON(url3, function(respuesta){
		console.log(respuesta);
		
		respuesta.pacientes.forEach(function(item){
			$("#detalles").hide();
			var $inputNombres = $("<input>");
			var $inputApellidos = $("<input>");
			var $inputCedula = $("<input>");
			var $inputCorreo = $("<input>");
			var $inputDireccion = $("<input>");
			var $inputTelefonos = $("<input>");
			var $p = $("<p></p>")
			$p.text("hola");
			$inputNombres.attr("type","text");
			$inputApellidos.attr("type","text");
			$inputCedula.attr("type","text");
			$inputCorreo.attr("type","email");
			$inputDireccion.attr("type","text");
			$inputTelefonos.attr("type","tel");

			$inputNombres.addClass("form-control");
			$inputApellidos.addClass("form-control");
			$inputCedula.addClass("form-control");
			$inputCorreo.addClass("form-control");
			$inputDireccion.addClass("form-control");
			$inputTelefonos.addClass("form-control");

			$inputNombres.attr("id","inputNombre");
			$inputApellidos.attr("id","inputApellido");
			$inputCedula.attr("id","inputCedula");
			$inputCorreo.attr("id","inputCorreo");
			$inputDireccion.attr("id","inputDireccion");
			$inputTelefonos.attr("id","inputTelefono");

			$inputNombres.attr("value",item.nombres);
			$inputApellidos.attr("value",item.apellidos);
			$inputCedula.attr("value",item.cedula);
			$inputCorreo.attr("value",item.correo);
			$inputDireccion.attr("value",item.direccion);
			$inputTelefonos.attr("value",item.telefonos);

			$inputNombres.attr("readonly");
			$inputApellidos.attr("readonly");
			$inputCedula.attr("readonly");
			
			$("#datos #datos_nombres div").append($inputNombres);
			$("#datos #datos_apellidos div").append($inputApellidos);
			$("#datos #datos_cedula div").append($inputCedula);
			$("#datos #datos_correo div").append($inputCorreo);
			$("#datos #datos_direccion div").append($inputDireccion);
			$("#datos #datos_telefonos div").append($inputTelefonos);

		})
	});	


}



$(document).ready(main);
