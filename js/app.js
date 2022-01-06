var glider = new Glider(document.querySelector('.list'), {
    slidesToShow: 1, // empieza como modo celular . muestra el tamaño de la imagen
    slidesToScroll: 1, // cuando le das siguiente los pasos que va dar
    draggable: true, // arrastable
    //dots: '.carousel__indicadores',  // indicador de abajo
    arrows: {
        prev: '.contenedor-previous',  //boton anterior
        next: '.contenedor-next' //boton siguiente
    },
    
});

	// funcion automatico
	function sliderAuto(slider, miliseconds) {
		const slidesCount = slider.track.childElementCount;
		let slideTimeout = null;
		let nextIndex = 1;
	   
		function slide () {
		  	slideTimeout = setTimeout(
			function () {
			  if (nextIndex >= slidesCount ) {
				nextIndex = 0;
			  }
			  slider.scrollItem(nextIndex++);
			},
			miliseconds
		  );
		}
	   
		slider.ele.addEventListener('glider-animated', function() {
		  window.clearInterval(slideTimeout);
		  slide();
		});
	   
		slide();
	}
	   sliderAuto(glider, 3000)
