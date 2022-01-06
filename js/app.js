var glider = new GLider(document.querySelector('.list'),{
    slidesToShow: 1, // empieza como modo celular . muestra el tamaño de la imagen
    slidesToScroll: 1, // cuando le das siguiente los pasos que va dar
    draggable: true, // arrastable
    //dots: '.carousel__indicadores',  // indicador de abajo
    arrows: {
        prev: '.carousel__anterior',  //boton anterior
        next: '.carousel__siguiente' //boton siguiente
    },
    responsive: [ //responsive
        {
          // screens greater than >= 775px
          breakpoint: 450,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 2,
            slidesToScroll: 1,
            duration: 0.5
          }
        },{
          // screens greater than >= 1024px
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            duration: 0.5,
          }
        }
    ] 
});