jQuery(document).ready(function($){
	// LECTURA DE HASH EN URL
		//obtenemos en que seccion estamos
		showId = ''
		// verificamos que exista un hash en la url
		if ( window.location.hash.substr(1).length > 0 ) {
			showId = window.location.hash.substr(1)
			firstLoad(showId)
		} else {
			seccion = $('body')[0].getAttribute('attr')
			//
			if (seccion == 'nuestro-portafolio') {
				showId = 'productos'
				firstLoad(showId)
			}
			if (seccion == 'informacion-financiera') {
				showId = 'informe-trimestral'
				firstLoad(showId)
			}
			if (seccion == 'gobierno-corporativo') {
				showId = 'consejo'
				firstLoad(showId)
			}
			if (seccion == 'sustentabilidad') {
				showId = 'estrategia'
				firstLoad(showId)
			}
		}
		function firstLoad(showId) {
			$('.tab-selector[attr="'+ showId +'"]').addClass('tab-selector-selected')
			$('#' + showId).fadeIn()
		}
		$(window).on('hashchange', function() {
			console.log('reload')
			location.reload()
		})
	// TABS
		$('body').on("click", ".tab-selector", function(){
			tabClicked = this.getAttribute('attr')
			$(this).parent().find("[class*='tab-selector-selected']").removeClass('tab-selector-selected')
			$('.tab-selector[attr="' + tabClicked + '"]').addClass('tab-selector-selected')
			console.log('click: ' + tabClicked)
			showHideTabs(tabClicked)
		})
		//
		function showHideTabs(tabClicked) {
			console.log('showHideTabs')
			$('.tab:visible').each(function(){
				$(this).fadeOut('fast', function(){
					$('#' + tabClicked).fadeIn(function(){
						if (tabClicked == "ods") {
							console.log('ODS')
							// botones - nav
							$("#contribucion-btn-wrapper").slick({
								slidesToShow: 3,
								slidesToScroll: 1,
								asNavFor: '#contribucion-slider-wrapper',
								centerMode: true,
								focusOnSelect: true,
								responsive: [
									{
										breakpoint: 721,
										settings: {
											slidesToShow: 1,
											slidesToScroll: 1,
											arrows: true
										}
									}
								]
							});
							// slider - slider
							$("#contribucion-slider-wrapper").slick({
								asNavFor: '#contribucion-btn-wrapper',
								infinite: true,
								arrows: true
							});
						} else {
							$("#contribucion-btn-wrapper").slick('unslick')
							$("#contribucion-slider-wrapper").slick('unslick')
						}
					})
				})
			})
		}
	// SUBTABS
		$('body').on("click", ".subtab-selector", function(){
			tabClicked = this.getAttribute('attr')
			//$(this).parent().find('.subtab-selector.subtab-selector-selected').removeClass('subtab-selector-selected')
			$(this).parent().find("[class*='subtab-selector-selected']").removeClass('subtab-selector-selected')
			$('.subtab-selector[attr="' + tabClicked + '"]').addClass('subtab-selector-selected')
			console.log('click: ' + tabClicked)
			showHideSubTabs(tabClicked)
		})
		//
		function showHideSubTabs(tabClicked) {
			console.log('showHideTabs')
			$('.subtab:visible').each(function(){
				$(this).fadeOut('fast', function(){
					$('#' + tabClicked).fadeIn()
				})
			})
		}
	//THIRD TABS
		$('body').on("click", ".thirdbtab-selector", function(){
			tabClicked = this.getAttribute('attr')
			$(this).parent().find("[class*='thirdbtab-selector-selected']").removeClass('thirdbtab-selector-selected')
			$('.thirdbtab-selector[attr="' + tabClicked + '"]').addClass('thirdbtab-selector-selected')
			console.log('click: ' + tabClicked)
			showHideThirdTabs(tabClicked)
		})
		//
		function showHideThirdTabs(tabClicked) {
			console.log('showHideTabs')
			$('.thirdbtab:visible').each(function(){
				$(this).fadeOut('fast', function(){
					$('#' + tabClicked).fadeIn()
				})
			})
		}
	// NUESTRO PORTAFOLIO TABS
		the_tab = "almacenamiento";
		pais = 'MX';
		/* Obtencion de la region
		$.get("https://ipinfo.io", function (response) {
			pais = response.country;
			console.log("Country: " + pais);
			//productosOcultarMostrar();
		}, "jsonp"); */
		productosOcultarMostrar();
		// tabs
			$('#g-agroindustria, #g-conduccion, #g-purificacion, #g-tratamiento, #g-calentamiento, #g-tuberia').css( 'display' , 'none' );

			$('.unidad-tab').click(function(){
				the_tab = $(this).attr('data');
				//console.log( 'tab: ' + the_tab );
				$('.unidad-tab').removeClass('unidad-tab-selected');
				$(this).addClass('unidad-tab-selected');
				$('.unidad-tab-nodo').css( 'display' , 'none' );
				$("#g-" + the_tab ).fadeIn();
			});
		// botones de pais
			// CAM = Guatemala/GT, El Salvador/SV, Honduras/HN, Nicaragua/NI, Costa rica/CR
			$('.producto-pais').click(function(){
				pais = $(this).attr('data');
				//console.log('producto-pais:' + pais);
				$('.producto-pais').removeClass('producto-pais-seleccion');
				$(this).addClass('producto-pais-seleccion');
				productosOcultarMostrar();
			});
		// funcion para ocultar productos segun el pais
			function productosOcultarMostrar() {
				if (pais == 'GT' || pais == 'SV' || pais == 'HN' || pais == 'NI' || pais == 'CR') {
					pais = 'CAM';
				}

				$(".unidad-tab").each(function(){
					if (!$(this).hasClass(pais)) {
						$(this).css('display','none');
					} else {
						$(this).css('display','block');
					}
				});

				//console.log('productosOcultarMostrar');
				$(".productos-nodo").each(function(){
					if (!$(this).hasClass(pais)) {
						$(this).css('display','none');
					} else {
						$(this).css('display','inline-block');
					}
				});

				//imagen_head = document.getElementById('head-' + the_tab);

				if (the_tab === "calentamiento" && pais === "AR") {
					document.getElementById('head-' + the_tab).src="https://rotoplas.com/rtp-resources/soluciones-productos/calentamiento-AR-head.jpg";
				} else if (the_tab == "calentamiento" && pais=="MX") {
					document.getElementById('head-' + the_tab).src="https://rotoplas.com/rtp-resources/soluciones-productos/calentamiento-MX-head.jpg";
				} else if (the_tab == "calentamiento" && pais=="PE") {
					document.getElementById('head-' + the_tab).src="https://rotoplas.com/rtp-resources/soluciones-productos/calentamiento-PE-head.jpg";
				} else if (the_tab === "tuberia" && pais === "AR") {
					document.getElementById('head-' + the_tab).src="https://rotoplas.com/rtp-resources/soluciones-productos/conduccion-AR-head.jpg";
				} else if (the_tab === "tratamiento" && pais === "AR") {
					document.getElementById('head-' + the_tab).src="https://rotoplas.com/rtp-resources/soluciones-productos/tratamiento-AR-head.jpg";
				}
			}
		//
})