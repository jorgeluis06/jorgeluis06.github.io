//documentready
 $( document ).ready(function() {
        init(); 
    });
	
function init(){
	agregarCentrosMedicos();
	cargarOperario();
	$( ".pull-right" ).on( "click" ,cambiarPestana);
	$( ".btn-danger" ).on( "click" ,pestanaMuestraNueva);
	$( ".btn-success" ).on( "click" ,agregarMuestra);
	
	
}

function agregarMuestra(){
	if ($( ".form-control" ).val() != ""){
		$( ".table-striped > tbody" ).append("<tr></tr>");
		$( ".table-striped > tbody > tr:last" ).append($("<td></td>").text($(".form-control").val()));
		$( ".table-striped > tbody > tr:last" ).append($("<td></td>").text($("#centro-medico option:selected").val()));
		$( ".table-striped > tbody > tr:last" ).append($("<td></td>").text($("#examen option:selected").val()));
		$( ".table-striped > tbody > tr:last" ).append($("<td></td>").text($("#laboratorio option:selected").val()));
		$( ".table-striped > tbody > tr:last" ).append('<td><a href="">Generar reporte</a></td>');
		$( ".table-striped > tbody > tr:last" ).append('<td><button type="button" class="btn btn-default btn-xs" title="Editar"><span class="glyphicon glyphicon-pencil"></span></button><button type="button" class="btn btn-danger btn-xs" title="Eliminar"><span class="glyphicon glyphicon-trash"></span></button></td>');
		$( ".form-control" ).val("");   //txtInput.value;
		pestanaMuestraNueva();
		$(".table-striped").on("click", ".btn.btn-danger.btn-xs", function () {
    		$(this).parent().parent().remove();
		});
		//alert("OK!");
	}
}
function cambiarPestana(){
	$("#muestra").css("display","none");
	$("#muestra-nueva").css("display","block");
}
function pestanaMuestraNueva(){
	$("#muestra").css("display","block");
	$("#muestra-nueva").css("display","none");
}

function agregarCentrosMedicos(){
	var url = "json/centros_medicos.json";
	$.getJSON(url, function(respuesta){
		console.log(respuesta);
		respuesta.centros_medicos.forEach(function(item){
			var $option = $("<option></option>");
			$option.text(item.nombre);
			$("#centro-medico").append($option);
		})

	});
}

function cargarOperario(){
	var url = "json/operarios.json";

	//$.getJSON(url, funcion);
	//var url = "test.json";
	
	$.getJSON(url, function(respuesta){
		console.log(respuesta);
		$("#user").text(respuesta.operarios[0].nombre);

	});
}




