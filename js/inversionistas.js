jQuery(document).ready(function($){
	// Inicializacion de la carga de contenidos html
	includeHTML();
	// Cambio de color del nav con el scroll
	$(document).scroll(function () {
		//console.log('dml:scroll')
		var $nav = $("#inversionistas-navegacion");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
		// Cambia el src del logo en el menu secundario en el scroll
		if ($('#inversionistas-navegacion').hasClass('menu-secundario') && $('#inversionistas-navegacion').hasClass('scrolled')) {
			$('#inversionistas-navegacion-logo').attr("src","/resources/rotoplas_logo_blanco_azul.svg");
			$('#inversionistas-navegacion-logo-interno').attr("src","../resources/rotoplas_logo_blanco_azul.svg");
			$('#inversionistas-navegacion').removeClass('navbar-light');
			$('#inversionistas-navegacion').addClass('navbar-dark');
		} else if ($('#inversionistas-navegacion').hasClass('menu-secundario')) {
			$('#inversionistas-navegacion-logo').attr("src","/resources/rotoplas_logo.svg");
			$('#inversionistas-navegacion-logo-interno').attr("src","../resources/rotoplas_logo.svg");
			$('#inversionistas-navegacion').removeClass('navbar-dark');
			$('#inversionistas-navegacion').addClass('navbar-light');
		}
	});
	// Configuracion slider inicio
	$('#inicio-slider').slick({
		arrows: false,
		dots: true
	});
	//
	if ($('#inversionistas-navegacion').hasClass('menu-secundario')) {
		$('#inversionistas-navegacion').addClass('navbar-light');
	} else {
		$('#inversionistas-navegacion').addClass('navbar-dark');
	}
	//
	document.getElementById('producto-us').onclick = function(e){
		alert('You are being redirected to the Acuantia.com site')
	}
});