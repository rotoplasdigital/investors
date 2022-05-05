//https://www.w3schools.com/howto/howto_html_include.asp
function includeHTML() {
	var z, i, elmnt, file, xhttp;
	/*loop through a collection of all HTML elements:*/
	z = document.getElementsByTagName("*");
	for (i = 0; i < z.length; i++) {
		elmnt = z[i];
		/*search for elements with a certain atrribute:*/
		file = elmnt.getAttribute("w3-include-html");
		if (file) {
		/*make an HTTP request using the attribute value as the file name:*/
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4) {
			if (this.status == 200) {elmnt.innerHTML = this.responseText;}
			if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
			/*remove the attribute, and call this function once more:*/
			elmnt.removeAttribute("w3-include-html");
			includeHTML();
			}
		}      
		xhttp.open("GET", file, true);
		xhttp.send();
		/*exit the function:*/
		return;
		}
	}
	// cambio de logo
	if ($('nav').hasClass('menu-secundario')) {
		//console.log('secundario');
		$('#inversionistas-navegacion-logo').attr("src","resources/rotoplas_logo.svg");
		$('#inversionistas-navegacion-logo-interno').attr("src","../resources/rotoplas_logo.svg");
		$('.primera-linea').css('display','flex');
		$('.segunda-linea').css('font-size','13px');
		$('#languageSelector').css('font-size','12px');
	} else {
		//console.log('principal');
		$('#inversionistas-navegacion-logo').attr("src","resources/rotoplas_logo_blanco_azul.svg");
		$('#inversionistas-navegacion-logo-interno').attr("src","../resources/rotoplas_logo_blanco_azul.svg");
		$('.primera-linea').css('display','none');
	}
	// Cambio de Idioma
	const protocolo = 'https:' //https
	const dominio = 'rotoplas.com' //127.0.0.1:5500
	var subdominio = ''
	var selectUrl = ''
	document.getElementById('languageSelector').onchange = function(){
		selectIdioma = document.getElementById('languageSelector').value
		selectUrl = window.location.href
		if ( selectIdioma == 'en' ) {
			subdominio = 'investors'
			switch (selectUrl) {
				case protocolo+'//'+dominio+'/inversionistas/':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/'
					break
				case protocolo+'//'+dominio+'/inversionistas/acerca-de-rotoplas/':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/about-rotoplas/'
					break
				case protocolo+'//'+dominio+'/inversionistas/nuestro-portafolio/':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/our-solutions/'
					break
				case protocolo+'//'+dominio+'/inversionistas/nuestro-portafolio/#productos':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/our-solutions/#products'
					break
				case protocolo+'//'+dominio+'/inversionistas/nuestro-portafolio/#servicios':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/our-solutions/#services'
					break
				case protocolo+'//'+dominio+'/inversionistas/informacion-financiera/':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/financial-information/'
					break
				case protocolo+'//'+dominio+'/inversionistas/informacion-financiera/#quarterly-information':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/financial-information/#quarterly-information'
					break
				case protocolo+'//'+dominio+'/inversionistas/informacion-financiera/#presentations':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/financial-information/#presentations'
					break
				case protocolo+'//'+dominio+'/inversionistas/informacion-financiera/#annual-report':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/financial-information/#annual-report'
					break
				case protocolo+'//'+dominio+'/inversionistas/eventos-relevantes/':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/press-releases/'
					break
				case protocolo+'//'+dominio+'/inversionistas/gobierno-corporativo/':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/corporate-governance/'
					break
				case protocolo+'//'+dominio+'/inversionistas/gobierno-corporativo/#board':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/corporate-governance/#board'
					break
				case protocolo+'//'+dominio+'/inversionistas/gobierno-corporativo/#meeting':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/corporate-governance/#meeting'
					break
				case protocolo+'//'+dominio+'/inversionistas/gobierno-corporativo/#documents':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/corporate-governance/#documents'
					break
				case protocolo+'//'+dominio+'/inversionistas/sustentabilidad/':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/sustainability/'
					break
				case protocolo+'//'+dominio+'/inversionistas/sustentabilidad/#strategy':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/sustainability/#strategy'
					break
				case protocolo+'//'+dominio+'/inversionistas/sustentabilidad/#sdgs':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/sustainability/#sdgs'
					break
				case protocolo+'//'+dominio+'/inversionistas/sustentabilidad/#policies':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/sustainability/#policies'
					break
				case protocolo+'//'+dominio+'/inversionistas/agua-bono-sustentable/':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/agua-sustainable-bond/'
					break
				case protocolo+'//'+dominio+'/inversionistas/calendario/':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/calendar/'
					break
				case protocolo+'//'+dominio+'/inversionistas/contacto-ri/':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/ir-contact/'
					break
				case protocolo+'//'+dominio+'/inversionistas/kit-inversionistas/':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/investor-kit/'
					break
				default:
					console.log("Sin mandados")
					break
			}
		} else {
			subdominio = 'inversionistas'
			switch (selectUrl) {
				case protocolo+'//'+dominio+'/investors/':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/'
					break
				case protocolo+'//'+dominio+'/investors/about-rotoplas/':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/acerca-de-rotoplas/'
					break
				case protocolo+'//'+dominio+'/investors/our-solutions/':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/nuestro-portafolio/'
					break
				case protocolo+'//'+dominio+'/investors/our-solutions/#productos':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/nuestro-portafolio/#productos'
					break
				case protocolo+'//'+dominio+'/investors/our-solutions/#servicios':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/nuestro-portafolio/#servicios'
					break
				case protocolo+'//'+dominio+'/investors/financial-information/':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/informacion-financiera/'
					break
				case protocolo+'//'+dominio+'/investors/financial-information/#quarterly-information':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/informacion-financiera/#quarterly-information'
					break
				case protocolo+'//'+dominio+'/investors/financial-information/#presentations':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/informacion-financiera/#presentations'
					break
				case protocolo+'//'+dominio+'/investors/financial-information/#annual-report':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/informacion-financiera/#annual-report'
					break
				case protocolo+'//'+dominio+'/investors/press-releases/':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/eventos-relevantes/'
					break
				case protocolo+'//'+dominio+'/investors/corporate-governance/':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/gobierno-corporativo/'
					break
				case protocolo+'//'+dominio+'/investors/corporate-governance/#board':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/gobierno-corporativo/#board'
					break
				case protocolo+'//'+dominio+'/investors/corporate-governance/#meeting':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/gobierno-corporativo/#meeting'
					break
				case protocolo+'//'+dominio+'/investors/corporate-governance/#documents':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/gobierno-corporativo/#documents'
					break
				case protocolo+'//'+dominio+'/investors/sustainability/':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/sustentabilidad/'
					break
				case protocolo+'//'+dominio+'/investors/sustainability/#strategy':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/sustentabilidad/#strategy'
					break
				case protocolo+'//'+dominio+'/investors/sustainability/#sdgs':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/sustentabilidad/#sdgs'
					break
				case protocolo+'//'+dominio+'/investors/sustainability/#policies':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/sustentabilidad/#policies'
					break
				case protocolo+'//'+dominio+'/investors/agua-sustainable-bond/':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/agua-bono-sustentable/'
					break
				case protocolo+'//'+dominio+'/investors/calendar/':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/calendario/'
					break
				case protocolo+'//'+dominio+'/investors/ir-contact/':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/contacto-ri/'
					break
				case protocolo+'//'+dominio+'/investors/investor-kit/':
					window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/kit-inversionistas/'
					break
				default:
					console.log("Sin mandados")
					break
			}
		}

	}
};