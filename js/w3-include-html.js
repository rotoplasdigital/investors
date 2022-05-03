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
	const protocolo = 'http:' //https
	const dominio = '127.0.0.1:5500' //rotoplas.com
	var subdominio = ''
	var selectUrl = ''
	document.getElementById('languageSelector').onchange = function(){
		selectIdioma = document.getElementById('languageSelector').value
		selectUrl = window.location.href
		if ( selectIdioma == 'en' ) {
			subdominio = 'investors'
			switch (selectUrl) {
				case protocolo+'//'+dominio+'/inversionistas/':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/'
					break
				case protocolo+'//'+dominio+'/acerca-de-rotoplas/':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/about-rotoplas/'
					break
				case protocolo+'//'+dominio+'/nuestro-portafolio/':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/our-solutions/'
					break
				case protocolo+'//'+dominio+'/nuestro-portafolio/#productos':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/our-solutions/#products'
					break
				case protocolo+'//'+dominio+'/nuestro-portafolio/#servicios':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/our-solutions/#services'
					break
				case protocolo+'//'+dominio+'/informacion-financiera/':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/financial-information/'
					break
				case protocolo+'//'+dominio+'/informacion-financiera/#quarterly-information':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/financial-information/#quarterly-information'
					break
				case protocolo+'//'+dominio+'/informacion-financiera/#presentations':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/financial-information/#presentations'
					break
				case protocolo+'//'+dominio+'/informacion-financiera/#annual-report':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/financial-information/#annual-report'
					break
				case protocolo+'//'+dominio+'/eventos-relevantes/':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/press-releases/'
					break
				case protocolo+'//'+dominio+'/gobierno-corporativo/':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/corporate-governance/'
					break
				case protocolo+'//'+dominio+'/gobierno-corporativo/#board':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/corporate-governance/#board'
					break
				case protocolo+'//'+dominio+'/gobierno-corporativo/#meeting':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/corporate-governance/#meeting'
					break
				case protocolo+'//'+dominio+'/gobierno-corporativo/#documents':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/corporate-governance/#documents'
					break
				case protocolo+'//'+dominio+'/sustentabilidad/':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/sustainability/'
					break
				case protocolo+'//'+dominio+'/sustentabilidad/#strategy':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/sustainability/#strategy'
					break
				case protocolo+'//'+dominio+'/sustentabilidad/#sdgs':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/sustainability/#sdgs'
					break
				case protocolo+'//'+dominio+'/sustentabilidad/#policies':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/sustainability/#policies'
					break
				case protocolo+'//'+dominio+'/agua-bono-sustentable/':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/agua-sustainable-bond/'
					break
				case protocolo+'//'+dominio+'/calendario/':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/calendar/'
					break
				case protocolo+'//'+dominio+'/contacto-ri/':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/ir-contact/'
					break
				case protocolo+'//'+dominio+'/kit-inversionistas/':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/investor-kit/'
					break
				default:
					console.log("Sin mandados")
					break
			}
		} else {
			subdominio = 'inversionistas'
			switch (selectUrl) {
				case protocolo+'//'+dominio+'/investors/':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/'
					break
				case protocolo+'//'+dominio+'/about-rotoplas/':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/acerca-de-rotoplas/'
					break
				case protocolo+'//'+dominio+'/our-solutions/':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/nuestro-portafolio/'
					break
				case protocolo+'//'+dominio+'/our-solutions/#productos':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/nuestro-portafolio/#productos'
					break
				case protocolo+'//'+dominio+'/our-solutions/#servicios':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/nuestro-portafolio/#servicios'
					break
				case protocolo+'//'+dominio+'/financial-information/':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/informacion-financiera/'
					break
				case protocolo+'//'+dominio+'/financial-information/#quarterly-information':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/informacion-financiera/#quarterly-information'
					break
				case protocolo+'//'+dominio+'/financial-information/#presentations':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/informacion-financiera/#presentations'
					break
				case protocolo+'//'+dominio+'/financial-information/#annual-report':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/informacion-financiera/#annual-report'
					break
				case protocolo+'//'+dominio+'/press-releases/':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/eventos-relevantes/'
					break
				case protocolo+'//'+dominio+'/corporate-governance/':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/gobierno-corporativo/'
					break
				case protocolo+'//'+dominio+'/corporate-governance/#board':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/gobierno-corporativo/#board'
					break
				case protocolo+'//'+dominio+'/corporate-governance/#meeting':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/gobierno-corporativo/#meeting'
					break
				case protocolo+'//'+dominio+'/corporate-governance/#documents':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/gobierno-corporativo/#documents'
					break
				case protocolo+'//'+dominio+'/sustainability/':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/sustentabilidad/'
					break
				case protocolo+'//'+dominio+'/sustainability/#strategy':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/sustentabilidad/#strategy'
					break
				case protocolo+'//'+dominio+'/sustainability/#sdgs':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/sustentabilidad/#sdgs'
					break
				case protocolo+'//'+dominio+'/sustainability/#policies':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/sustentabilidad/#policies'
					break
				case protocolo+'//'+dominio+'/agua-sustainable-bond/':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/agua-bono-sustentable/'
					break
				case protocolo+'//'+dominio+'/calendar/':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/calendario/'
					break
				case protocolo+'//'+dominio+'/ir-contact/':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/contacto-ri/'
					break
				case protocolo+'//'+dominio+'/investor-kit/':
					//window.location.href = protocolo+'//'+dominio+'/'+subdominio+'/kit-inversionistas/'
					break
				default:
					console.log("Sin mandados")
					break
			}
		}

	}
};