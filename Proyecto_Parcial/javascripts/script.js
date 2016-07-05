var main = function(){
	var url = "json/centros_medicos.json";

	//$.getJSON(url, funcion);
	//var url = "test.json";
	
	$.getJSON(url, function(respuesta){
		//console.log(respuesta);
		
		respuesta.centros_medicos.forEach(function(item){
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
		})
	});
	//console.log("Practica");
}

$(document).ready(main);
