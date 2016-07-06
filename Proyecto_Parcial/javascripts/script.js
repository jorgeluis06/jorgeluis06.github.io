var main = function(){
	var url = "json/centros_medicos.json";

	//$.getJSON(url, funcion);
	//var url = "test.json";
	
	$.getJSON(url, function(respuesta){
		console.log(respuesta);
		
		respuesta.centros_medicos.forEach(function(item){
			$("#detalles").hide();
			var $div = $("<div></div>");
			var $a = $("<a></a>");
			var $img = $("<img>");
			$div.addClass("col-lg-3 col-md-4 col-xs-6 thumb");
			$a.addClass("thumbnail");
			$a.attr("href", "#");
			$img.attr("src", item.imagen);
			$img.addClass("img-responsive");
			$a.append($img);
			$div.append($a);
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
	        });
		})
	});


}

$(document).ready(main);
